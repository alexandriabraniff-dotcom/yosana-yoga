"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-8 left-0 right-0 z-40 transition-all duration-500"
      style={{ top: "2rem" }} /* offset creator banner (banner ~32px) */
    >
      <div
        className={`mx-4 md:mx-8 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-[#F4EFE6]/95 shadow-lg shadow-black/5 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl tracking-tight text-[#222] hover:text-[#7A9B76] transition-colors"
          >
            Yosana<span className="text-[#7A9B76]"> Yoga</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#444] hover:text-[#7A9B76] transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="ml-2 bg-[#B5755C] text-[#F4EFE6] text-sm px-5 py-2.5 rounded-full hover:bg-[#9E6450] transition-colors tracking-wide"
            >
              Book a Class
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#222] p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
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
            className="md:hidden mx-4 mt-2 bg-[#F4EFE6]/98 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-[#444] hover:text-[#7A9B76] transition-colors px-4 py-3 rounded-xl hover:bg-[#EDE7DC]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="mt-2 bg-[#B5755C] text-[#F4EFE6] text-sm px-5 py-3 rounded-xl text-center hover:bg-[#9E6450] transition-colors"
              >
                Book a Class
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
