import { safeFetch } from "../client";

const REVALIDATE = { next: { revalidate: 3600 } };

export async function getMarketTradePageData() {
  return safeFetch(`*[_type == "marketTradePage"][0]{ title, intro, seo }`, {}, REVALIDATE);
}

export async function getTimberPricesData() {
  return safeFetch(`*[_type == "timberPricesPage"][0]{ title, lastUpdated, priceDisclaimer, priceTable, body, seo }`, {}, REVALIDATE);
}

export async function getExportInformationData() {
  return safeFetch(`*[_type == "exportInformationPage"][0]{ title, body, exportRequirements, seo }`, {}, REVALIDATE);
}
