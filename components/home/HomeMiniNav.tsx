"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "In the News", id: "news" },
  { label: "Notice Board", id: "notice-board" },
  { label: "Members", id: "members" },
  { label: "Our Wood", id: "wood-types" },
  { label: "Guiding Farmers", id: "guiding-farmers" },
  { label: "About SRSGA", id: "about-srsga" },
  { label: "Global Reach", id: "global-reach" },
  { label: "Growing Process", id: "growing-process" },
  { label: "Contact", id: "contact" },
];

export function HomeMiniNav() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 72; // height of this mini nav
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      className="sticky top-0 z-40 w-full overflow-x-auto border-b border-white/10 shadow-md"
      style={{ backgroundColor: "var(--color-hunter-green)" }}
    >
      <ul className="flex items-center min-w-max mx-auto px-4 sm:px-8">
        {NAV_ITEMS.map(({ label, id }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className="relative px-4 py-4 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors duration-200"
                style={{
                  color: isActive ? "#FFD700" : "rgba(255,255,255,0.85)",
                }}
              >
                {label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-full"
                    style={{ backgroundColor: "#FFD700" }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
