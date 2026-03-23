import { safeFetch } from "../client";

const TAG = { next: { revalidate: 3600, tags: ["farmingGuidePage"] } };

export async function getFarmingGuidePageData() {
  return safeFetch(`*[_type == "farmingGuidePage"][0]{ title, intro, seo }`, {}, TAG);
}

export async function getNurseryPageData() {
  return safeFetch(`*[_type == "nurseryPage"][0]{ title, body, steps, seo }`, {}, TAG);
}

export async function getPlantationPageData() {
  return safeFetch(`*[_type == "plantationPage"][0]{ title, body, steps, seo }`, {}, TAG);
}

export async function getMaintenancePageData() {
  return safeFetch(`*[_type == "maintenancePage"][0]{ title, body, steps, seo }`, {}, TAG);
}

export async function getHarvestingPageData() {
  return safeFetch(`*[_type == "harvestingPage"][0]{ title, body, steps, seo }`, {}, TAG);
}
