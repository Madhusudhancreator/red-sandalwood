import { safeFetch } from "../client";

const TAG = { next: { revalidate: 3600, tags: ["researchInnovationPage"] } };

export async function getResearchInnovationPageData() {
  return safeFetch(`*[_type == "researchInnovationPage"][0]{ title, intro, seo }`, {}, TAG);
}

export async function getAgroforestryData() {
  return safeFetch(`*[_type == "agroforestryPage"][0]{ title, body, researchProjects, seo }`, {}, TAG);
}

export async function getSeedVarietiesData() {
  return safeFetch(`*[_type == "seedVarietiesPage"][0]{ title, body, varieties, seo }`, {}, TAG);
}
