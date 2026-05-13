"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    quote: "Pack is so calm and patient. She carefully watches how you move and adjusts you to exactly the right position. I have never felt more seen in a class before.",
    name: "Student, Parkside",
  },
  {
    quote: "I was a complete beginner and was terrified to start. Pack made me feel so welcome and never rushed me. The home setting makes it feel so personal.",
    name: "Student, Adelaide",
  },
  {
    quote: "She really knows what she is doing. Every session I leave feeling longer, lighter, and more grounded. The space itself is just beautiful.",
    name: "Student, Adelaide",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#1B5C6E] relative overflow-hidden">

      {/* Large background leaf */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg className="w-[700px] h-[700px] opacity-[0.04] text-white" viewBox="0 0 400 400" fill="currentColor">
          <path d="M200 20 Q340 80 350 260 Q240 340 120 290 Q30 220 200 20Z" />
          <path d="M200 20 L205 340" stroke="white" strokeWidth="2" fill="none" />
          <path d="M202 110 Q280 150 295 230" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M203 170 Q130 210 115 290" stroke="white" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 py-24 md:py-32 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-white/40" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">Kind Words</p>
          </div>
          <h2 className="font-display font-light text-4xl md:text-5xl text-white leading-[1.1]">
            From those who{" "}
            <em className="italic opacity-60">practise here.</em>
          </h2>
        </motion.div>

        {/* Testimonials — horizontal layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="p-10"
            >
              <span className="font-display text-4xl text-white/15 leading-none block mb-6 select-none">&ldquo;</span>
              <p className="font-display font-light text-lg text-white/80 leading-[1.7] italic mb-8">
                {t.quote}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-white/35">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
