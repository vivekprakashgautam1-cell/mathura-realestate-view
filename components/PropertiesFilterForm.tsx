import Link from "next/link";

import type { PropertyFilterOptions, PropertySearchParams } from "@/types/property";

const TYPES = ["Plot", "Apartment", "Villa"];
const POSSESSIONS = ["Immediate", "Within 30 Days", "Within 90 Days", "Future"];
const SORTS: { value: string; label: string }[] = [
  { value: "latest", label: "Latest" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "featured", label: "Featured First" },
];

const selectClass =
  "w-full rounded-md border border-[#e6e2d8] bg-white px-3 py-2 text-sm text-navy focus:border-gold focus:outline-none";
const inputClass = selectClass;
const labelClass = "text-xs font-semibold text-gray";

export function PropertiesFilterForm({
  filters,
  current,
}: {
  filters: PropertyFilterOptions;
  current: PropertySearchParams;
}) {
  return (
    <form method="get" action="/properties" className="grid grid-cols-2 gap-3 rounded-xl border border-[#e6e2d8] bg-white p-5 sm:grid-cols-3 lg:grid-cols-5">
      <div className="col-span-2 flex flex-col gap-1 sm:col-span-3 lg:col-span-2">
        <label htmlFor="search" className={labelClass}>Search</label>
        <input
          id="search"
          type="text"
          name="search"
          defaultValue={current.search ?? ""}
          placeholder="Name, project, builder, locality..."
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="type" className={labelClass}>Type</label>
        <select id="type" name="type" defaultValue={current.type ?? ""} className={selectClass}>
          <option value="">All Types</option>
          {TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="city" className={labelClass}>City</label>
        <select id="city" name="city" defaultValue={current.city ?? ""} className={selectClass}>
          <option value="">All Cities</option>
          {filters.cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="area" className={labelClass}>Area</label>
        <select id="area" name="area" defaultValue={current.area ?? ""} className={selectClass}>
          <option value="">All Areas</option>
          {filters.areas.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="bedrooms" className={labelClass}>Bedrooms</label>
        <select id="bedrooms" name="bedrooms" defaultValue={current.bedrooms ?? ""} className={selectClass}>
          <option value="">Any</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>{n}+ BHK</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="possession" className={labelClass}>Possession</label>
        <select id="possession" name="possession" defaultValue={current.possession ?? ""} className={selectClass}>
          <option value="">Any</option>
          {POSSESSIONS.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="budgetMin" className={labelClass}>Budget Min (₹)</label>
        <input id="budgetMin" type="number" name="budgetMin" min={0} defaultValue={current.budgetMin ?? ""} placeholder="Min" className={inputClass} />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="budgetMax" className={labelClass}>Budget Max (₹)</label>
        <input id="budgetMax" type="number" name="budgetMax" min={0} defaultValue={current.budgetMax ?? ""} placeholder="Max" className={inputClass} />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="sizeMin" className={labelClass}>Size Min (sqft)</label>
        <input id="sizeMin" type="number" name="sizeMin" min={0} defaultValue={current.sizeMin ?? ""} placeholder="Min" className={inputClass} />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="sizeMax" className={labelClass}>Size Max (sqft)</label>
        <input id="sizeMax" type="number" name="sizeMax" min={0} defaultValue={current.sizeMax ?? ""} placeholder="Max" className={inputClass} />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="sort" className={labelClass}>Sort By</label>
        <select id="sort" name="sort" defaultValue={current.sort ?? "latest"} className={selectClass}>
          {SORTS.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      <div className="col-span-2 flex items-end gap-2 sm:col-span-1">
        <button type="submit" className="w-full rounded-md bg-navy px-4 py-2 text-sm font-bold text-white">
          Apply Filters
        </button>
      </div>
      <div className="flex items-end">
        <Link href="/properties" className="w-full rounded-md border border-[#e6e2d8] px-4 py-2 text-center text-sm font-semibold text-gray">
          Clear
        </Link>
      </div>
    </form>
  );
}
