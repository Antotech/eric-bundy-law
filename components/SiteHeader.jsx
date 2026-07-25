"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"]
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur-xl">
      <div className="section-shell flex h-[76px] items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="Eric Bundy home">
          <span className="grid h-11 w-11 place-items-center border border-gold font-serif text-xl">
            EB
          </span>
          <span>
            <span className="block font-serif text-[17px] leading-none">Eric Bundy, Esq.</span>
            <span className="mt-1 block text-[9px] uppercase tracking-[.24em] text-goldLight">
              Attorney at Law
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-semibold text-white/80 transition hover:text-goldLight">
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="gold-gradient rounded-md px-5 py-3 text-xs font-bold uppercase tracking-wide text-navy shadow-lg"
          >
            Schedule a Consultation
          </a>
        </nav>

        <button
          className="grid h-11 w-11 place-items-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy px-4 pb-5 pt-2 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-4 text-sm font-semibold text-white/85"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="gold-gradient mt-4 block rounded-md px-5 py-3 text-center text-xs font-bold uppercase tracking-wide text-navy"
          >
            Schedule a Consultation
          </a>
        </nav>
      )}
    </header>
  );
}
