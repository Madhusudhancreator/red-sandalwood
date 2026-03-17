import { getClimateSoilData } from "@/lib/sanity/queries/knowledgeCenter";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getClimateSoilData();
  return { title: data?.seo?.metaTitle ?? "Climate & Soil", description: data?.seo?.metaDescription ?? "" };
}

export default async function ClimateSoilPage() {
  const data = await getClimateSoilData();
  return (
    <>
      <PageHero title={data?.title ?? "Climate & Soil"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Knowledge Center", href: "/knowledge-center" }, { label: "Climate & Soil" }]} />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {data?.body && <PortableTextRenderer body={data.body} />}
        {data?.soilTypes && data.soilTypes.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-forest-800 mb-4">Soil Types</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.soilTypes.map((soil: { name: string; description: string }, i: number) => (
                <div key={i} className="bg-sandalwood-50 border border-sandalwood-100 rounded-lg p-4">
                  <h3 className="font-semibold text-forest-700">{soil.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{soil.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {!data?.body && !data?.soilTypes && <p className="text-gray-500">Content coming soon.</p>}
      </section>
    </>
  );
}
