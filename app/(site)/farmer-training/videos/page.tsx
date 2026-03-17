import { getTrainingVideosData } from "@/lib/sanity/queries/farmerTraining";
import { PageHero } from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Training Videos – Farmer Training",
};

export default async function VideosPage() {
  const videos = await getTrainingVideosData();
  return (
    <>
      <PageHero title="Training Videos" breadcrumb={[{ label: "Home", href: "/" }, { label: "Farmer Training", href: "/farmer-training" }, { label: "Videos" }]} />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {!videos || videos.length === 0 ? (
          <p className="text-gray-500">No videos available yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v: { _id: string; title: string; description?: string; videoUrl?: string; category?: string; publishedAt?: string }) => (
              <div key={v._id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-video bg-forest-900 flex items-center justify-center">
                  {v.videoUrl ? (
                    <a href={v.videoUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-sandalwood-500 flex flex-col items-center gap-2">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span className="text-sm">Watch Video</span>
                    </a>
                  ) : (
                    <span className="text-forest-400">No video URL</span>
                  )}
                </div>
                <div className="p-4">
                  {v.category && <span className="text-xs text-sandalwood-600 font-medium uppercase tracking-wide">{v.category}</span>}
                  <h3 className="font-semibold text-forest-800 mt-1">{v.title}</h3>
                  {v.description && <p className="text-sm text-gray-600 mt-1 line-clamp-2">{v.description}</p>}
                  {v.publishedAt && <p className="text-xs text-gray-400 mt-2">{new Date(v.publishedAt).toLocaleDateString("en-IN")}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
