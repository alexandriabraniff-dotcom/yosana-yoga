"use client";

import Image from "next/image";
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

      {/* Eucalyptus — top right, tinted white */}
      <div className="absolute top-0 right-0 w-[200px] sm:w-[280px] lg:w-[380px] pointer-events-none select-none opacity-15">
        <Image src="/eucalyptus.png" alt="" width={380} height={253} className="w-full h-auto brightness-0 invert" style={{ transform: "scaleX(-1)" }} />
      </div>

      {/* Eucalyptus — bottom left */}
      <div className="absolute bottom-0 left-0 w-[160px] sm:w-[220px] lg:w-[300px] pointer-events-none select-none opacity-10">
        <Image src="/eucalyptus.png" alt="" width={300} height={200} className="w-full h-auto brightness-0 invert" style={{ transform: "scaleY(-1)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 md:py-32 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-white/40" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">Kind Words</p>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1]">
            From those who{" "}
            <em className="italic opacity-60">practise here.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-0 md:border md:border-white/10 md:divide-x md:divide-white/10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="p-7 sm:p-8 md:p-10 border border-white/10 md:border-0"
            >
              <span className="font-display text-3xl sm:text-4xl text-white/15 leading-none block mb-5 select-none">&ldquo;</span>
              <p className="font-display font-light text-base sm:text-lg text-white/80 leading-[1.7] italic mb-7 sm:mb-8">
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
