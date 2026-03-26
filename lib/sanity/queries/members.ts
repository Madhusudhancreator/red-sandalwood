import { safeFetch } from "../client";
import { urlFor } from "../image";

export interface AssociationMember {
  _id: string;
  name: string;
  role: string;
  photoUrl: string | null;
  order: number;
}

const FALLBACK_MEMBERS: AssociationMember[] = [
  {
    _id: "fallback-1",
    name: "Sri. Ravi Kumar Reddy",
    role: "Founder & President",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&fit=crop&q=80",
    order: 1,
  },
  {
    _id: "fallback-2",
    name: "Sri. Venkata Rao Naidu",
    role: "Vice President",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&fit=crop&q=80",
    order: 2,
  },
  {
    _id: "fallback-3",
    name: "Smt. Padmavathi Devi",
    role: "Secretary General",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&fit=crop&q=80",
    order: 3,
  },
];

export async function getMembersData(): Promise<AssociationMember[]> {
  const raw = await safeFetch(
    `*[_type == "member"] | order(order asc)[0...3]{ _id, name, role, photo, order }`,
    {},
    { next: { revalidate: 3600, tags: ["member"] } }
  ) as Array<{ _id: string; name: string; role: string; photo: unknown; order: number }> | null;

  if (!raw || raw.length === 0) return FALLBACK_MEMBERS;

  return raw.map((m) => ({
    _id: m._id,
    name: m.name,
    role: m.role,
    order: m.order,
    photoUrl: m.photo
      ? (() => { try { return urlFor(m.photo).width(400).height(400).fit("crop").url(); } catch { return null; } })()
      : null,
  }));
}
