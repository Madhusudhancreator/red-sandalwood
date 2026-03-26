"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 12,   suffix: "+", label: "Years of Experience",    prefix: "" },
  { value: 500,  suffix: "+", label: "Registered Members",     prefix: "" },
  { value: 1200, suffix: "+", label: "Acres Under Plantation", prefix: "" },
];

function useCountUp(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, started, delay }: {
  value: number; suffix: string; label: string; started: boolean; delay: number;
}) {
  const count = useCountUp(value, 3500, started);

  return (
    <div
      className="flex flex-col items-center justify-center px-10 py-8 min-w-[180px] transition-all duration-700"
      style={{
        opacity: started ? 1 : 0,
        transform: started ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex items-end gap-0.5 leading-none">
        <span
          className="text-4xl sm:text-5xl font-black tabular-nums"
          style={{ color: "#FFD700" }}
        >
          {count.toLocaleString()}
        </span>
        <span
          className="text-3xl sm:text-4xl font-black pb-0.5"
          style={{ color: "var(--color-hunter-green)" }}
        >
          {suffix}
        </span>
      </div>
      <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest mt-2 text-center"
        style={{ color: "rgba(243,229,216,0.65)" }}>
        {label}
      </span>
    </div>
  );
}

export function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full border-y"
      style={{
        backgroundColor: "var(--color-deep-mocha)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex flex-wrap items-center justify-center divide-x divide-white/10">
        {STATS.map(({ value, suffix, label }, i) => (
          <StatItem
            key={label}
            value={value}
            suffix={suffix}
            label={label}
            started={started}
            delay={i * 120}
          />
        ))}
      </div>
    </div>
  );
}
