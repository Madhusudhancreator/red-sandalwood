import { safeFetch } from "../client";

const REVALIDATE = { next: { revalidate: 3600 } };

export async function getResearchInnovationPageData() {
  return safeFetch(`*[_type == "researchInnovationPage"][0]{ title, intro, seo }`, {}, REVALIDATE);
}

export async function getAgroforestryData() {
  return safeFetch(`*[_type == "agroforestryPage"][0]{ title, body, researchProjects, seo }`, {}, REVALIDATE);
}

export async function getSeedVarietiesData() {
  return safeFetch(`*[_type == "seedVarietiesPage"][0]{ title, body, varieties, seo }`, {}, REVALIDATE);
}
