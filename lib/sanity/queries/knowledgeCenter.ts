import { safeFetch } from "../client";

const REVALIDATE = { next: { revalidate: 3600 } };

export async function getKnowledgeCenterPageData() {
  return safeFetch(`*[_type == "knowledgeCenterPage"][0]{ title, intro, seo }`, {}, REVALIDATE);
}

export async function getTreeInformationData() {
  return safeFetch(`*[_type == "treeInformationPage"][0]{ title, body, gallery, seo }`, {}, REVALIDATE);
}

export async function getFarmingTechniquesData() {
  return safeFetch(`*[_type == "farmingTechniquesPage"][0]{ title, body, seo }`, {}, REVALIDATE);
}

export async function getClimateSoilData() {
  return safeFetch(`*[_type == "climateSoilPage"][0]{ title, body, soilTypes, seo }`, {}, REVALIDATE);
}
