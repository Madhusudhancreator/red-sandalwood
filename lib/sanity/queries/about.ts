import { safeFetch } from "../client";

export async function getAboutPageData() {
  return safeFetch(`*[_type == "aboutPage"][0]{ title, intro, seo }`, {}, { next: { revalidate: 3600, tags: ["aboutPage"] } });
}

export async function getAboutVisionData() {
  return safeFetch(`*[_type == "aboutVision"][0]{ title, body, seo }`, {}, { next: { revalidate: 3600, tags: ["aboutPage"] } });
}

export async function getMembersData() {
  return safeFetch(`*[_type == "member"] | order(order asc){ _id, name, role, bio, photo, order }`, {}, { next: { revalidate: 3600, tags: ["aboutPage"] } });
}

export async function getPartnersData() {
  return safeFetch(`*[_type == "partner"]{ _id, name, logo, website, description }`, {}, { next: { revalidate: 3600, tags: ["aboutPage"] } });
}
