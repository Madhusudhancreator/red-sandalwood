import { safeFetch } from "../client";
import { urlFor } from "../image";

export interface NewsArticle {
  _id: string;
  title: string;
  tag: string;
  publishedDate: string;
  excerpt: string;
  image: unknown;
  url: string | null;
  order: number;
}

const FALLBACK_ARTICLES = [
  {
    _id: "fallback-1",
    title: "Red Sandalwood Listed Among India's Most Valuable Timber Species",
    tag: "Conservation",
    publishedDate: "March 2025",
    excerpt: "Experts highlight the rising global demand for Pterocarpus santalinus, with Andhra Pradesh remaining the world's sole natural habitat for the species.",
    image: null,
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&fit=crop&q=80",
    url: null,
    order: 1,
  },
  {
    _id: "fallback-2",
    title: "AP Government Encourages Private Farmers to Take Up Red Sandalwood Cultivation",
    tag: "Farming",
    publishedDate: "February 2025",
    excerpt: "New state-level guidelines make it easier than ever for farmers in Andhra Pradesh to register plantations and access legal cultivation support.",
    image: null,
    imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&fit=crop&q=80",
    url: null,
    order: 2,
  },
  {
    _id: "fallback-3",
    title: "Global Export Prices for Red Sandalwood Timber Reach Record High",
    tag: "Market",
    publishedDate: "January 2025",
    excerpt: "International buyers from Japan, China, and Europe are driving unprecedented demand for red sandalwood logs, pushing timber values to record levels.",
    image: null,
    imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&fit=crop&q=80",
    url: null,
    order: 3,
  },
];

export async function getNewsArticles() {
  const raw = await safeFetch(
    `*[_type == "newsArticle"] | order(order asc)[0...3] {
      _id, title, tag, publishedDate, excerpt, image, url, order
    }`,
    {},
    { next: { revalidate: 3600, tags: ["newsArticle"] } }
  );

  if (!raw || raw.length === 0) return FALLBACK_ARTICLES;

  return raw.map((a: NewsArticle) => ({
    ...a,
    publishedDate: a.publishedDate
      ? new Date(a.publishedDate).toLocaleDateString("en-IN", { month: "long", year: "numeric" })
      : "",
    imageUrl: a.image ? urlFor(a.image).width(600).height(400).fit("crop").url() : null,
  }));
}
