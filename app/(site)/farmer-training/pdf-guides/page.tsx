import { getPdfGuidesData } from "@/lib/sanity/queries/farmerTraining";
import { PageHero } from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "PDF Guides – Farmer Training",
};

export default async function PdfGuidesPage() {
  const guides = await getPdfGuidesData();
  return (
    <>
      <PageHero title="PDF Guides" breadcrumb={[{ label: "Home", href: "/" }, { label: "Farmer Training", href: "/farmer-training" }, { label: "PDF Guides" }]} />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {!guides || guides.length === 0 ? (
          <p className="text-gray-500">No guides available yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guides.map((g: { _id: string; title: string; description?: string; file?: { asset?: { url?: string } }; fileSize?: string; category?: string; publishedAt?: string }) => (
              <div key={g._id} className="flex gap-4 bg-sandalwood-50 border border-sandalwood-100 rounded-xl p-4">
                <div className="flex-shrink-0 w-12 h-12 bg-sandalwood-600 text-white rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                    <path d="M14 2v6h6" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  {g.category && <span className="text-xs text-sandalwood-600 font-medium uppercase">{g.category}</span>}
                  <h3 className="font-semibold text-forest-800 truncate">{g.title}</h3>
                  {g.description && <p className="text-sm text-gray-600 mt-0.5 line-clamp-2">{g.description}</p>}
                  <div className="flex items-center gap-3 mt-2">
                    {g.fileSize && <span className="text-xs text-gray-400">{g.fileSize}</span>}
                    {g.file?.asset?.url && (
                      <a href={g.file.asset.url} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-sandalwood-600 font-medium hover:underline">
                        Download PDF
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
