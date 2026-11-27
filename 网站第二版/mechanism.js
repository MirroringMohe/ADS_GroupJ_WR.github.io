const cases = (window.DEMO_CASES || []).filter(
  (item) => item.listings && item.listings.length > 1,
);
const select = document.querySelector("#mechanismProduct");
const receipt = document.querySelector("#mechanismReceipt");

const bottleIcon = `
  <svg viewBox="0 0 44 66" fill="none" aria-hidden="true">
    <rect x="16" y="2" width="12" height="9" rx="2.6" fill="#E2C68A"/>
    <rect x="18.4" y="10.5" width="7.2" height="5" fill="#D7BB80"/>
    <rect x="9.5" y="14.5" width="25" height="49.5" rx="6" fill="#FBF7EA"/>
    <rect x="13" y="26" width="18" height="24" rx="2" fill="#EFE6D0"/>
    <path d="M15.5 32.5h13M15.5 37.5h13M15.5 42.5h9" stroke="#BCB195" stroke-width="1.1" stroke-linecap="round"/>
    <rect x="9.5" y="14.5" width="5" height="49.5" rx="2.5" fill="rgba(255,255,255,.6)"/>
    <rect x="9.5" y="14.5" width="25" height="49.5" rx="6" stroke="rgba(90,80,60,.12)"/>
  </svg>
`;

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function money(value) {
  return Number(value).toLocaleString("zh-CN", {
    maximumFractionDigits: Number(value) % 1 ? 1 : 0,
  });
}

function unitMoney(value) {
  return value >= 1 ? value.toFixed(2) : value.toFixed(3);
}

function compute(listing, product) {
  const hasOfficial = Number.isFinite(product.official) && product.official > 0;
  const officialUnit = hasOfficial ? product.official / product.specVolume : null;
  let sameVolume = 0;
  let otherValue = 0;
  let giftValue = 0;

  listing.gifts.forEach((gift) => {
    giftValue += gift.value || 0;
    if (gift.kind === "same") sameVolume += gift.volume || 0;
    else otherValue += gift.value || 0;
  });

  const equivalentVolume =
    product.specVolume + sameVolume + (officialUnit ? otherValue / officialUnit : 0);
  const unit = listing.price / equivalentVolume;
  const ratio = hasOfficial ? listing.price / product.official : null;

  return {
    listing,
    unit,
    ratio,
    giftValue,
    giftShare: giftValue / listing.price,
    saved: hasOfficial ? product.official - listing.price : null,
  };
}

function render(value) {
  const currentCase = cases.find((item) => item.id === value);
  if (!currentCase) return;

  const product = currentCase.product;
  const topListings = [...currentCase.listings]
    .sort((a, b) => b.heat - a.heat)
    .slice(0, 3);
  const rows = topListings
    .map((listing) => compute(listing, product))
    .sort((a, b) => a.unit - b.unit);
  const best = rows[0];
  const worst = rows[rows.length - 1];
  const gap = rows.length > 1 ? Math.round((1 - best.unit / worst.unit) * 100) : 0;

  receipt.innerHTML = `
    <div class="mechanism-paper">
      <header class="mechanism-paper-head">
        <div>
          <span>OFFSET / SAME ITEM</span>
          <h3>${escapeHtml(product.brand)} ${escapeHtml(product.name)}</h3>
          <p>${escapeHtml(product.spec)} · ${escapeHtml(product.category)} · ${escapeHtml(currentCase.collected.date)}</p>
        </div>
        <span class="mechanism-stamp">已比较 ${rows.length} 个直播间</span>
      </header>

      <div class="mechanism-ticket-grid">
        ${rows
          .map(
            (row, index) => `
              <article class="mechanism-ticket ${index === 0 ? "is-best" : ""}">
                <div class="ticket-top">
                  <span class="ticket-platform">${escapeHtml(row.listing.platform)}</span>
                  <span class="ticket-rank">${index === 0 ? "机制最优" : `第 ${index + 1} 名`}</span>
                </div>
                <div class="ticket-product">
                  <span class="ticket-icon">${bottleIcon}</span>
                  <div>
                    <h4>${escapeHtml(row.listing.channel)}</h4>
                    <strong>¥${money(row.listing.price)}</strong>
                    ${
                      row.ratio == null
                        ? `<span class="ticket-discount">官方价待核</span>`
                        : `<span class="ticket-discount">${(row.ratio * 10).toFixed(1)} 折</span>`
                    }
                  </div>
                </div>
                <ul class="ticket-bundle">
                  ${row.listing.bundle.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                </ul>
                <dl class="ticket-metrics">
                  <div><dt>折算单价</dt><dd>¥${unitMoney(row.unit)}<small>/${escapeHtml(product.unit)}</small></dd></div>
                  <div><dt>赠品估值</dt><dd>¥${money(row.giftValue)}</dd></div>
                  <div><dt>赠品占实付</dt><dd>${Math.round(row.giftShare * 100)}%</dd></div>
                </dl>
                <div class="ticket-share"><i style="--share:${Math.min(100, row.giftShare * 100)}%"></i></div>
                <p class="ticket-note">${escapeHtml(row.listing.note || row.listing.crowd)}</p>
              </article>
            `,
          )
          .join("")}
      </div>

      <div class="mechanism-table-wrap">
        <table class="mechanism-table">
          <thead>
            <tr>
              <th scope="col">比较维度</th>
              ${rows
                .map(
                  (row) => `
                    <th scope="col">
                      <span>${escapeHtml(row.listing.platform)}</span>
                      <strong>${escapeHtml(row.listing.channel)}</strong>
                    </th>
                  `,
                )
                .join("")}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">折算单价<small>含赠品折算</small></th>
              ${rows
                .map(
                  (row, index) => `
                    <td class="${index === 0 ? "is-best-cell" : ""}">
                      <strong>¥${unitMoney(row.unit)}</strong><span>/${escapeHtml(product.unit)}</span>
                    </td>
                  `,
                )
                .join("")}
            </tr>
            <tr>
              <th scope="row">到手价</th>
              ${rows.map((row) => `<td class="table-value">¥${money(row.listing.price)}</td>`).join("")}
            </tr>
            <tr>
              <th scope="row">折扣力度<small>折数越低越深</small></th>
              ${rows
                .map(
                  (row) =>
                    `<td class="table-value">${
                      row.ratio == null ? "待核" : `${(row.ratio * 10).toFixed(1)} 折`
                    }</td>`,
                )
                .join("")}
            </tr>
            <tr>
              <th scope="row">正装内容</th>
              ${rows.map(() => `<td>${escapeHtml(product.spec)}</td>`).join("")}
            </tr>
            <tr>
              <th scope="row">赠品明细</th>
              ${rows
                .map(
                  (row) => `
                    <td>
                      <div class="table-gifts">
                        ${row.listing.gifts
                          .map(
                            (gift) =>
                              `<span>${escapeHtml(gift.name)}<em>¥${money(gift.value)}</em></span>`,
                          )
                          .join("")}
                      </div>
                    </td>
                  `,
                )
                .join("")}
            </tr>
            <tr>
              <th scope="row">赠品估值<small>按官方价折算</small></th>
              ${rows.map((row) => `<td class="table-value">¥${money(row.giftValue)}</td>`).join("")}
            </tr>
            <tr>
              <th scope="row">赠品价值占比<small>赠品 ÷ 实付</small></th>
              ${rows
                .map(
                  (row) => `
                    <td>
                      <span>${Math.round(row.giftShare * 100)}%</span>
                      <i class="table-share"><b style="--share:${Math.min(
                        100,
                        row.giftShare * 100,
                      )}%"></b></i>
                    </td>
                  `,
                )
                .join("")}
            </tr>
            <tr>
              <th scope="row">适合人群</th>
              ${rows.map((row) => `<td>${escapeHtml(row.listing.crowd)}</td>`).join("")}
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mechanism-summary">
        <span>综合结论</span>
        <p>
          <strong>${escapeHtml(best.listing.channel)}</strong> 的折算单价最低，为
          <strong>¥${unitMoney(best.unit)}/${escapeHtml(product.unit)}</strong>；
          比最高价低约 <strong>${gap}%</strong>。
        </p>
      </div>

      <footer class="mechanism-paper-foot">
        <span>赠品价值按官方价或同款售价折算</span>
        <span>88VIP、会员价等叠加规则未计入</span>
        <span>#${escapeHtml(currentCase.id).toUpperCase()}</span>
      </footer>
    </div>
  `;
}

if (cases.length && select && receipt) {
  select.innerHTML = cases
    .map(
      (item) =>
        `<option value="${escapeHtml(item.id)}">${escapeHtml(item.product.brand)} · ${escapeHtml(item.product.name)} · ${escapeHtml(item.product.spec)}</option>`,
    )
    .join("");
  select.addEventListener("change", () => render(select.value));
  render(select.value);
}
