import { getProperties } from "@/lib/api";
import { PropertyCard } from "@/components/PropertyCard";
import type { PublicProperty } from "@/types/property";

export async function SimilarProperties({ property }: { property: PublicProperty }) {
  let similar: PublicProperty[] = [];
  try {
    const { items } = await getProperties({
      type: property.type,
      city: property.city,
      limit: "5",
      sort: "latest",
    });
    similar = items.filter((p) => p.id !== property.id).slice(0, 4);
  } catch {
    return null;
  }

  if (similar.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold text-navy">Similar Properties</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {similar.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  );
}
