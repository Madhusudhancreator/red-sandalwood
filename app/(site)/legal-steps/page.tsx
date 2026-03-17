import { getLegalStepsPageData } from "@/lib/sanity/queries/newPages";
import { LocaleString } from "@/components/i18n/LocaleString";
import { LocaleBlock } from "@/components/i18n/LocaleBlock";
import { PageHero } from "@/components/ui/PageHero";

export default async function LegalStepsPage() {
  const page = await getLegalStepsPageData();
  return (
    <>
      <PageHero title="Legal Steps" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {page ? (
          <>
            <LocaleString value={page.title} tag="h1" className="text-3xl font-bold text-forest-800 mb-4" />
            {page.intro && (
              <LocaleString value={page.intro} tag="p" className="text-lg text-gray-600 mb-6" />
            )}
            {page.steps?.length > 0 && (
              <ol className="space-y-6 mb-8">
                {page.steps.map(
                  (
                    step: { title?: { en?: string; te?: string }; description?: { en?: string; te?: string } },
                    i: number
                  ) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sandalwood-500 text-white flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <LocaleString value={step.title} tag="h3" className="font-semibold text-forest-800 mb-1" />
                        <LocaleString value={step.description} tag="p" className="text-gray-600" />
                      </div>
                    </li>
                  )
                )}
              </ol>
            )}
            <LocaleBlock value={page.body} />
          </>
        ) : (
          <p className="text-gray-600">
            Step-by-step legal guidance for red sandalwood farmers — coming soon.
          </p>
        )}
      </div>
    </>
  );
}
