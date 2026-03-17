import { getAboutPageData } from "@/lib/sanity/queries/about";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import { SectionIndexGrid } from "@/components/ui/SectionIndexGrid";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutPageData();
  return {
    title: data?.seo?.metaTitle ?? "About Association",
    description: data?.seo?.metaDescription ?? "",
  };
}

const subpages = [
  { label: "Vision", href: "/about/vision", description: "Our goals and long-term vision for red sandalwood farming" },
  { label: "Members", href: "/about/members", description: "Meet the dedicated members of our association" },
  { label: "Partners", href: "/about/partners", description: "Organizations and institutions we work with" },
];

export default async function AboutPage() {
  const data = await getAboutPageData();
  return (
    <>
      <PageHero
        title={data?.title ?? "About the Association"}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      {data?.intro && (
        <section className="max-w-7xl mx-auto px-4 py-10">
          <PortableTextRenderer body={data.intro} />
        </section>
      )}
      <SectionIndexGrid links={subpages} />
    </>
  );
}
