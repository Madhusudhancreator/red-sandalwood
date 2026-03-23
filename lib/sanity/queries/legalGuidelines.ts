import { safeFetch } from "../client";

const TAG = { next: { revalidate: 3600, tags: ["legalGuidelinesPage"] } };

export async function getLegalGuidelinesPageData() {
  return safeFetch(`*[_type == "legalGuidelinesPage"][0]{ title, intro, importantNotice, seo }`, {}, TAG);
}

export async function getForestDeptRulesData() {
  return safeFetch(`*[_type == "forestDeptRulesPage"][0]{ title, body, lastUpdated, seo }`, {}, TAG);
}

export async function getTreeRegistrationData() {
  return safeFetch(`*[_type == "treeRegistrationPage"][0]{ title, body, requiredDocuments, seo }`, {}, TAG);
}

export async function getTransportPermitsData() {
  return safeFetch(`*[_type == "transportPermitsPage"][0]{ title, body, requiredDocuments, seo }`, {}, TAG);
}
