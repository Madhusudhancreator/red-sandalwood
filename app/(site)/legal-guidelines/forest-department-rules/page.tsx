import { getForestDeptRulesData } from "@/lib/sanity/queries/legalGuidelines";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getForestDeptRulesData();
  return { title: data?.seo?.metaTitle ?? "Forest Department Rules", description: data?.seo?.metaDescription ?? "" };
}

export default async function ForestDeptRulesPage() {
  const data = await getForestDeptRulesData();
  return (
    <>
      <PageHero title={data?.title ?? "Forest Department Rules"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Legal Guidelines", href: "/legal-guidelines" }, { label: "Forest Department Rules" }]} />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {data?.lastUpdated && <p className="text-sm text-gray-500 mb-6">Last updated: {new Date(data.lastUpdated).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>}
        {data?.body ? <PortableTextRenderer body={data.body} /> : <p className="text-gray-500">Content coming soon.</p>}
      </section>
    </>
  );
}
