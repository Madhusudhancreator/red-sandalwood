import { getExportInformationData } from "@/lib/sanity/queries/marketTrade";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getExportInformationData();
  return { title: data?.seo?.metaTitle ?? "Export Information", description: data?.seo?.metaDescription ?? "" };
}

export default async function ExportInformationPage() {
  const data = await getExportInformationData();
  return (
    <>
      <PageHero title={data?.title ?? "Export Information"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Market & Trade", href: "/market-trade" }, { label: "Export Information" }]} />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {data?.body && <PortableTextRenderer body={data.body} />}
        {data?.exportRequirements && data.exportRequirements.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-forest-800 mb-4">Export Requirements</h2>
            <div className="space-y-3">
              {data.exportRequirements.map((req: { requirement: string; details?: string }, i: number) => (
                <div key={i} className="bg-sandalwood-50 border border-sandalwood-100 rounded-lg p-4">
                  <h3 className="font-semibold text-forest-800">{req.requirement}</h3>
                  {req.details && <p className="text-sm text-gray-600 mt-1">{req.details}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
        {!data?.body && !data?.exportRequirements && <p className="text-gray-500">Content coming soon.</p>}
      </section>
    </>
  );
}
