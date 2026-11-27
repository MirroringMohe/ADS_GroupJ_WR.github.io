import { CATEGORIES, META, OFFERS, PLATFORMS } from "./data.js";
import {
  compareStats,
  completeness,
  discountPercent,
  filterOffers,
  formatMoney,
  sortOffers,
  unitPrice,
} from "./logic.js";

const MAX_COMPARE = 3;
const STORAGE_KEY = "live-offset-first-version-selection";
const DEFAULT_SELECTION = ["TB-T003", "TB-T007"];
const IMAGE_MAP = {
  "TB-T003": "./assets/products/tb-t003.webp",
  "TB-T007": "./assets/products/tb-t007.webp",
  "TB-T008": "./assets/products/tb-t008.webp",
  "TB-T031": "./assets/products/tb-t031.webp",
  "DY-T05": "./assets/products/dy-t05.webp",
  "TB-T136": "./assets/products/tb-t136.webp",
  "TB-T132": "./assets/products/tb-t132.webp",
  "TB-T104": "./assets/products/tb-t104.webp",
  "TB-T021": "./assets/products/tb-t021.webp",
};
const offersById = new Map(OFFERS.map((offer) => [offer.id, offer]));

const elements = {
  grid: document.querySelector("#productGrid"),
  resultCount: document.querySelector("#resultCount"),
  search: document.querySelector("#offerSearch"),
  platform: document.querySelector("#platformFilter"),
  sort: document.querySelector("#sortFilter"),
  receiptItems: document.querySelector("#receiptItems"),
  receiptSummary: document.querySelector("#receiptSummary"),
  receiptAction: document.querySelector(".receipt-action"),
  countLabels: document.querySelectorAll("[data-compare-count]"),
  offerDialog: document.querySelector("#offerDialog"),
  offerDialogContent: document.querySelector("#offerDialogContent"),
  compareDialog: document.querySelector("#compareDialog"),
  compareDialogBody: document.querySelector("#compareDialogBody"),
  toastRegion: document.querySelector("#toastRegion"),
  cursor: document.querySelector(".cursor-follower"),
};

const state = {
  query: "",
  category: "全部",
  platform: "全部平台",
  sort: "heat",
  selectedIds: restoreSelection(),
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function restoreSelection() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (Array.isArray(saved)) {
      return [...new Set(saved.filter((id) => offersById.has(id)))].slice(0, MAX_COMPARE);
    }
  } catch {
    // Storage failures must not block the page.
  }
  return [...DEFAULT_SELECTION];
}

function persistSelection() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.selectedIds));
  } catch {
    // Keep the current in-memory state.
  }
}

function selectedOffers() {
  return state.selectedIds.map((id) => offersById.get(id)).filter(Boolean);
}

function visibleOffers() {
  return sortOffers(
    filterOffers(OFFERS, {
      query: state.query,
      category: state.category,
      platform: state.platform,
    }),
    state.sort,
  );
}

function artMarkup(offer, variant = "card") {
  const image = IMAGE_MAP[offer.id];
  return `
    <figure class="offer-media offer-media--${escapeHtml(variant)}">
      ${
        image
          ? `<img
              class="offer-photo"
              src="${image}"
              alt="${escapeHtml(offer.name)}商品图"
              loading="${variant === "detail" ? "eager" : "lazy"}"
              decoding="async"
              draggable="false"
            />`
          : ""
      }
      <svg class="offer-art offer-art--fallback" viewBox="0 0 220 280" aria-hidden="true">
        <use href="#art-${escapeHtml(offer.art)}"></use>
      </svg>
      <figcaption class="photo-credit">真实商品图</figcaption>
    </figure>
  `;
}

function renderOffers() {
  const offers = visibleOffers();
  elements.resultCount.textContent = String(offers.length);
  elements.grid.setAttribute("aria-busy", "false");

  if (!offers.length) {
    elements.grid.innerHTML = `
      <div class="empty-grid" role="status">
        <h3>这层货架暂时是空的</h3>
        <p>清空关键词或切换筛选条件后再试。</p>
      </div>
    `;
    return;
  }

  elements.grid.innerHTML = offers
    .map((offer, index) => {
      const selected = state.selectedIds.includes(offer.id);
      const discount = discountPercent(offer.officialPrice, offer.price);
      const perUnit = unitPrice(offer.price, offer.capacity);
      const info = completeness(offer);

      return `
        <article
          class="offer-card ${selected ? "is-selected" : ""}"
          style="--p-accent:${escapeHtml(offer.accent)}"
          data-offer-id="${escapeHtml(offer.id)}"
          data-testid="offer-card-${escapeHtml(offer.id)}"
        >
          <div class="offer-visual">
            <span class="offer-platform">${escapeHtml(offer.platform)} / ${offer.officialStore ? "官方店" : "直播页"}</span>
            ${
              discount
                ? `<span class="offer-saving" aria-label="比参考官方价低 ${discount}%">${discount}%<br />OFF</span>`
                : `<span class="offer-saving is-unknown" aria-label="参考官方价未核验">官方价<br />待核</span>`
            }
            ${artMarkup(offer)}
            <span class="offer-variant">${escapeHtml(offer.variant)}</span>
          </div>
          <div class="offer-body">
            <p class="offer-kicker"><span>${escapeHtml(offer.brand)}</span><span>${escapeHtml(offer.categoryLabel)}</span></p>
            <h3 class="offer-title">${escapeHtml(offer.name)}</h3>
            <p class="offer-room" title="${escapeHtml(offer.room)}">${escapeHtml(offer.room)}</p>
            <div class="offer-price-row">
              <strong class="offer-price">${formatMoney(offer.price)}</strong>
              <span class="offer-official">${
                Number.isFinite(offer.officialPrice)
                  ? `参考 ${formatMoney(offer.officialPrice)}`
                  : "官方价未核验"
              }</span>
            </div>
            <p class="offer-unit">${
              perUnit
                ? `${formatMoney(perUnit)} / ${escapeHtml(offer.unit)}`
                : "单位价：规格未标明"
            }</p>
            <div class="offer-facts">
              <span class="offer-fact">规格 ${escapeHtml(offer.spec)}</span>
              <span class="offer-fact">赠品 ${offer.giftCount} 件</span>
              <span class="offer-fact ${info.issues.length ? "offer-fact--warning" : ""}">${escapeHtml(info.label)}</span>
            </div>
            <div class="offer-actions">
              <button
                class="compare-toggle"
                type="button"
                data-toggle-compare="${escapeHtml(offer.id)}"
                aria-pressed="${selected}"
                aria-label="${selected ? "从比价清单移除" : "加入比价清单"} ${escapeHtml(offer.name)}"
              >
                ${selected ? "已放入比价清单 ✓" : "加入比价清单 +"}
              </button>
              <button
                class="details-button"
                type="button"
                data-detail="${escapeHtml(offer.id)}"
                aria-label="查看 ${escapeHtml(offer.name)} 的完整直播机制"
                title="查看完整机制"
              >${index % 2 === 0 ? "↗" : "＋"}</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
  bindImageFallbacks();
}

function bindImageFallbacks() {
  elements.grid.querySelectorAll(".offer-photo").forEach((image) => {
    const markFallback = () => image.closest(".offer-media")?.classList.add("is-fallback");
    image.addEventListener("error", markFallback, { once: true });
    if (image.complete && image.naturalWidth === 0) markFallback();
  });
}

function renderSelectionUi() {
  const selected = selectedOffers();
  const count = selected.length;

  elements.countLabels.forEach((label) => {
    label.textContent = String(count);
    label.setAttribute("aria-label", `已选择 ${count} 件`);
    label.classList.remove("is-bumping");
    requestAnimationFrame(() => label.classList.add("is-bumping"));
    window.setTimeout(() => label.classList.remove("is-bumping"), 260);
  });

  if (!count) {
    elements.receiptItems.innerHTML = `
      <div class="receipt-empty">
        <div>
          <span aria-hidden="true">＋</span>
          <p>从左侧货架选 2–3 件商品，这里会自动生成本地比价小票。</p>
        </div>
      </div>
    `;
    elements.receiptSummary.innerHTML = "";
  } else {
    elements.receiptItems.innerHTML = selected
      .map(
        (offer) => `
          <div class="receipt-item">
            <span class="receipt-item-name">${escapeHtml(offer.name)}</span>
            <strong class="receipt-item-price">${formatMoney(offer.price)}</strong>
            <span class="receipt-item-meta">${escapeHtml(offer.spec)} · ${offer.giftCount} 件赠品</span>
            <button class="receipt-remove" type="button" data-remove-compare="${escapeHtml(offer.id)}" aria-label="从比价清单移除 ${escapeHtml(offer.name)}">移除</button>
          </div>
        `,
      )
      .join("");

    const stats = compareStats(selected);
    elements.receiptSummary.innerHTML = `
      <div class="summary-row"><span>已选</span><strong>${count} / ${MAX_COMPARE} 件</strong></div>
      <div class="summary-row"><span>到手价合计</span><strong>${formatMoney(stats.total)}</strong></div>
      ${
        count >= 2
          ? `<div class="summary-row summary-row--accent"><span>最低与最高相差</span><strong>${formatMoney(stats.spread)}</strong></div>`
          : ""
      }
      <div class="summary-row summary-row--strong"><span>下一步</span><strong>${count >= 2 ? "核对规格与赠品" : "再选 1 件"}</strong></div>
    `;
  }

  elements.receiptAction.disabled = count < 2;
  updateCompareButtons();
}

function updateCompareButtons() {
  document.querySelectorAll("[data-toggle-compare]").forEach((button) => {
    const id = button.dataset.toggleCompare;
    const selected = state.selectedIds.includes(id);
    button.setAttribute("aria-pressed", String(selected));
    button.textContent = selected ? "已放入比价清单 ✓" : "加入比价清单 +";
    button.setAttribute("aria-label", `${selected ? "从比价清单移除" : "加入比价清单"} ${offersById.get(id)?.name ?? "商品"}`);
    button.closest(".offer-card")?.classList.toggle("is-selected", selected);
  });

  document.querySelectorAll("[data-dialog-toggle]").forEach((button) => {
    const selected = state.selectedIds.includes(button.dataset.dialogToggle);
    button.textContent = selected ? "从比价清单移除" : "加入比价清单";
    button.setAttribute("aria-pressed", String(selected));
  });
}

function setCompareSelection(id) {
  if (!offersById.has(id)) return false;
  const index = state.selectedIds.indexOf(id);

  if (index >= 0) {
    state.selectedIds.splice(index, 1);
    renderSelectionUi();
    persistSelection();
    announce(`${offersById.get(id).name} 已移出比价清单`);
    return true;
  }

  if (state.selectedIds.length >= MAX_COMPARE) {
    announce(`比价清单最多放 ${MAX_COMPARE} 件商品，请先移除一件。`);
    return false;
  }

  state.selectedIds.push(id);
  renderSelectionUi();
  persistSelection();
  announce(`${offersById.get(id).name} 已加入比价清单`);
  return true;
}

function openOfferDetail(id) {
  const offer = offersById.get(id);
  if (!offer) return;
  const info = completeness(offer);
  const selected = state.selectedIds.includes(offer.id);
  const discount = discountPercent(offer.officialPrice, offer.price);
  const perUnit = unitPrice(offer.price, offer.capacity);

  elements.offerDialogContent.innerHTML = `
    <div class="modal-header">
      <div>
        <p class="eyebrow">OFFER DETAIL / ${escapeHtml(offer.id)}</p>
        <h2 id="offerDialogTitle">${escapeHtml(offer.name)}</h2>
      </div>
      <button class="icon-button" type="button" data-close-dialog aria-label="关闭商品详情">×</button>
    </div>
    <div class="detail-layout" style="--p-accent:${escapeHtml(offer.accent)}">
      <div class="detail-art-panel">
        ${artMarkup(offer, "detail")}
        <span class="offer-platform">${escapeHtml(offer.platform)} / ${escapeHtml(offer.room)}</span>
      </div>
      <div class="detail-copy">
        <p class="offer-kicker"><span>${escapeHtml(offer.brand)}</span><span>${escapeHtml(offer.categoryLabel)}</span></p>
        <h2>${escapeHtml(offer.variant)}</h2>
        <p class="detail-subline">${escapeHtml(offer.id)} · ${escapeHtml(offer.room)} · 历史快照</p>
        <div class="detail-price-grid">
          <div class="detail-price-cell"><span>直播到手价</span><strong>${formatMoney(offer.price)}</strong></div>
          <div class="detail-price-cell"><span>参考官方价</span><strong>${Number.isFinite(offer.officialPrice) ? formatMoney(offer.officialPrice) : "未核验"}</strong></div>
          <div class="detail-price-cell"><span>优惠幅度</span><strong>${discount ? `${discount}%` : "待核"}</strong></div>
        </div>
        <section class="detail-section">
          <h3>直播机制原文</h3>
          <p>${escapeHtml(offer.mechanism)}</p>
        </section>
        <section class="detail-section">
          <h3>规格与单位价</h3>
          <p>${escapeHtml(offer.spec)}；${perUnit ? `约 ${formatMoney(perUnit)} / ${escapeHtml(offer.unit)}。` : "页面未标明可统一比较的容量。"}</p>
        </section>
        <section class="detail-section">
          <h3>赠品与履约</h3>
          <p>${escapeHtml(offer.giftDetails || "未记录赠品。")}；${escapeHtml(offer.shipping)}。</p>
        </section>
        <section class="detail-section">
          <h3>信息完整度 · ${escapeHtml(info.label)}</h3>
          <ul class="issue-list">
            ${
              info.issues.length
                ? info.issues.map((issue) => `<li>${escapeHtml(issue)}</li>`).join("")
                : `<li class="is-clear">当前记录的四项关键信息均已核验</li>`
            }
          </ul>
        </section>
        <div class="detail-actions">
          <button class="primary-button" type="button" data-dialog-toggle="${escapeHtml(offer.id)}" aria-pressed="${selected}">
            ${selected ? "从比价清单移除" : "加入比价清单"}
            <span aria-hidden="true">${selected ? "−" : "+"}</span>
          </button>
          <button class="secondary-button" type="button" data-close-dialog>关闭详情</button>
        </div>
      </div>
    </div>
  `;
  elements.offerDialog.showModal();
}

function openCompare() {
  const selected = selectedOffers().sort((a, b) => a.price - b.price);
  if (selected.length < 2) {
    elements.compareDialogBody.innerHTML = `
      <div class="compare-empty">
        <div>
          <h3>再选一件商品，才能并排看差异</h3>
          <p>先关闭这张清单，从货架加入至少 2 件。页面会保留你的选择。</p>
        </div>
      </div>
    `;
  } else {
    const stats = compareStats(selected);
    const gapCount = selected.reduce((count, offer) => count + completeness(offer).issues.length, 0);
    elements.compareDialogBody.innerHTML = `
      <div class="compare-insights">
        <div class="insight-box"><span>本组最低到手价</span><strong>${formatMoney(stats.min)}</strong></div>
        <div class="insight-box"><span>组内价差（最高 − 最低）</span><strong>${formatMoney(stats.spread)}</strong></div>
        <div class="insight-box"><span>仍需核验的信息点</span><strong>${gapCount}</strong></div>
      </div>
      <div class="compare-table-wrap">
        <table class="compare-table">
          <thead>
            <tr><th scope="col">商品 / 直播间</th><th scope="col">到手价</th><th scope="col">参考价与价差</th><th scope="col">规格 / 单位价</th><th scope="col">赠品 / 履约</th><th scope="col">信息完整度</th></tr>
          </thead>
          <tbody>
            ${selected
              .map((offer) => {
                const discount = discountPercent(offer.officialPrice, offer.price);
                const perUnit = unitPrice(offer.price, offer.capacity);
                const info = completeness(offer);
                return `
                  <tr>
                    <td data-label="商品 / 直播间"><div class="table-product"><strong>${escapeHtml(offer.name)}</strong><span>${escapeHtml(offer.platform)} · ${escapeHtml(offer.room)}</span></div></td>
                    <td data-label="到手价"><strong class="table-price">${formatMoney(offer.price)}</strong></td>
                    <td data-label="参考价与价差">${Number.isFinite(offer.officialPrice) ? formatMoney(offer.officialPrice) : "未核验"}${discount ? `<span class="table-note">少 ${formatMoney(offer.officialPrice - offer.price)} / ${discount}%</span>` : `<span class="table-note">无法计算可靠价差</span>`}</td>
                    <td data-label="规格 / 单位价">${escapeHtml(offer.spec)}<span class="table-note">${perUnit ? `${formatMoney(perUnit)} / ${escapeHtml(offer.unit)}` : "规格未标明，暂不可比"}</span></td>
                    <td data-label="赠品 / 履约">${offer.giftCount} 件<span class="table-note">${escapeHtml(offer.shipping)}</span></td>
                    <td data-label="信息完整度">${escapeHtml(info.label)}<span class="table-note">${escapeHtml(info.issues.join("、") || "关键字段完整")}</span></td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
      </div>
      <p class="receipt-disclaimer">${escapeHtml(META.note)}</p>
    `;
  }
  elements.compareDialog.showModal();
}

function announce(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  elements.toastRegion.replaceChildren(toast);
  window.setTimeout(() => toast.classList.add("is-leaving"), 2300);
  window.setTimeout(() => toast.remove(), 2560);
}

function animateIntoReceipt(id) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const card = document.querySelector(`[data-offer-id="${CSS.escape(id)}"]`);
  const art = card?.querySelector(".offer-media");
  const target = document.querySelector(".receipt-paper");
  if (!art || !target || target.offsetParent === null) return;
  const sourceRect = art.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const clone = document.createElement("div");
  clone.className = "fly-clone";
  clone.style.left = "0";
  clone.style.top = "0";
  clone.style.width = `${sourceRect.width}px`;
  clone.style.height = `${sourceRect.height}px`;
  clone.style.transform = `translate(${sourceRect.left}px, ${sourceRect.top}px)`;
  clone.innerHTML = art.outerHTML;
  document.body.append(clone);
  requestAnimationFrame(() => {
    clone.style.transform = `translate(${targetRect.left + targetRect.width * 0.35}px, ${targetRect.top + 26}px) scale(.24) rotate(9deg)`;
    clone.style.opacity = "0.18";
  });
  window.setTimeout(() => clone.remove(), 760);
}

function toggleFromEvent(event) {
  const id = event.target.closest("[data-toggle-compare]")?.dataset.toggleCompare;
  if (!id) return;
  const wasSelected = state.selectedIds.includes(id);
  const updated = setCompareSelection(id);
  if (updated) {
    renderOffers();
    document.querySelector(`[data-toggle-compare="${CSS.escape(id)}"]`)?.focus({ preventScroll: true });
    if (!wasSelected) animateIntoReceipt(id);
  }
}

function bindCatalogEvents() {
  elements.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderOffers();
  });

  document.querySelector(".category-filter").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    document.querySelectorAll("[data-category]").forEach((chip) => {
      const active = chip === button;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    renderOffers();
  });

  elements.platform.addEventListener("change", (event) => {
    state.platform = event.target.value;
    renderOffers();
  });

  elements.sort.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderOffers();
  });

  elements.grid.addEventListener("click", (event) => {
    if (event.target.closest("[data-toggle-compare]")) {
      toggleFromEvent(event);
      return;
    }
    const detailButton = event.target.closest("[data-detail]");
    if (detailButton) openOfferDetail(detailButton.dataset.detail);
  });

  elements.receiptItems.addEventListener("click", (event) => {
    const id = event.target.closest("[data-remove-compare]")?.dataset.removeCompare;
    if (!id) return;
    setCompareSelection(id);
    renderOffers();
    (elements.receiptItems.querySelector("[data-remove-compare]") || elements.receiptItems).focus({
      preventScroll: true,
    });
  });
}

function bindDialogs() {
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-open-compare]")) openCompare();

    const closeButton = event.target.closest("[data-close-dialog]");
    if (closeButton) closeButton.closest("dialog")?.close();

    const detailToggle = event.target.closest("[data-dialog-toggle]");
    if (detailToggle) {
      setCompareSelection(detailToggle.dataset.dialogToggle);
      updateCompareButtons();
      renderOffers();
      detailToggle.textContent = state.selectedIds.includes(detailToggle.dataset.dialogToggle)
        ? "从比价清单移除"
        : "加入比价清单";
    }
  });

  [elements.offerDialog, elements.compareDialog].forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
}

function bindHeroDrag() {
  const stage = document.querySelector("[data-draggable-stage]");
  if (!stage) return;
  let active = null;
  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let baseTransform = "";
  const keyboardState = new WeakMap();

  stage.addEventListener("pointerdown", (event) => {
    const item = event.target.closest("[data-drag-item]");
    if (!item || event.button !== 0) return;
    event.preventDefault();
    active = item;
    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    item.style.animation = "none";
    baseTransform = getComputedStyle(item).transform;
    if (baseTransform === "none") baseTransform = "";
    item.classList.add("is-dragging");
    item.setPointerCapture?.(event.pointerId);
  });

  stage.addEventListener("pointermove", (event) => {
    if (!active) return;
    active.style.transform = `translate(${event.clientX - startX}px, ${
      event.clientY - startY
    }px) ${baseTransform}`;
  });

  const finish = () => {
    if (active && pointerId !== null) {
      try {
        active.releasePointerCapture?.(pointerId);
      } catch {
        // The browser may have released the pointer already.
      }
    }
    active?.classList.remove("is-dragging");
    active = null;
    pointerId = null;
  };
  stage.addEventListener("pointerup", finish);
  stage.addEventListener("pointercancel", finish);

  stage.addEventListener("keydown", (event) => {
    const item = event.target.closest("[data-drag-item]");
    if (!item || !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
      return;
    }
    event.preventDefault();
    const current = keyboardState.get(item) || {
      x: 0,
      y: 0,
      base: getComputedStyle(item).transform === "none" ? "" : getComputedStyle(item).transform,
    };
    if (event.key === "ArrowLeft") current.x -= 10;
    if (event.key === "ArrowRight") current.x += 10;
    if (event.key === "ArrowUp") current.y -= 10;
    if (event.key === "ArrowDown") current.y += 10;
    keyboardState.set(item, current);
    item.style.animation = "none";
    item.style.transform = `translate(${current.x}px, ${current.y}px) ${current.base}`;
  });
}

function bindReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  revealItems.forEach((item) => observer.observe(item));
}

function bindCursor() {
  if (!elements.cursor || window.matchMedia("(pointer: coarse)").matches) return;
  let visible = false;
  document.addEventListener("pointermove", (event) => {
    if (!visible) {
      visible = true;
      elements.cursor.classList.add("is-visible");
    }
    elements.cursor.style.left = `${event.clientX}px`;
    elements.cursor.style.top = `${event.clientY}px`;
    elements.cursor.classList.toggle(
      "is-large",
      Boolean(event.target.closest("a,button,[data-drag-item]")),
    );
  });
  document.documentElement.addEventListener("mouseleave", () => {
    visible = false;
    elements.cursor.classList.remove("is-visible");
  });
}

function initialize() {
  renderOffers();
  renderSelectionUi();
  bindCatalogEvents();
  bindDialogs();
  bindHeroDrag();
  bindReveal();
  bindCursor();
  document.title = `LIVE OFFSET｜${OFFERS.length} 件直播美妆比价`;
}

initialize();
