import { PropertyCardSkeleton } from "@/components/PropertyCardSkeleton";

export default function Loading() {
  return (
    <div className="bg-gradient-to-br from-navy to-navy-dark px-6 pt-[170px] pb-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <PropertyCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
