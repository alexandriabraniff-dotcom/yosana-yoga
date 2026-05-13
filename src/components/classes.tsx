"use client";

import Image from "next/image";
import { motion } from "motion/react";

const classes = [
  {
    name: "Private Session",
    subtitle: "One-on-one with Warunee",
    description:
      "The deepest way to practice. A private session is tailored entirely to your body, your goals, and your current state. Warunee will guide you through Ashtanga Vinyasa sequences with hands-on adjustments, careful observation, and a pace that is entirely your own.",
    note: "Available mornings and evenings — contact to arrange",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Small Group Class",
    subtitle: "Intimate & attentive",
    description:
      "A carefully curated group experience — never more than a handful of students, so Warunee can give each person genuine attention. Expect breathwork, flowing Ashtanga sequences, and a warm, unhurried atmosphere that makes even beginners feel at ease.",
    note: "All levels welcome — beginners especially encouraged",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80&auto=format&fit=crop",
  },
];

export default function Classes() {
  return (
    <section id="classes" className="py-24 md:py-36 px-6 bg-[#F4F2EE] relative overflow-hidden">
      {/* Background mist/smoke texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1600&q=60&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover opacity-[0.04]"
        />
      </div>

      {/* Bottom-left leaf */}
      <div className="absolute bottom-0 left-0 pointer-events-none">
        <svg
          className="w-80 h-80 opacity-[0.06] text-[#1B5C6E] -translate-x-16 translate-y-16"
          viewBox="0 0 300 300"
          fill="currentColor"
        >
          <path d="M50 280 Q20 150 120 50 Q220 80 240 200 Q150 270 50 280Z" />
          <path d="M50 280 L200 80" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#1B5C6E] mb-5">The Practice</p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-[#1A2B2B] leading-[1.15]">
            Ashtanga Vinyasa,{" "}
            <em className="italic">your way.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {classes.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
              className="bg-white rounded-3xl overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-[10px] uppercase tracking-widest text-[#1B5C6E] mb-2">{c.subtitle}</p>
                <h3 className="font-display font-light text-2xl text-[#1A2B2B] mb-4">{c.name}</h3>
                <p className="text-sm text-[#6B7A7A] leading-relaxed font-light">{c.description}</p>
                <p className="mt-6 text-xs text-[#C4A882] italic">{c.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-xs text-[#6B7A7A] mt-10 tracking-wide"
        >
          All classes held at our home studio in Parkside, Adelaide. Exact address provided on booking.
        </motion.p>
      </div>
    </section>
  );
}
