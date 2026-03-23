import { safeFetch } from "../client";

export async function getHomePageData() {
  return safeFetch(
    `*[_type == "homePage"][0]{ heroTitle, heroSubtitle, heroImage, missionStatement, featuredSections, seo }`,
    {},
    { next: { revalidate: 3600, tags: ["homePage"] } }
  );
}
