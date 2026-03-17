import { getResearchInnovationPageData } from "@/lib/sanity/queries/researchInnovation";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import { SectionIndexGrid } from "@/components/ui/SectionIndexGrid";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getResearchInnovationPageData();
  return { title: data?.seo?.metaTitle ?? "Research & Innovation", description: data?.seo?.metaDescription ?? "" };
}

const subpages = [
  { label: "Agroforestry", href: "/research-innovation/agroforestry", description: "Research on integrating red sandalwood into agroforestry systems" },
  { label: "Seed Varieties", href: "/research-innovation/seed-varieties", description: "Studies on different seed varieties and their characteristics" },
];

export default async function ResearchInnovationPage() {
  const data = await getResearchInnovationPageData();
  return (
    <>
      <PageHero title={data?.title ?? "Research & Innovation"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Research & Innovation" }]} />
      {data?.intro && <section className="max-w-7xl mx-auto px-4 py-10"><PortableTextRenderer body={data.intro} /></section>}
      <SectionIndexGrid links={subpages} />
    </>
  );
}
