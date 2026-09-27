"use client";

import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#hero" className="text-lg font-bold tracking-wide">
          Sakender<span className="text-accent">.</span>
        </a>

        <div className="hidden gap-7 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-border px-3 py-1.5 text-sm md:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-b border-border bg-bg2 px-6 py-5 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
