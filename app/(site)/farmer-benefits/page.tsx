import { getFarmerBenefitsPageData } from "@/lib/sanity/queries/newPages";
import { LocaleString } from "@/components/i18n/LocaleString";
import { LocaleBlock } from "@/components/i18n/LocaleBlock";
import { PageHero } from "@/components/ui/PageHero";

export default async function FarmerBenefitsPage() {
  const page = await getFarmerBenefitsPageData();
  return (
    <>
      <PageHero title="Farmer Benefits" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {page ? (
          <>
            <LocaleString value={page.title} tag="h1" className="text-3xl font-bold text-forest-800 mb-4" />
            {page.intro && (
              <LocaleString value={page.intro} tag="p" className="text-lg text-gray-600 mb-6" />
            )}
            {page.benefits?.length > 0 && (
              <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
                {page.benefits.map((benefit: { en?: string; te?: string }, i: number) => (
                  <li key={i}>
                    <LocaleString value={benefit} />
                  </li>
                ))}
              </ul>
            )}
            <LocaleBlock value={page.body} />
          </>
        ) : (
          <p className="text-gray-600">
            Benefits available to red sandalwood farmers through our association — coming soon.
          </p>
        )}
      </div>
    </>
  );
}
