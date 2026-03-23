import { safeFetch } from "../client";

const TAG = { next: { revalidate: 3600, tags: ["knowledgeCenterPage"] } };

export async function getKnowledgeCenterPageData() {
  return safeFetch(`*[_type == "knowledgeCenterPage"][0]{ title, intro, seo }`, {}, TAG);
}

export async function getTreeInformationData() {
  return safeFetch(`*[_type == "treeInformationPage"][0]{ title, body, gallery, seo }`, {}, TAG);
}

export async function getFarmingTechniquesData() {
  return safeFetch(`*[_type == "farmingTechniquesPage"][0]{ title, body, seo }`, {}, TAG);
}

export async function getClimateSoilData() {
  return safeFetch(`*[_type == "climateSoilPage"][0]{ title, body, soilTypes, seo }`, {}, TAG);
}
