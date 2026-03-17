import { getAgroforestryData } from "@/lib/sanity/queries/researchInnovation";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAgroforestryData();
  return { title: data?.seo?.metaTitle ?? "Agroforestry", description: data?.seo?.metaDescription ?? "" };
}

export default async function AgroforestryPage() {
  const data = await getAgroforestryData();
  return (
    <>
      <PageHero title={data?.title ?? "Agroforestry"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Research & Innovation", href: "/research-innovation" }, { label: "Agroforestry" }]} />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {data?.body && <PortableTextRenderer body={data.body} />}
        {data?.researchProjects && data.researchProjects.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-forest-800 mb-4">Research Projects</h2>
            <div className="space-y-4">
              {data.researchProjects.map((p: { title: string; summary?: string; year?: string }, i: number) => (
                <div key={i} className="bg-sandalwood-50 border border-sandalwood-100 rounded-lg p-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-forest-800">{p.title}</h3>
                    {p.year && <span className="text-sm text-sandalwood-600 flex-shrink-0">{p.year}</span>}
                  </div>
                  {p.summary && <p className="text-sm text-gray-600 mt-2">{p.summary}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
        {!data?.body && !data?.researchProjects && <p className="text-gray-500">Content coming soon.</p>}
      </section>
    </>
  );
}
