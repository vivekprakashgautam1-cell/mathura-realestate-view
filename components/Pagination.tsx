import Link from "next/link";

import type { PropertySearchParams } from "@/types/property";

function pageHref(params: PropertySearchParams, page: number): string {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value) query.set(key, value);
  }
  query.set("page", String(page));
  return `/properties?${query.toString()}`;
}

export function Pagination({
  page,
  pages,
  params,
}: {
  page: number;
  pages: number;
  params: PropertySearchParams;
}) {
  if (pages <= 1) return null;

  const nearby = Array.from({ length: pages }, (_, i) => i + 1).filter(
    (p) => p === 1 || p === pages || Math.abs(p - page) <= 1
  );

  return (
    <nav className="mt-10 flex flex-wrap items-center justify-center gap-2">
      <Link
        href={pageHref(params, Math.max(1, page - 1))}
        aria-disabled={page === 1}
        className={`rounded-md border border-[#e6e2d8] px-3 py-2 text-sm font-semibold ${page === 1 ? "pointer-events-none text-gray/40" : "text-navy hover:border-gold"}`}
      >
        ← Prev
      </Link>

      {nearby.map((p, i) => (
        <span key={p} className="flex items-center gap-2">
          {i > 0 && nearby[i - 1] !== p - 1 && <span className="text-gray">…</span>}
          <Link
            href={pageHref(params, p)}
            className={`rounded-md px-3 py-2 text-sm font-semibold ${
              p === page ? "bg-navy text-white" : "border border-[#e6e2d8] text-navy hover:border-gold"
            }`}
          >
            {p}
          </Link>
        </span>
      ))}

      <Link
        href={pageHref(params, Math.min(pages, page + 1))}
        aria-disabled={page === pages}
        className={`rounded-md border border-[#e6e2d8] px-3 py-2 text-sm font-semibold ${page === pages ? "pointer-events-none text-gray/40" : "text-navy hover:border-gold"}`}
      >
        Next →
      </Link>
    </nav>
  );
}
