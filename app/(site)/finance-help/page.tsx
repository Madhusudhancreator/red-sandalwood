import { getFinanceHelpPageData } from "@/lib/sanity/queries/newPages";
import { LocaleString } from "@/components/i18n/LocaleString";
import { LocaleBlock } from "@/components/i18n/LocaleBlock";
import { PageHero } from "@/components/ui/PageHero";

export default async function FinanceHelpPage() {
  const page = await getFinanceHelpPageData();
  return (
    <>
      <PageHero title="Finance Help" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {page ? (
          <>
            <LocaleString value={page.title} tag="h1" className="text-3xl font-bold text-forest-800 mb-4" />
            {page.intro && (
              <LocaleString value={page.intro} tag="p" className="text-lg text-gray-600 mb-6" />
            )}
            <LocaleBlock value={page.body} />
          </>
        ) : (
          <p className="text-gray-600">
            Financial assistance and guidance for red sandalwood farmers — coming soon.
          </p>
        )}
      </div>
    </>
  );
}
