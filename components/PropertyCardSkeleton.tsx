export function PropertyCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-[#e6e2d8] bg-white">
      <div className="aspect-4/3 w-full animate-pulse bg-light" />
      <div className="flex flex-col gap-2.5 p-4">
        <div className="h-4 w-3/4 animate-pulse rounded bg-light" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-light" />
        <div className="h-5 w-1/3 animate-pulse rounded bg-light" />
        <div className="h-3 w-full animate-pulse rounded bg-light" />
      </div>
    </div>
  );
}
