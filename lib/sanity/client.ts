import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2026-03-23";

export const isConfigured =
  !!projectId &&
  /^[a-z0-9-]+$/.test(projectId) &&
  projectId !== "your_project_id_here";

export const client = createClient({
  projectId: isConfigured ? projectId! : "placeholder",
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

// Server-side write client (never exposed to the browser)
export function getWriteClient() {
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) throw new Error("SANITY_API_WRITE_TOKEN is not set");
  return client.withConfig({ token, useCdn: false });
}

// Safe fetch wrapper — returns null when Sanity isn't configured or on error
export async function safeFetch(
  query: string,
  params: Record<string, unknown> = {},
  options?: { next?: { revalidate?: number; tags?: string[] } }
): Promise<any> {
  if (!isConfigured) return null;
  try {
    return await client.fetch(query, params, options);
  } catch {
    return null;
  }
}
