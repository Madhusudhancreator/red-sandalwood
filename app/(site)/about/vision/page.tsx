import { getAboutVisionData } from "@/lib/sanity/queries/about";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutVisionData();
  return {
    title: data?.seo?.metaTitle ?? "Vision",
    description: data?.seo?.metaDescription ?? "",
  };
}

export default async function VisionPage() {
  const data = await getAboutVisionData();
  return (
    <>
      <PageHero
        title={data?.title ?? "Our Vision"}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Vision" }]}
      />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {data?.body ? <PortableTextRenderer body={data.body} /> : (
          <p className="text-gray-500">Content coming soon.</p>
        )}
      </section>
    </>
  );
}
