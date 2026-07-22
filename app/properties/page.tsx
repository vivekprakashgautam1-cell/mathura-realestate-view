import type { Metadata } from "next";

import { getProperties, getPropertyFilters } from "@/lib/api";
import type { PropertySearchParams } from "@/types/property";
import { PropertiesFilterForm } from "@/components/PropertiesFilterForm";
import { PropertyCard } from "@/components/PropertyCard";
import { Pagination } from "@/components/Pagination";

export const metadata: Metadata = {
  title: "All Properties | Mathura RealEstate View",
  description: "Browse verified property listings in and around Mathura — plots, apartments, and villas.",
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<PropertySearchParams>;
}) {
  const params = await searchParams;

  let listFailed = false;
  let items: Awaited<ReturnType<typeof getProperties>>["items"] = [];
  let total = 0;
  let page = 1;
  let pages = 1;
  let cities: string[] = [];
  let areas: string[] = [];

  try {
    const [list, filters] = await Promise.all([getProperties(params), getPropertyFilters()]);
    items = list.items;
    total = list.total;
    page = list.page;
    pages = list.pages;
    cities = filters.cities;
    areas = filters.areas;
  } catch {
    listFailed = true;
  }

  return (
    <div className="bg-light px-6 pt-[130px] pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-navy">All Properties</h1>
          <p className="text-gray">{listFailed ? "Listings are temporarily unavailable." : `${total} propert${total === 1 ? "y" : "ies"} found`}</p>
        </div>

        <div className="mb-8">
          <PropertiesFilterForm filters={{ cities, areas }} current={params} />
        </div>

        {listFailed ? (
          <p className="mx-auto max-w-md text-center text-gray">
            We couldn&apos;t load listings right now — please refresh, or contact us directly for current availability.
          </p>
        ) : items.length === 0 ? (
          <p className="mx-auto max-w-md text-center text-gray">
            No properties match these filters — try widening your search.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            <Pagination page={page} pages={pages} params={params} />
          </>
        )}
      </div>
    </div>
  );
}
