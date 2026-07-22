import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPropertyById } from "@/lib/api";
import { formatCurrencyINR, statusLabel, stripHtml } from "@/lib/format";
import { PropertyGallery } from "@/components/PropertyGallery";
import { NearbyAndMap } from "@/components/NearbyAndMap";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SimilarProperties } from "@/components/SimilarProperties";

const AGENCY_PHONE = "918679951022";

const SPEC_FIELDS: { key: "plotArea" | "builtUpArea" | "superArea" | "carpetArea"; label: string }[] = [
  { key: "plotArea", label: "Plot Area" },
  { key: "builtUpArea", label: "Built-up Area" },
  { key: "superArea", label: "Super Area" },
  { key: "carpetArea", label: "Carpet Area" },
];

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const property = await getPropertyById(id).catch(() => null);
  if (!property) {
    // notFound() returns HTTP 200 for this streamed route (documented Next.js
    // behavior), so explicitly noindex the page to keep it out of search results.
    return { title: "Property Not Found | Mathura RealEstate View", robots: { index: false, follow: false } };
  }

  const title = property.seoTitle || `${property.name} | Mathura RealEstate View`;
  const description = property.seoDescription || stripHtml(property.description).slice(0, 155) || property.name;
  return {
    title,
    description,
    openGraph: property.imageUrl ? { images: [property.imageUrl] } : undefined,
  };
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getPropertyById(id);
  if (!property) notFound();

  const location = [property.locality || property.area, property.city].filter(Boolean).join(", ");
  const waMessage = encodeURIComponent(`Hi! I'm interested in ${property.name} (${formatCurrencyINR(property.price)}). Can you share more details?`);
  const specs = SPEC_FIELDS.filter((s) => property[s.key]);

  return (
    <div className="bg-light px-6 pt-[110px] pb-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <PropertyGallery images={[property.imageUrl, ...(property.images ?? [])].filter((v): v is string => !!v)} name={property.name} />

          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              {property.featured && <span className="rounded-full bg-gold px-2.5 py-1 text-xs font-bold text-navy-dark">✨ Featured</span>}
              <span className="rounded-full bg-navy px-2.5 py-1 text-xs font-bold text-white">{statusLabel(property.status)}</span>
            </div>
            <h1 className="text-2xl font-bold text-navy sm:text-3xl">{property.name}</h1>
            {property.projectName && <p className="text-gray">{property.projectName}</p>}
            {location && <p className="mt-1 text-gray">📍 {location}</p>}
          </div>

          <div className="flex flex-wrap gap-4 rounded-xl border border-[#e6e2d8] bg-white p-5 text-sm">
            {property.type && <span><strong className="text-navy">{property.type}</strong></span>}
            {!!property.bedrooms && <span>🛏️ {property.bedrooms} Bed</span>}
            {!!property.bathrooms && <span>🛁 {property.bathrooms} Bath</span>}
            {!!property.sqft && <span>📐 {property.sqft} sqft</span>}
            {property.possession && <span>🏗️ {property.possession}</span>}
            {property.reraNumber && <span>RERA: {property.reraNumber}</span>}
          </div>

          {property.description && (
            <div className="rich-content text-sm text-navy" dangerouslySetInnerHTML={{ __html: property.description }} />
          )}

          {property.highlight && (
            <div>
              <h2 className="mb-2 text-lg font-bold text-navy">Highlights</h2>
              <div className="rich-content text-sm text-gray" dangerouslySetInnerHTML={{ __html: property.highlight }} />
            </div>
          )}

          {!!property.amenities?.length && (
            <div>
              <h2 className="mb-3 text-lg font-bold text-navy">Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {property.amenities.map((a) => (
                  <span key={a} className="rounded-full border border-[#e6e2d8] bg-white px-3 py-1.5 text-xs font-medium text-navy">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(specs.length > 0 || property.facing || property.furnishing || property.parking) && (
            <div>
              <h2 className="mb-3 text-lg font-bold text-navy">Specifications</h2>
              <div className="grid grid-cols-2 gap-3 rounded-xl border border-[#e6e2d8] bg-white p-5 text-sm sm:grid-cols-3">
                {specs.map((s) => (
                  <div key={s.key}>
                    <p className="text-gray">{s.label}</p>
                    <p className="font-semibold text-navy">{property[s.key]} sqft</p>
                  </div>
                ))}
                {property.facing && (
                  <div><p className="text-gray">Facing</p><p className="font-semibold text-navy">{property.facing}</p></div>
                )}
                {property.parking && (
                  <div><p className="text-gray">Parking</p><p className="font-semibold text-navy">{property.parking}</p></div>
                )}
                {property.furnishing && (
                  <div><p className="text-gray">Furnishing</p><p className="font-semibold text-navy">{property.furnishing}</p></div>
                )}
                {property.ageOfProperty && (
                  <div><p className="text-gray">Age</p><p className="font-semibold text-navy">{property.ageOfProperty}</p></div>
                )}
              </div>
            </div>
          )}

          {!!property.documents?.length && (
            <div>
              <h2 className="mb-3 text-lg font-bold text-navy">Documents</h2>
              <div className="flex flex-col gap-2">
                {property.documents.map((doc) => (
                  <a
                    key={doc.url}
                    href={doc.url}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center justify-between rounded-md border border-[#e6e2d8] bg-white px-4 py-3 text-sm font-medium text-navy hover:border-gold"
                  >
                    <span>📄 {doc.name || doc.category}</span>
                    <span className="text-gold">Download</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          <NearbyAndMap property={property} />
        </div>

        <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-[#e6e2d8] bg-white p-6">
            <p className="text-3xl font-extrabold text-navy">{formatCurrencyINR(property.price)}</p>
            {!!property.sqft && (
              <p className="text-sm text-gray">₹{Math.round(property.price / property.sqft).toLocaleString("en-IN")}/sqft</p>
            )}
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={`https://wa.me/${AGENCY_PHONE}?text=${waMessage}`}
                target="_blank"
                rel="noopener"
                className="rounded-md bg-emerald-600 px-4 py-2.5 text-center text-sm font-bold text-white"
              >
                💬 WhatsApp Us
              </a>
              <a
                href={`tel:+${AGENCY_PHONE}`}
                className="rounded-md bg-navy px-4 py-2.5 text-center text-sm font-bold text-white"
              >
                📞 Call Us
              </a>
            </div>
          </div>

          <EnquiryForm propertyId={property.id} propertyName={property.name} />
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl">
        <SimilarProperties property={property} />
      </div>
    </div>
  );
}
