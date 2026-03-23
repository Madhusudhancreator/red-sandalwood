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

export default async function HomePage() {
  const data = await getHomePageData();

  return <HomePageContent data={data} />;
}
