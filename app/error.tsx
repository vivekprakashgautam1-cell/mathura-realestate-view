"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-6 py-32 text-center">
      <h1 className="text-2xl font-bold text-navy">Something went wrong</h1>
      <p className="max-w-md text-gray">
        We couldn&apos;t load this page. Please try again, or call us directly at{" "}
        <a href="tel:+918679951022" className="font-semibold text-gold">
          +91 8679951022
        </a>
        .
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-md bg-navy px-6 py-3 font-bold text-white"
      >
        Try again
      </button>
    </div>
  );
}
