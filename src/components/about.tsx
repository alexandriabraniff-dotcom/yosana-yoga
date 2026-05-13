"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 px-6 bg-[#FAFAF8] relative overflow-hidden">
      {/* Leaf decal top right */}
      <div className="absolute top-0 right-0 pointer-events-none">
        <svg
          className="w-96 h-96 opacity-[0.05] text-[#1B5C6E] translate-x-24 -translate-y-12"
          viewBox="0 0 300 300"
          fill="currentColor"
        >
          <path d="M150 10 Q240 60 260 180 Q190 240 100 210 Q30 150 150 10Z" />
          <path d="M150 10 L155 240" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M150 80 Q190 100 210 140" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M152 120 Q110 140 90 180" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[540px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=900&q=85&auto=format&fit=crop"
                alt="Cozy home yoga studio with natural light and plants"
                fill
                className="object-cover"
              />
              {/* Subtle teal tint overlay */}
              <div className="absolute inset-0 bg-[#1B5C6E]/5" />
            </div>

            {/* Small botanical accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 opacity-10">
              <svg viewBox="0 0 100 100" fill="#1B5C6E">
                <path d="M50 5 Q80 20 85 60 Q60 80 25 65 Q5 45 50 5Z" />
                <path d="M50 5 L52 80" stroke="#1B5C6E" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1B5C6E] mb-6">About</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-[#1A2B2B] leading-[1.15] mb-8">
              Welcome to{" "}
              <em className="italic">Yosana Yoga Home.</em>
            </h2>
            <div className="space-y-5 text-[#6B7A7A] leading-relaxed text-sm font-light">
              <p>
                Nestled in a warm and light-filled home in Parkside, Yosana is a quietly special place to slow down and return to your body. It is not a gym. It is not a studio. It is a home — and that is exactly the point.
              </p>
              <p>
                Warunee (known to her students as Pack) is an Ashtanga Vinyasa specialist who believes deeply in meeting each student where they are. She is patient, precise, and deeply attentive — watching each body with care and adjusting postures with gentleness and expertise.
              </p>
              <p>
                Whether you have never stepped on a mat or you have practised for years, you will find a calm and encouraging space here. Classes are kept small on purpose — so that no one gets lost, and everyone feels held.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-[#E0DDD8] grid grid-cols-3 gap-6">
              {[
                { label: "Style", value: "Ashtanga Vinyasa" },
                { label: "Format", value: "Private & Group" },
                { label: "Levels", value: "All Welcome" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-lg font-light text-[#1A2B2B] mb-1">{s.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#6B7A7A]">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
