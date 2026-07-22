export function ContactSection() {
  return (
    <section id="contact" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="mb-2.5 block text-sm font-bold tracking-wide text-gold uppercase">Get In Touch</span>
          <h2 className="mb-3 text-3xl font-bold">Contact Mathura RealEstate View</h2>
          <p className="text-gray">Reliable and trustable people are ready to help you find or list your next property.</p>
        </div>
        <div className="grid items-center gap-10 rounded-2xl border border-[#e6e2d8] bg-light p-8 sm:p-12 md:grid-cols-2">
          <div>
            <h3 className="mb-3.5 text-2xl font-bold">Let&apos;s Talk Property</h3>
            <p className="mb-6 text-gray">Reach out to us directly and our team will assist you with all your real estate needs.</p>

            <div className="mb-4.5 flex items-center gap-3.5">
              <div className="flex size-11.5 shrink-0 items-center justify-center rounded-full bg-navy text-lg text-gold">📞</div>
              <a href="tel:+918679951022" className="text-lg font-bold">+91 8679951022</a>
            </div>
            <div className="mb-4.5 flex items-center gap-3.5">
              <div className="flex size-11.5 shrink-0 items-center justify-center rounded-full bg-navy text-lg text-gold">💬</div>
              <a href="https://wa.me/918679951022" target="_blank" rel="noopener" className="text-lg font-bold">Chat on WhatsApp</a>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="flex size-11.5 shrink-0 items-center justify-center rounded-full bg-navy text-lg text-gold">📍</div>
              <span className="text-lg font-bold">Mathura, Uttar Pradesh, India</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-xl bg-navy px-6 py-10 text-center">
            <p className="text-[#cfd6dd]">Prefer to call directly?</p>
            <div className="text-3xl font-extrabold text-gold">+91 8679951022</div>
            <a href="tel:+918679951022" className="rounded-md bg-gold px-7 py-3.5 font-bold text-navy-dark">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
