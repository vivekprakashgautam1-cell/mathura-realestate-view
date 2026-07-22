const SERVICES = [
  { icon: "🏠", title: "Property Sales", desc: "Helping owners find genuine, serious buyers for their residential and commercial properties." },
  { icon: "💼", title: "Property Purchase", desc: "Guiding buyers to the right property with honest advice and complete transparency." },
  { icon: "🔑", title: "Rentals & Leasing", desc: "Connecting tenants and landlords for a smooth, reliable renting experience." },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="mb-2.5 block text-sm font-bold tracking-wide text-gold uppercase">What We Do</span>
          <h2 className="mb-3 text-3xl font-bold">Our Services</h2>
          <p className="text-gray">End-to-end real estate solutions handled by people you can rely on.</p>
        </div>
        <div className="grid gap-7 sm:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-[#e6e2d8] bg-light p-8 text-center transition-transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="mx-auto mb-4.5 flex size-14 items-center justify-center rounded-full bg-navy text-2xl text-gold">
                {s.icon}
              </div>
              <h3 className="mb-2.5 text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-gray">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
