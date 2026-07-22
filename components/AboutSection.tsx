import Image from "next/image";

const TRUST_POINTS = ["Reliable Service", "Trustworthy Dealings", "Local Market Expertise", "Personalised Support"];

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <div>
          <span className="mb-2.5 block text-sm font-bold tracking-wide text-gold uppercase">Who We Are</span>
          <h3 className="mb-4 text-2xl font-bold">A Real Estate Agency Built On Trust</h3>
          <p className="mb-4 text-gray">
            We work as an agency for real estate property, connecting buyers, sellers and tenants with genuine
            opportunities across Mathura and beyond. Every deal we handle is guided by honesty, transparency and a
            commitment to our clients&apos; best interests.
          </p>
          <p className="mb-4 text-gray">
            Whether you are looking for your first home, an investment property, or a reliable tenant, our team is
            here to make the process simple and stress-free.
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-3.5">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="relative pl-6 font-semibold text-navy before:absolute before:left-0 before:font-black before:text-gold before:content-['✓']">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80"
          alt="Real estate property in Mathura"
          width={900}
          height={600}
          className="w-full rounded-xl shadow-2xl shadow-black/15"
        />
      </div>
    </section>
  );
}
