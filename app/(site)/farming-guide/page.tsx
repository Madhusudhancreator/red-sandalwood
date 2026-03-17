import { getFarmingGuidePageData } from "@/lib/sanity/queries/farmingGuide";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import { SectionIndexGrid } from "@/components/ui/SectionIndexGrid";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getFarmingGuidePageData();
  return { title: data?.seo?.metaTitle ?? "Farming Guide", description: data?.seo?.metaDescription ?? "" };
}

const subpages = [
  { label: "Nursery", href: "/farming-guide/nursery", description: "Seed germination and nursery setup for red sandalwood" },
  { label: "Plantation", href: "/farming-guide/plantation", description: "Field preparation and planting best practices" },
  { label: "Maintenance", href: "/farming-guide/maintenance", description: "Care and upkeep of growing trees" },
  { label: "Harvesting", href: "/farming-guide/harvesting", description: "Timing and methods for a successful harvest" },
];

export default async function FarmingGuidePage() {
  const data = await getFarmingGuidePageData();
  return (
    <>
      <PageHero title={data?.title ?? "Farming Guide"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Farming Guide" }]} />
      {data?.intro && <section className="max-w-7xl mx-auto px-4 py-10"><PortableTextRenderer body={data.intro} /></section>}
      <SectionIndexGrid links={subpages} />
    </>
  );
}
