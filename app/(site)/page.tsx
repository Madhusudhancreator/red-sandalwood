import { HomePageContent } from "@/components/home/HomePageContent";
import { getHomePageData } from "@/lib/sanity/queries/home";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePageData();
  return {
    title: data.seo?.metaTitle ?? "Sandalwood & Red Sanders Growers Association – AP",
    description: data.seo?.metaDescription ?? "",
  };
}

/**
 * Render the SRSGA home page populated with fetched content and static marketing sections.
 *
 * The component fetches home page data and uses it to populate the hero headline while rendering
 * the full page layout: hero, mission/benefits grid, a vertical "How to Grow" timeline, FAQ accordion,
 * and a contact form with contact information.
 *
 * @returns A JSX element representing the complete home page layout (hero, mission grid, timeline, FAQ, and contact sections).
 */
export default async function HomePage() {
  const data = await getHomePageData();

  return <HomePageContent data={data} />;
}
