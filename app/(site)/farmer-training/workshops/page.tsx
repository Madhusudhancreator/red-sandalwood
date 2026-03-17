import { getWorkshopsData } from "@/lib/sanity/queries/farmerTraining";
import { PageHero } from "@/components/ui/PageHero";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import type { PortableTextBlock } from "@portabletext/react";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Workshops – Farmer Training",
};

export default async function WorkshopsPage() {
  const workshops = await getWorkshopsData();
  return (
    <>
      <PageHero title="Workshops" breadcrumb={[{ label: "Home", href: "/" }, { label: "Farmer Training", href: "/farmer-training" }, { label: "Workshops" }]} />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {!workshops || workshops.length === 0 ? (
          <p className="text-gray-500">No workshops scheduled yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshops.map((w: { _id: string; title: string; date?: string; location?: string; description?: PortableTextBlock[]; registrationLink?: string }) => (
              <div key={w._id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-forest-800 text-lg">{w.title}</h3>
                {w.date && (
                  <p className="text-sm text-sandalwood-600 mt-1">
                    {new Date(w.date).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                  </p>
                )}
                {w.location && <p className="text-sm text-gray-500 mt-1">📍 {w.location}</p>}
                {w.description && <div className="mt-3 text-sm"><PortableTextRenderer body={w.description} /></div>}
                {w.registrationLink && (
                  <a href={w.registrationLink} target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-block bg-sandalwood-600 text-white px-4 py-2 rounded text-sm hover:bg-sandalwood-700 transition-colors">
                    Register Now
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
