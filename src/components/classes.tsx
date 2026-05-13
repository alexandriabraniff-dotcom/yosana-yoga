"use client";

import Image from "next/image";
import { motion } from "motion/react";

const classes = [
  {
    number: "01",
    name: "Private Session",
    subtitle: "One-on-one with Warunee",
    description:
      "A session built entirely around you — your body, your goals, your pace. Warunee guides you through Ashtanga Vinyasa sequences with hands-on adjustments and careful, personalised attention. Available mornings and evenings.",
    tags: ["Personalised sequencing", "Hands-on adjustments", "60 or 90 minutes", "All levels"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1000&q=85&auto=format&fit=crop",
    flip: false,
  },
  {
    number: "02",
    name: "Small Group Class",
    subtitle: "Intimate & attentive",
    description:
      "Kept deliberately small so every student still receives real attention. Flowing Ashtanga sequences, breathwork, and a warm unhurried pace in a beautiful home studio. Beginners especially welcome.",
    tags: ["Ashtanga Vinyasa flow", "Kept deliberately small", "Complimentary tea", "All levels"],
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1000&q=85&auto=format&fit=crop",
    flip: true,
  },
];

export default function Classes() {
  return (
    <section id="classes" className="bg-white">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-20 md:pt-32 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#2A5240]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#2A5240]">The Practice</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-[#1A2B2B] leading-[1.1]">
              Ashtanga Vinyasa,{" "}
              <em className="italic text-[#2A5240]">your way.</em>
            </h2>
            <p className="text-sm text-[#6B7A7A] font-light max-w-xs sm:text-right leading-relaxed shrink-0">
              Held in a home studio in Parkside.<br className="hidden sm:block" />
              Address shared on booking.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Class rows */}
      <div className="divide-y divide-[#F0EDE8]">
        {classes.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className={`grid grid-cols-1 lg:grid-cols-2 ${c.flip ? "lg:grid-flow-dense" : ""}`}
          >
            {/* Image */}
            <div className={`relative h-72 sm:h-96 lg:h-[520px] overflow-hidden ${c.flip ? "lg:col-start-2" : ""}`}>
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              {/* Number watermark */}
              <div className="absolute inset-0 flex items-end justify-start p-8">
                <span className="font-display text-[7rem] sm:text-[9rem] font-light leading-none text-white/15 select-none">
                  {c.number}
                </span>
              </div>
            </div>

            {/* Text */}
            <div className={`flex flex-col justify-center px-8 sm:px-12 md:px-16 py-14 bg-white ${c.flip ? "lg:col-start-1 lg:row-start-1" : ""}`}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#2A5240] mb-4">{c.subtitle}</p>
              <h3 className="font-display font-light text-2xl sm:text-3xl md:text-4xl text-[#1A2B2B] leading-[1.15] mb-6">
                {c.name}
              </h3>
              <p className="text-sm text-[#6B7A7A] font-light leading-[1.85] mb-8 max-w-sm">
                {c.description}
              </p>
              <ul className="space-y-2.5">
                {c.tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-3 text-xs font-light text-[#6B7A7A]">
                    <span className="w-4 h-px bg-[#2A5240] flex-shrink-0" />
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-block border border-[#2A5240] text-[#2A5240] px-7 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-[#2A5240] hover:text-white transition-all duration-300"
                >
                  Enquire
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
