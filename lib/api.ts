import type { PublicProperty } from "@/types/property";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://mathura-crm-api.onrender.com";

async function apiFetch<T>(path: string, revalidateSeconds: number): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, { next: { revalidate: revalidateSeconds } });
  if (!res.ok) {
    throw new Error(`Request to ${path} failed with ${res.status}`);
  }
  return res.json() as Promise<T>;
}

// ISR: the homepage picks up CRM changes (add/edit/feature/price/status)
// within this window, with no redeploy needed.
const FEATURED_REVALIDATE_SECONDS = 60;

export async function getFeaturedProperties(limit = 12): Promise<PublicProperty[]> {
  const data = await apiFetch<{ items: PublicProperty[] }>(
    `/api/public/properties/featured?limit=${limit}`,
    FEATURED_REVALIDATE_SECONDS
  );
  return data.items;
}
