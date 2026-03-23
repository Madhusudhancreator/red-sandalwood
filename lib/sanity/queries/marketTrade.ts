import { safeFetch } from "../client";

const TAG = { next: { revalidate: 3600, tags: ["marketTradePage"] } };

export async function getMarketTradePageData() {
  return safeFetch(`*[_type == "marketTradePage"][0]{ title, intro, seo }`, {}, TAG);
}

export async function getTimberPricesData() {
  return safeFetch(`*[_type == "timberPricesPage"][0]{ title, lastUpdated, priceDisclaimer, priceTable, body, seo }`, {}, TAG);
}

export async function getExportInformationData() {
  return safeFetch(`*[_type == "exportInformationPage"][0]{ title, body, exportRequirements, seo }`, {}, TAG);
}
