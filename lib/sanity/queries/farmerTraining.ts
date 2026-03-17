import { safeFetch } from "../client";

const REVALIDATE = { next: { revalidate: 3600 } };

export async function getFarmerTrainingPageData() {
  return safeFetch(`*[_type == "farmerTrainingPage"][0]{ title, intro, seo }`, {}, REVALIDATE);
}

export async function getWorkshopsData() {
  return safeFetch(`*[_type == "workshop"] | order(date desc){ _id, title, date, location, description, registrationLink, image }`, {}, REVALIDATE);
}

export async function getTrainingVideosData() {
  return safeFetch(`*[_type == "trainingVideo"] | order(publishedAt desc){ _id, title, description, videoUrl, thumbnail, category, publishedAt }`, {}, REVALIDATE);
}

export async function getPdfGuidesData() {
  return safeFetch(`*[_type == "pdfGuide"] | order(publishedAt desc){ _id, title, description, file, fileSize, category, publishedAt }`, {}, REVALIDATE);
}
