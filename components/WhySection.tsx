const REASONS = [
  { num: "100%", title: "Trustworthy", desc: "Honest dealings, every time." },
  { num: "24/7", title: "Reachable", desc: "Always available to assist you." },
  { num: "Local", title: "Expertise", desc: "Deep knowledge of Mathura's market." },
  { num: "1:1", title: "Personal Support", desc: "Dedicated attention to every client." },
];

export function WhySection() {
  return (
    <section id="why" className="bg-navy px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="mb-2.5 block text-sm font-bold tracking-wide text-gold uppercase">Why Choose Us</span>
          <h2 className="mb-3 text-3xl font-bold">People You Can Rely On</h2>
          <p className="text-[#c4ccd4]">We believe real estate should be simple, honest and stress-free.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {REASONS.map((r) => (
            <div key={r.title}>
              <div className="mb-2 text-3xl font-extrabold text-gold">{r.num}</div>
              <h4 className="mb-2 font-semibold">{r.title}</h4>
              <p className="text-sm text-[#b7c0c9]">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
