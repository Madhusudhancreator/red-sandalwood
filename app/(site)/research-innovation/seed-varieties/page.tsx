import { getSeedVarietiesData } from "@/lib/sanity/queries/researchInnovation";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSeedVarietiesData();
  return { title: data?.seo?.metaTitle ?? "Seed Varieties", description: data?.seo?.metaDescription ?? "" };
}

export default async function SeedVarietiesPage() {
  const data = await getSeedVarietiesData();
  return (
    <>
      <PageHero title={data?.title ?? "Seed Varieties"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Research & Innovation", href: "/research-innovation" }, { label: "Seed Varieties" }]} />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {data?.body && <PortableTextRenderer body={data.body} />}
        {data?.varieties && data.varieties.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-forest-800 mb-4">Known Varieties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.varieties.map((v: { name: string; characteristics?: string; yieldInfo?: string }, i: number) => (
                <div key={i} className="bg-sandalwood-50 border border-sandalwood-100 rounded-lg p-4">
                  <h3 className="font-semibold text-forest-800">{v.name}</h3>
                  {v.characteristics && <p className="text-sm text-gray-600 mt-1"><span className="font-medium">Characteristics:</span> {v.characteristics}</p>}
                  {v.yieldInfo && <p className="text-sm text-gray-600 mt-1"><span className="font-medium">Yield:</span> {v.yieldInfo}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
        {!data?.body && !data?.varieties && <p className="text-gray-500">Content coming soon.</p>}
      </section>
    </>
  );
}
