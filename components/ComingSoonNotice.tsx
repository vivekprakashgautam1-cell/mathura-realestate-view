import Link from "next/link";

export function ComingSoonNotice({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center gap-5 px-6 py-32 text-center">
      <h1 className="text-2xl font-bold text-navy">{title}</h1>
      <p className="max-w-md text-gray">
        We&apos;re building this page out. In the meantime, browse our featured listings on the homepage or reach
        out directly and we&apos;ll help you find the right property.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/#properties" className="rounded-md bg-navy px-6 py-3 font-bold text-white">
          Browse Featured Properties
        </Link>
        <a href="tel:+918679951022" className="rounded-md bg-gold px-6 py-3 font-bold text-navy-dark">
          Call +91 8679951022
        </a>
      </div>
    </div>
  );
}
