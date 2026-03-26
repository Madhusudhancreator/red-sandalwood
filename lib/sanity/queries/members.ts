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
  {
    _id: "fallback-4",
    name: "Sri. Suresh Babu",
    role: "Joint Secretary",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80",
    order: 4,
  },
  {
    _id: "fallback-5",
    name: "Sri. Krishna Murthy",
    role: "Treasurer",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop&q=80",
    order: 5,
  },
  {
    _id: "fallback-6",
    name: "Smt. Lakshmi Prasad",
    role: "Executive Member",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&fit=crop&q=80",
    order: 6,
  },
  {
    _id: "fallback-7",
    name: "Sri. Anand Varma",
    role: "Legal Advisor",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&fit=crop&q=80",
    order: 7,
  },
  {
    _id: "fallback-8",
    name: "Sri. Narayana Reddy",
    role: "Field Coordinator",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&fit=crop&q=80",
    order: 8,
  },
  {
    _id: "fallback-9",
    name: "Smt. Vijaya Kumari",
    role: "Women's Wing Head",
    photoUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&fit=crop&q=80",
    order: 9,
  },
];

export async function getMembersData(): Promise<AssociationMember[]> {
  const raw = await safeFetch(
    `*[_type == "member"] | order(order asc){ _id, name, role, photo, order }`,
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
