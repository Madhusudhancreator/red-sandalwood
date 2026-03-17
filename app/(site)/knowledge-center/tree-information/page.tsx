import { getTreeInformationData } from "@/lib/sanity/queries/knowledgeCenter";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getTreeInformationData();
  return { title: data?.seo?.metaTitle ?? "Tree Information", description: data?.seo?.metaDescription ?? "" };
}

export default async function TreeInformationPage() {
  const data = await getTreeInformationData();
  return (
    <>
      <PageHero title={data?.title ?? "Tree Information"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Knowledge Center", href: "/knowledge-center" }, { label: "Tree Information" }]} />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {data?.body ? <PortableTextRenderer body={data.body} /> : <p className="text-gray-500">Content coming soon.</p>}
      </section>
    </>
  );
}
