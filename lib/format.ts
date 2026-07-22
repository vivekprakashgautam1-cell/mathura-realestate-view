// Same formatting rules as the CRM admin app (src/lib/utils.ts) so prices
// read identically across both the internal CRM and this public site.
export function formatCurrencyINR(n?: number): string {
  if (!n) return "₹0";
  if (n >= 10000000) return "₹" + (n / 10000000).toFixed(1) + "Cr";
  if (n >= 100000) return "₹" + (n / 100000).toFixed(0) + "L";
  return "₹" + (n / 1000).toFixed(0) + "K";
}

export function formatPricePerSqft(price?: number, sqft?: number): string {
  if (!price || !sqft) return "—";
  return "₹" + Math.round(price / sqft).toLocaleString("en-IN") + "/sqft";
}

export function stripHtml(html?: string): string {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

const STATUS_LABEL: Record<string, string> = {
  Available: "For Sale",
  "Under Construction": "Under Construction",
  Reserved: "Reserved",
  Sold: "Sold",
};

export function statusLabel(status: string): string {
  return STATUS_LABEL[status] ?? status;
}
