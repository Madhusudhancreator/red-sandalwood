interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-forest-800 to-forest-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="text-sm text-forest-200 mb-3 flex flex-wrap gap-1 items-center">
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <span>/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-sandalwood-500 transition-colors">
                    {crumb.label}
                  </a>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl sm:text-4xl font-bold text-sandalwood-500">{title}</h1>
        {subtitle && <p className="mt-3 text-lg text-forest-100 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
