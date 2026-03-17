import { getTimberPricesData } from "@/lib/sanity/queries/marketTrade";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getTimberPricesData();
  return { title: data?.seo?.metaTitle ?? "Timber Prices", description: data?.seo?.metaDescription ?? "" };
}

export default async function TimberPricesPage() {
  const data = await getTimberPricesData();
  return (
    <>
      <PageHero title={data?.title ?? "Timber Prices"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Market & Trade", href: "/market-trade" }, { label: "Timber Prices" }]} />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {data?.lastUpdated && (
          <p className="text-sm text-gray-500 mb-2">
            Last updated: {new Date(data.lastUpdated).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        )}
        {data?.priceDisclaimer && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6 text-sm text-amber-800">
            {data.priceDisclaimer}
          </div>
        )}
        {data?.priceTable && data.priceTable.length > 0 && (
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-forest-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Grade / Quality</th>
                  <th className="text-left px-4 py-3 font-semibold">Price per Kg (₹)</th>
                  <th className="text-left px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {data.priceTable.map((row: { grade: string; pricePerKg: string; notes?: string }, i: number) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-sandalwood-50" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-forest-800">{row.grade}</td>
                    <td className="px-4 py-3 text-sandalwood-700 font-semibold">{row.pricePerKg}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {data?.body && <PortableTextRenderer body={data.body} />}
        {!data?.priceTable && !data?.body && <p className="text-gray-500">Price information coming soon.</p>}
      </section>
    </>
  );
}
