export function formatMoney(value, compact = false) {
  if (!Number.isFinite(value)) return "未标价";
  const hasCents = Math.abs(value % 1) > 0.001;
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    minimumFractionDigits: compact || !hasCents ? 0 : 2,
    maximumFractionDigits: compact ? 0 : 2,
  }).format(value);
}

export function discountPercent(officialPrice, price) {
  if (
    !Number.isFinite(officialPrice) ||
    !Number.isFinite(price) ||
    officialPrice <= 0 ||
    price >= officialPrice
  ) {
    return null;
  }
  return Math.round((1 - price / officialPrice) * 100);
}

export function unitPrice(price, capacity) {
  if (!Number.isFinite(price) || !Number.isFinite(capacity) || capacity <= 0) {
    return null;
  }
  return price / capacity;
}

export function completeness(offer) {
  const issues = [];
  if (!Number.isFinite(offer.officialPrice)) issues.push("官方价缺失");
  if (!Number.isFinite(offer.capacity)) issues.push("容量未标明");
  if (offer.shipping?.includes("未核验")) issues.push("运费未核验");
  if (offer.giftDetails?.includes("未展开")) issues.push("赠品明细不完整");
  return {
    score: 4 - issues.length,
    total: 4,
    issues,
    label: issues.length ? `${4 - issues.length}/4 项已核验` : "4/4 项已核验",
  };
}

export function compareStats(offers) {
  if (!offers.length) {
    return {
      count: 0,
      total: 0,
      min: null,
      max: null,
      spread: null,
      average: null,
      lowestOffer: null,
      highestOffer: null,
    };
  }

  const sorted = [...offers].sort((a, b) => a.price - b.price);
  const total = sorted.reduce((sum, offer) => sum + offer.price, 0);
  const min = sorted[0].price;
  const max = sorted[sorted.length - 1].price;

  return {
    count: sorted.length,
    total,
    min,
    max,
    spread: max - min,
    average: total / sorted.length,
    lowestOffer: sorted[0],
    highestOffer: sorted[sorted.length - 1],
  };
}

export function filterOffers(
  offers,
  { query = "", category = "全部", platform = "全部平台", room = "全部直播间" } = {},
) {
  const needle = query.trim().toLocaleLowerCase("zh-CN");
  return offers.filter((offer) => {
    const searchable = `${offer.brand} ${offer.name} ${offer.room} ${offer.categoryLabel}`
      .toLocaleLowerCase("zh-CN");
    return (
      (!needle || searchable.includes(needle)) &&
      (category === "全部" || offer.category === category) &&
      (platform === "全部平台" || offer.platform === platform) &&
      (room === "全部直播间" || offer.room === room)
    );
  });
}

export function sortOffers(offers, sort = "heat") {
  const sorted = [...offers];
  if (sort === "featured") {
    return sorted.sort((a, b) => {
      const imageA = a.cutout || a.image ? 1 : 0;
      const imageB = b.cutout || b.image ? 1 : 0;
      return imageB - imageA || b.heat - a.heat;
    });
  }
  if (sort === "priceAsc") return sorted.sort((a, b) => a.price - b.price);
  if (sort === "savingDesc") {
    return sorted.sort((a, b) => {
      const savingA = Number.isFinite(a.officialPrice) ? a.officialPrice - a.price : -1;
      const savingB = Number.isFinite(b.officialPrice) ? b.officialPrice - b.price : -1;
      return savingB - savingA;
    });
  }
  return sorted.sort((a, b) => b.heat - a.heat);
}
