import { getNurseryPageData } from "@/lib/sanity/queries/farmingGuide";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getNurseryPageData();
  return { title: data?.seo?.metaTitle ?? "Nursery Guide", description: data?.seo?.metaDescription ?? "" };
}

export default async function NurseryPage() {
  const data = await getNurseryPageData();
  return (
    <>
      <PageHero title={data?.title ?? "Nursery"} breadcrumb={[{ label: "Home", href: "/" }, { label: "Farming Guide", href: "/farming-guide" }, { label: "Nursery" }]} />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {data?.body && <PortableTextRenderer body={data.body} />}
        {data?.steps && data.steps.length > 0 && (
          <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold text-forest-800">Step-by-Step Guide</h2>
            {data.steps.map((step: { stepNumber: number; title: string; description: string }) => (
              <div key={step.stepNumber} className="flex gap-4 bg-sandalwood-50 border border-sandalwood-100 rounded-lg p-4">
                <span className="flex-shrink-0 w-8 h-8 bg-sandalwood-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{step.stepNumber}</span>
                <div>
                  <h3 className="font-semibold text-forest-800">{step.title}</h3>
                  {step.description && <p className="text-sm text-gray-600 mt-1">{step.description}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
        {!data?.body && !data?.steps && <p className="text-gray-500">Content coming soon.</p>}
      </section>
    </>
  );
}
