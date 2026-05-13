"use client";

import Image from "next/image";
import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Pack is so calm and patient. She carefully watches how you move and adjusts you to exactly the right position. I have never felt more seen in a class before.",
    name: "Student, Parkside",
  },
  {
    quote:
      "I was a complete beginner and was terrified to start. Pack made me feel so welcome and never rushed me. The home setting makes it feel so safe and personal.",
    name: "Student, Adelaide",
  },
  {
    quote:
      "She really knows what she is doing. Every session I leave feeling longer, lighter, and more grounded. The space itself is just beautiful — so cozy and calm.",
    name: "Student, Adelaide",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-36 px-6 relative overflow-hidden">
      {/* Botanical full-bleed background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1800&q=75&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-[#F4F2EE]/88" />
      </div>

      {/* Leaf decal */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          className="w-64 h-64 opacity-[0.07] text-[#1B5C6E] -translate-x-20"
          viewBox="0 0 300 300"
          fill="currentColor"
        >
          <path d="M250 150 Q220 50 120 30 Q40 80 50 200 Q130 260 250 150Z" />
          <path d="M250 150 L60 100" stroke="currentColor" strokeWidth="2" fill="none" />
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
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#1B5C6E] mb-5">Kind Words</p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-[#1A2B2B] leading-[1.15]">
            From those who{" "}
            <em className="italic text-[#1B5C6E]">practise here.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.12 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 flex flex-col"
            >
              <span className="font-display text-4xl text-[#1B5C6E] opacity-30 leading-none mb-4 select-none">&ldquo;</span>
              <p className="text-sm text-[#4A5A5A] leading-relaxed font-light flex-1 italic font-display">
                {t.quote}
              </p>
              <div className="mt-8 pt-5 border-t border-[#E0DDD8]">
                <p className="text-xs text-[#6B7A7A] tracking-wide">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
