"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/#properties", label: "Properties" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#why", label: "Why Us" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-navy shadow-lg shadow-black/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image src="/logo.svg" alt="Mathura RealEstate View" width={160} height={44} className="h-11 w-auto" priority />
        </Link>

        <nav
          className={`fixed inset-x-0 top-[64px] flex-col gap-5 bg-navy px-6 py-5 sm:static sm:flex sm:flex-row sm:items-center sm:gap-7 sm:bg-transparent sm:p-0 ${
            open ? "flex" : "hidden"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-medium text-[#e8e8e8] transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-md bg-gold px-4.5 py-2.5 font-bold text-navy-dark"
          >
            Contact
          </a>
          <a
            href="https://crm.mathurarealestateview.xyz/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-md border-[1.5px] border-gold px-4 py-2 text-sm font-bold text-gold transition-colors hover:bg-gold hover:text-navy-dark"
          >
            <span aria-hidden="true">🏢</span>
            <span>Login</span>
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 sm:hidden"
        >
          <span className="h-0.5 w-6 rounded bg-white" />
          <span className="h-0.5 w-6 rounded bg-white" />
          <span className="h-0.5 w-6 rounded bg-white" />
        </button>
      </div>
    </header>
  );
}
