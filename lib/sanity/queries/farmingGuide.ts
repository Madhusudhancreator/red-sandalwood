import { safeFetch } from "../client";

const REVALIDATE = { next: { revalidate: 3600 } };

export async function getFarmingGuidePageData() {
  return safeFetch(`*[_type == "farmingGuidePage"][0]{ title, intro, seo }`, {}, REVALIDATE);
}

export async function getNurseryPageData() {
  return safeFetch(`*[_type == "nurseryPage"][0]{ title, body, steps, seo }`, {}, REVALIDATE);
}

export async function getPlantationPageData() {
  return safeFetch(`*[_type == "plantationPage"][0]{ title, body, steps, seo }`, {}, REVALIDATE);
}

export async function getMaintenancePageData() {
  return safeFetch(`*[_type == "maintenancePage"][0]{ title, body, steps, seo }`, {}, REVALIDATE);
}

export async function getHarvestingPageData() {
  return safeFetch(`*[_type == "harvestingPage"][0]{ title, body, steps, seo }`, {}, REVALIDATE);
}
