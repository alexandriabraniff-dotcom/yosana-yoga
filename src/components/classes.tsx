"use client";

import Image from "next/image";
import { motion } from "motion/react";

const classes = [
  {
    number: "01",
    name: "Private Session",
    subtitle: "One-on-one with Warunee",
    description: "Fully tailored to your body, goals, and pace. Personalised Ashtanga Vinyasa with hands-on adjustments.",
    tags: ["60 or 90 minutes", "All levels", "Mat & props provided"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&auto=format&fit=crop",
  },
  {
    number: "02",
    name: "Small Group Class",
    subtitle: "Intimate and attentive",
    description: "Kept deliberately small so every student receives real attention. Flowing sequences, breathwork, complimentary tea.",
    tags: ["All levels welcome", "Mat & props", "Complimentary tea"],
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80&auto=format&fit=crop",
  },
];

export default function Classes() {
  return (
    <section id="classes" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#2A5240]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#2A5240]">The Practice</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <h2 className="font-display font-light text-3xl sm:text-4xl text-[#1A2B2B] leading-[1.15]">
              Ashtanga Vinyasa, <em className="italic text-[#2A5240]">your way.</em>
            </h2>
            <p className="text-xs text-[#6B7A7A] font-light sm:text-right leading-relaxed shrink-0">
              Home studio in Parkside.<br className="hidden sm:block" />Address shared on booking.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {classes.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group border border-[#E8E5E0] hover:border-[#2A5240]/25 transition-colors duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-52 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#1A2B2B]/10" />
                <span className="absolute top-4 left-4 font-display text-3xl font-light text-white/30 leading-none">
                  {c.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#2A5240] mb-1.5">{c.subtitle}</p>
                <h3 className="font-display font-light text-xl text-[#1A2B2B] mb-3">{c.name}</h3>
                <p className="text-xs text-[#6B7A7A] font-light leading-[1.8] mb-5">{c.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {c.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider text-[#8A9090] border border-[#E0DDD8] px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="text-[10px] uppercase tracking-[0.2em] text-[#2A5240] hover:text-[#1E3D2F] transition-colors inline-flex items-center gap-2"
                >
                  Enquire <span className="text-[#C4C0BA]">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
