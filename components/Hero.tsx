export function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-dark px-6 pt-[170px] pb-24 text-center text-white">
      <h1 className="mx-auto mb-4 max-w-3xl text-4xl font-extrabold sm:text-[2.6rem]">
        Your Trusted Partner in <span className="text-gold">Real Estate</span>
      </h1>
      <p className="mx-auto mb-8 max-w-xl text-lg text-[#cfd6dd]">
        Mathura RealEstate View is a reliable and trustworthy property agency, helping people buy, sell and rent
        real estate with honesty and confidence.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="tel:+918679951022"
          className="rounded-md bg-gold px-7 py-3.5 font-bold text-navy-dark transition-transform hover:-translate-y-0.5"
        >
          Call +91 8679951022
        </a>
        <a
          href="#contact"
          className="rounded-md border-2 border-white px-7 py-3.5 font-bold text-white transition-transform hover:-translate-y-0.5"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
