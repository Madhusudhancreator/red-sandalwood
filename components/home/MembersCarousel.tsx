"use client";

import Image from "next/image";
import type { AssociationMember } from "@/lib/sanity/queries/members";

const accents = [
  "var(--color-hunter-green)",
  "var(--color-dark-wine)",
  "var(--color-olive-wood)",
];

function MemberCard({ member, index }: { member: AssociationMember; index: number }) {
  const accent = accents[index % accents.length];
  const photoSrc =
    member.photoUrl ??
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&fit=crop&q=80";

  return (
    <div className="flex flex-col items-center text-center flex-shrink-0 w-44 px-3">
      <div
        className="relative w-28 h-28 rounded-full overflow-hidden shadow-lg mb-3 border-4"
        style={{ borderColor: accent }}
      >
        <Image
          src={photoSrc}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="112px"
        />
      </div>
      <div className="w-6 h-1 rounded-full mb-2" style={{ backgroundColor: accent }} />
      <p className="text-sm font-extrabold leading-snug" style={{ color: "var(--color-deep-mocha)" }}>
        {member.name}
      </p>
      <p
        className="text-[11px] font-semibold uppercase tracking-widest mt-1"
        style={{ color: accent }}
      >
        {member.role}
      </p>
    </div>
  );
}

export function MembersCarousel({ members }: { members: AssociationMember[] }) {
  const doubled = [...members, ...members];
  const duration = `${members.length * 3}s`;

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--color-almond-cream-2), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--color-almond-cream-2), transparent)" }}
      />

      <div
        className="members-track flex py-4"
        style={{ "--members-duration": duration } as React.CSSProperties}
      >
        {doubled.map((member, i) => (
          <MemberCard key={`${member._id}-${i}`} member={member} index={i} />
        ))}
      </div>
    </div>
  );
}
