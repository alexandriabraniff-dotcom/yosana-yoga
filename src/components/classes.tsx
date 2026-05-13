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

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 pt-24 pb-16">
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#1B5C6E]" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#1B5C6E]">The Practice</p>
            </div>
            <h2 className="font-display font-light text-4xl md:text-5xl text-[#1A2B2B] leading-[1.1]">
              Ashtanga Vinyasa,{" "}
              <em className="italic text-[#1B5C6E]">your way.</em>
            </h2>
          </div>
          <p className="hidden md:block text-sm text-[#6B7A7A] font-light max-w-xs text-right leading-relaxed">
            Held in a home studio in Parkside. Exact address shared on booking.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        {classes.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: i * 0.12 }}
            className="group border border-[#E0DDD8] overflow-hidden hover:border-[#1B5C6E]/30 transition-colors duration-300"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Number overlay */}
              <div className="absolute top-5 left-5">
                <span className="font-display text-5xl font-light text-white/30">{c.number}</span>
              </div>
            </div>

            {/* Text */}
            <div className="p-8">
              <p className="text-[10px] uppercase tracking-widest text-[#1B5C6E] mb-2">{c.subtitle}</p>
              <h3 className="font-display font-light text-2xl text-[#1A2B2B] mb-4">{c.name}</h3>
              <p className="text-sm text-[#6B7A7A] leading-relaxed font-light">{c.description}</p>
              <p className="mt-6 text-xs text-[#C4A882] italic font-light">{c.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
