"use client";

import Image from "next/image";
import { motion } from "motion/react";

const classes = [
  {
    number: "01",
    name: "Private Session",
    subtitle: "One-on-one with Warunee",
    description:
      "A session built entirely around you — your body, your goals, your pace. Warunee guides you through Ashtanga Vinyasa sequences with hands-on adjustments and careful, personalised attention.",
    note: "Available mornings & evenings — contact to arrange",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&auto=format&fit=crop",
  },
  {
    number: "02",
    name: "Small Group Class",
    subtitle: "Intimate & attentive",
    description:
      "A carefully curated group — kept deliberately small so each student still receives real attention. Breathwork, flowing Ashtanga sequences, and a warm unhurried pace. Beginners especially welcome.",
    note: "All levels welcome",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80&auto=format&fit=crop",
  },
];

export default function Classes() {
  return (
    <section id="classes" className="bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-20 md:pt-28 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#2A5240]" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#2A5240]">The Practice</p>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-[#1A2B2B] leading-[1.1]">
              Ashtanga Vinyasa,{" "}
              <em className="italic text-[#2A5240]">your way.</em>
            </h2>
          </div>
          <p className="text-sm text-[#6B7A7A] font-light max-w-xs sm:text-right leading-relaxed shrink-0">
            Held in a home studio in Parkside.<br className="hidden sm:block" /> Address shared on booking.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pb-20 md:pb-28 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {classes.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            className="group border border-[#E0DDD8] overflow-hidden hover:border-[#2A5240]/30 transition-colors duration-300"
          >
            <div className="relative h-52 sm:h-64 overflow-hidden">
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute top-5 left-5">
                <span className="font-display text-4xl sm:text-5xl font-light text-white/30">{c.number}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-[10px] uppercase tracking-widest text-[#2A5240] mb-2">{c.subtitle}</p>
              <h3 className="font-display font-light text-xl sm:text-2xl text-[#1A2B2B] mb-3 sm:mb-4">{c.name}</h3>
              <p className="text-sm text-[#6B7A7A] leading-relaxed font-light">{c.description}</p>
              <p className="mt-5 sm:mt-6 text-xs text-[#C4A882] italic font-light">{c.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
