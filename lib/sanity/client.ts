import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

const isConfigured = projectId && /^[a-z0-9-]+$/.test(projectId) && projectId !== "your_project_id_here";

export const client = createClient({
  projectId: isConfigured ? projectId! : "placeholder",
  dataset,
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});

// Safe fetch wrapper — returns null when Sanity isn't configured or on error
export async function safeFetch(
  query: string,
  params: Record<string, unknown> = {},
  options?: { next?: { revalidate?: number } }
): Promise<any> {
  if (!isConfigured) return null;
  try {
    return await client.fetch(query, params, options);
  } catch {
    return null;
  }
}
