import { getKnowledgeCenterPageData } from "@/lib/sanity/queries/knowledgeCenter";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import { SectionIndexGrid } from "@/components/ui/SectionIndexGrid";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getKnowledgeCenterPageData();
  return { title: data?.seo?.metaTitle ?? "Knowledge Center", description: data?.seo?.metaDescription ?? "" };
}

const subpages = [
  { label: "Tree Information", href: "/knowledge-center/tree-information", description: "Biology, characteristics and uses of red sandalwood" },
  { label: "Farming Techniques", href: "/knowledge-center/farming-techniques", description: "Best practices for cultivating red sandalwood" },
  { label: "Climate & Soil", href: "/knowledge-center/climate-soil", description: "Ideal climate conditions and soil requirements" },
];

export default async function KnowledgeCenterPage() {
  const data = await getKnowledgeCenterPageData();
  return (
    <>
      <PageHero title={data?.title ?? "Red Sandalwood Knowledge Center"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Knowledge Center" }]} />
      {data?.intro && <section className="max-w-7xl mx-auto px-4 py-10"><PortableTextRenderer body={data.intro} /></section>}
      <SectionIndexGrid links={subpages} />
    </>
  );
}
