import Link from "next/link";

import { getFeaturedProperties } from "@/lib/api";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhySection } from "@/components/WhySection";
import { ContactSection } from "@/components/ContactSection";
import { PropertyCard } from "@/components/PropertyCard";

export default async function HomePage() {
  let properties: Awaited<ReturnType<typeof getFeaturedProperties>> = [];
  let loadFailed = false;
  try {
    properties = await getFeaturedProperties(12);
  } catch {
    loadFailed = true;
  }

  return (
    <>
      <Hero />

      <section id="properties" className="bg-light px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <span className="mb-2.5 block text-sm font-bold tracking-wide text-gold uppercase">Listings</span>
            <h2 className="mb-3 text-3xl font-bold">Featured Properties</h2>
            <p className="text-gray">Genuine, up-to-date listings — pulled straight from our live inventory.</p>
          </div>

          {loadFailed || properties.length === 0 ? (
            <p className="mx-auto max-w-md text-center text-gray">
              {loadFailed
                ? "We couldn't load listings right now — please refresh, or reach out to us directly below."
                : "New listings are on the way — check back soon, or contact us for current availability."}
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/properties"
              className="inline-block rounded-md bg-navy px-7 py-3.5 font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      <AboutSection />
      <ServicesSection />
      <WhySection />
      <ContactSection />
    </>
  );
}
