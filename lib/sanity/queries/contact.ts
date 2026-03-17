import { safeFetch } from "../client";

const REVALIDATE = { next: { revalidate: 3600 } };

export async function getContactPageData() {
  return safeFetch(`*[_type == "contactPage"][0]{ title, intro, address, phone, email, officeHours, mapEmbed, socialLinks, seo }`, {}, REVALIDATE);
}
