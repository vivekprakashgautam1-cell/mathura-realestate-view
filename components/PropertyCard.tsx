import Image from "next/image";
import Link from "next/link";

import type { PublicProperty } from "@/types/property";
import { formatCurrencyINR, statusLabel, stripHtml } from "@/lib/format";

const STATUS_BADGE_CLASS: Record<string, string> = {
  Available: "bg-emerald-100 text-emerald-800",
  Sold: "bg-rose-100 text-rose-800",
  Reserved: "bg-amber-100 text-amber-800",
  "Under Construction": "bg-slate-200 text-slate-700",
};

export function PropertyCard({ property }: { property: PublicProperty }) {
  const location = [property.locality || property.area, property.city].filter(Boolean).join(", ");
  const description = stripHtml(property.description).slice(0, 110);

  return (
    <Link
      href={`/properties/${property.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-[#e6e2d8] bg-white shadow-sm transition-shadow hover:shadow-lg hover:shadow-black/10"
    >
      <div className="relative aspect-4/3 w-full bg-gradient-to-br from-navy to-navy/70">
        {property.imageUrl ? (
          <Image
            src={property.imageUrl}
            alt={property.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-4xl text-white/70">🏠</div>
        )}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
          {property.featured && (
            <span className="rounded-full bg-gold px-2.5 py-1 text-xs font-bold text-navy-dark">✨ Featured</span>
          )}
          <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${STATUS_BADGE_CLASS[property.status] ?? "bg-slate-200 text-slate-700"}`}>
            {statusLabel(property.status)}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="truncate text-base font-bold text-navy">{property.name}</p>
        {location && <p className="text-sm text-gray">{location}</p>}
        <p className="text-xl font-extrabold text-navy">{formatCurrencyINR(property.price)}</p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray">
          {property.type && <span className="rounded bg-light px-2 py-1 font-medium text-navy">{property.type}</span>}
          {!!property.bedrooms && <span>{property.bedrooms} Bed</span>}
          {!!property.bathrooms && <span>{property.bathrooms} Bath</span>}
          {!!property.sqft && <span>{property.sqft} {property.sizeUnit ?? "Sq Ft"}</span>}
        </div>

        {description && <p className="line-clamp-2 text-sm text-gray">{description}</p>}

        <span className="mt-auto inline-block pt-2 text-sm font-bold text-gold">View Details →</span>
      </div>
    </Link>
  );
}
