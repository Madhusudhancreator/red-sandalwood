import Link from "next/link";
import Image from "next/image";
import { NavbarMobile } from "./NavbarMobile";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navConfig: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Vision", href: "/about/vision" },
      { label: "Members", href: "/about/members" },
      { label: "Partners", href: "/about/partners" },
    ],
  },
  {
    label: "Knowledge Center",
    href: "/knowledge-center",
    children: [
      { label: "Tree Information", href: "/knowledge-center/tree-information" },
      { label: "Farming Techniques", href: "/knowledge-center/farming-techniques" },
      { label: "Climate & Soil", href: "/knowledge-center/climate-soil" },
    ],
  },
  {
    label: "Farming Guide",
    href: "/farming-guide",
    children: [
      { label: "Nursery", href: "/farming-guide/nursery" },
      { label: "Plantation", href: "/farming-guide/plantation" },
      { label: "Maintenance", href: "/farming-guide/maintenance" },
      { label: "Harvesting", href: "/farming-guide/harvesting" },
    ],
  },
  {
    label: "Legal Guidelines",
    href: "/legal-guidelines",
    children: [
      { label: "Forest Department Rules", href: "/legal-guidelines/forest-department-rules" },
      { label: "Tree Registration", href: "/legal-guidelines/tree-registration" },
      { label: "Transport Permits", href: "/legal-guidelines/transport-permits" },
    ],
  },
  {
    label: "Farmer Training",
    href: "/farmer-training",
    children: [
      { label: "Workshops", href: "/farmer-training/workshops" },
      { label: "Videos", href: "/farmer-training/videos" },
      { label: "PDF Guides", href: "/farmer-training/pdf-guides" },
    ],
  },
  {
    label: "Research & Innovation",
    href: "/research-innovation",
    children: [
      { label: "Agroforestry", href: "/research-innovation/agroforestry" },
      { label: "Seed Varieties", href: "/research-innovation/seed-varieties" },
    ],
  },
  {
    label: "Market & Trade",
    href: "/market-trade",
    children: [
      { label: "Timber Prices", href: "/market-trade/timber-prices" },
      { label: "Export Information", href: "/market-trade/export-information" },
    ],
  },
  {
    label: "Member Portal",
    href: "/member-portal",
    children: [
      { label: "Join Association", href: "/member-portal/join-association" },
      { label: "Farmer Registration", href: "/member-portal/farmer-registration" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <header className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/assets/logo-white.jpeg"
            alt="Red Sanders Growers Association – Andhra Pradesh"
            width={50}
            height={48}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navConfig.map((item) =>
            item.children ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm rounded hover:bg-forest-700 transition-colors flex items-center gap-1"
                >
                  {item.label}
                  <svg className="w-3 h-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <div className="absolute top-full left-0 mt-1 bg-white text-gray-800 shadow-lg rounded-md min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm hover:bg-sandalwood-50 hover:text-sandalwood-700 first:rounded-t-md last:rounded-b-md transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm rounded hover:bg-forest-700 transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile nav */}
        <NavbarMobile items={navConfig} />
      </div>
    </header>
  );
}
