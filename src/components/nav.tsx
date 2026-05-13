"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
  { label: "Pricing", href: "#pricing" },
  { label: "Kind Words", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-8 left-0 right-0 z-40">
      <div
        className={`mx-4 md:mx-8 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-white/95 shadow-sm shadow-black/5 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#"
            className="tracking-[0.2em] text-sm font-light text-[#1B5C6E] uppercase"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            YOSANA
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase text-[#6B7A7A] hover:text-[#1B5C6E] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 border border-[#1B5C6E] text-[#1B5C6E] text-xs px-5 py-2.5 rounded-full hover:bg-[#1B5C6E] hover:text-white transition-all duration-300 tracking-widest uppercase"
            >
              Book
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#1B5C6E] p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2 bg-white/98 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-xs uppercase tracking-widest text-[#6B7A7A] hover:text-[#1B5C6E] transition-colors px-4 py-3 rounded-xl hover:bg-[#F4F2EE]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 border border-[#1B5C6E] text-[#1B5C6E] text-xs px-5 py-3 rounded-full text-center hover:bg-[#1B5C6E] hover:text-white transition-all duration-300 uppercase tracking-widest"
              >
                Book
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
