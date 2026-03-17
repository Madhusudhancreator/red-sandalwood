import Link from "next/link";

interface SubpageLink {
  label: string;
  href: string;
  description?: string;
}

export function SectionIndexGrid({ links }: { links: SubpageLink[] }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group block p-6 rounded-xl border border-sandalwood-100 bg-sandalwood-50 hover:border-sandalwood-500 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-forest-800 group-hover:text-sandalwood-700 text-lg mb-2 transition-colors">
              {link.label}
            </h3>
            {link.description && (
              <p className="text-sm text-gray-600">{link.description}</p>
            )}
            <span className="mt-4 inline-flex items-center text-sm text-sandalwood-600 font-medium group-hover:gap-2 transition-all">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
