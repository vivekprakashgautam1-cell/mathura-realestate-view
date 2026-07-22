import type {
  PropertyFilterOptions,
  PropertyListResponse,
  PropertySearchParams,
  PublicProperty,
} from "@/types/property";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://mathura-crm-api.onrender.com";

async function apiFetch<T>(path: string, revalidateSeconds: number): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, { next: { revalidate: revalidateSeconds } });
  if (!res.ok) {
    throw new Error(`Request to ${path} failed with ${res.status}`);
  }
  return res.json() as Promise<T>;
}

// ISR: pages pick up CRM changes (add/edit/feature/price/status) within
// this window, with no redeploy needed.
const REVALIDATE_SECONDS = 60;

export async function getFeaturedProperties(limit = 12): Promise<PublicProperty[]> {
  const data = await apiFetch<{ items: PublicProperty[] }>(
    `/api/public/properties/featured?limit=${limit}`,
    REVALIDATE_SECONDS
  );
  return data.items;
}

export async function getProperties(params: PropertySearchParams): Promise<PropertyListResponse> {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value) query.set(key, value);
  }
  return apiFetch<PropertyListResponse>(`/api/public/properties?${query.toString()}`, REVALIDATE_SECONDS);
}

export async function getPropertyFilters(): Promise<PropertyFilterOptions> {
  return apiFetch<PropertyFilterOptions>("/api/public/properties/filters", REVALIDATE_SECONDS);
}

export async function getPropertyById(id: string): Promise<PublicProperty | null> {
  const res = await fetch(`${API_BASE}/api/public/properties/${id}`, { next: { revalidate: REVALIDATE_SECONDS } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Request for property ${id} failed with ${res.status}`);
  return res.json() as Promise<PublicProperty>;
}

export interface EnquiryInput {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  propertyId?: string;
  propertyName?: string;
  intent: "Enquiry" | "Schedule Visit";
}

export async function submitEnquiry(input: EnquiryInput): Promise<{ ok: boolean }> {
  const res = await fetch(`${API_BASE}/api/public/enquiry`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Enquiry submission failed");
  }
  return res.json() as Promise<{ ok: boolean }>;
}
