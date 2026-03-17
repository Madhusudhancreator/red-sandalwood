import { getHelpSupportPageData } from "@/lib/sanity/queries/newPages";
import { LocaleString } from "@/components/i18n/LocaleString";
import { LocaleBlock } from "@/components/i18n/LocaleBlock";
import { PageHero } from "@/components/ui/PageHero";

export default async function HelpSupportPage() {
  const page = await getHelpSupportPageData();
  return (
    <>
      <PageHero title="Help & Support" />
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
            Get help and support from our association — coming soon.
          </p>
        )}
      </div>
    </>
  );
}
