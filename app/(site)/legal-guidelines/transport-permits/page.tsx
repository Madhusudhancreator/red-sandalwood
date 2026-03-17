import { getTransportPermitsData } from "@/lib/sanity/queries/legalGuidelines";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getTransportPermitsData();
  return { title: data?.seo?.metaTitle ?? "Transport Permits", description: data?.seo?.metaDescription ?? "" };
}

export default async function TransportPermitsPage() {
  const data = await getTransportPermitsData();
  return (
    <>
      <PageHero title={data?.title ?? "Transport Permits"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Legal Guidelines", href: "/legal-guidelines" }, { label: "Transport Permits" }]} />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {data?.body && <PortableTextRenderer body={data.body} />}
        {data?.requiredDocuments && data.requiredDocuments.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-forest-800 mb-4">Required Documents</h2>
            <ul className="space-y-3">
              {data.requiredDocuments.map((doc: { docName: string; description: string }, i: number) => (
                <li key={i} className="flex gap-3 bg-sandalwood-50 border border-sandalwood-100 rounded-lg p-4">
                  <span className="text-sandalwood-600 font-bold mt-0.5">•</span>
                  <div>
                    <p className="font-semibold text-forest-800">{doc.docName}</p>
                    {doc.description && <p className="text-sm text-gray-600 mt-1">{doc.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {!data?.body && !data?.requiredDocuments && <p className="text-gray-500">Content coming soon.</p>}
      </section>
    </>
  );
}
