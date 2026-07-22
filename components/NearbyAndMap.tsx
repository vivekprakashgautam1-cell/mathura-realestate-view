import type { PublicProperty } from "@/types/property";

// Same convention as the CRM admin app (components/properties/NearbyPlaces.tsx):
// "nearby" tags live inside the amenities array rather than a separate field.
const NEARBY_ICONS: Record<string, string> = {
  "School Nearby": "🎓",
  "Hospital Nearby": "🏥",
  "Metro Nearby": "🚆",
  "Highway Nearby": "🛣️",
};

function buildMapsEmbedSrc(property: PublicProperty): string | null {
  if (property.latitude !== undefined && property.longitude !== undefined) {
    return `https://www.google.com/maps?q=${property.latitude},${property.longitude}&output=embed`;
  }
  const query = [property.address, property.locality, property.area, property.city, property.state]
    .filter(Boolean)
    .join(", ");
  if (!query) return null;
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

export function NearbyAndMap({ property }: { property: PublicProperty }) {
  const nearby = (property.amenities ?? []).filter((a) => a in NEARBY_ICONS);
  const mapsSrc = buildMapsEmbedSrc(property);

  if (!nearby.length && !mapsSrc) return null;

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-bold text-navy">Location &amp; Nearby</h2>
      {!!nearby.length && (
        <div className="flex flex-wrap gap-2">
          {nearby.map((place) => (
            <span key={place} className="rounded-full border border-[#e6e2d8] px-3 py-1.5 text-xs font-medium text-navy">
              {NEARBY_ICONS[place]} {place}
            </span>
          ))}
        </div>
      )}
      {mapsSrc && (
        <iframe title="Property location map" src={mapsSrc} className="h-72 w-full rounded-xl border border-[#e6e2d8]" loading="lazy" />
      )}
    </div>
  );
}
