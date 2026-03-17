import { safeFetch } from "../client";

const REVALIDATE = { next: { revalidate: 3600 } };

export async function getHomePageData() {
  return safeFetch(
    `*[_type == "homePage"][0]{ heroTitle, heroSubtitle, heroImage, missionStatement, featuredSections, seo }`,
    {},
    REVALIDATE
  );
}
