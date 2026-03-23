import { safeFetch } from "../client";

export async function getContactPageData() {
  return safeFetch(
    `*[_type == "contactPage"][0]{ title, intro, address, phone, email, officeHours, mapEmbed, socialLinks, seo }`,
    {},
    { next: { revalidate: 3600, tags: ["contactPage"] } }
  );
}
