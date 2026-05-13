"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAF8]">
      {/* Botanical background image — soft, misty, low opacity */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1800&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-20"
        />
        {/* Gentle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF8]/40 via-transparent to-[#FAFAF8]/80" />
      </div>

      {/* Floating leaf decals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -top-10 -right-10 w-64 h-64 opacity-[0.07] text-[#1B5C6E]"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M100 10 Q160 40 180 120 Q130 160 60 140 Q20 100 100 10Z" />
          <path d="M100 10 L100 170" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
        </svg>
        <svg
          className="absolute top-1/3 -left-16 w-80 h-80 opacity-[0.06] text-[#1B5C6E] rotate-[30deg]"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M80 5 Q160 30 170 130 Q100 160 40 100 Q10 60 80 5Z" />
          <path d="M80 5 L130 160" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
        </svg>
        <svg
          className="absolute bottom-20 right-1/4 w-48 h-48 opacity-[0.05] text-[#1B5C6E] -rotate-[20deg]"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M100 10 Q160 40 180 120 Q130 160 60 140 Q20 100 100 10Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] uppercase tracking-[0.3em] text-[#1B5C6E] mb-8"
        >
          Parkside · Adelaide
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-[#1A2B2B] leading-[1.1] tracking-tight mb-8"
        >
          A home for
          <br />
          <em className="italic font-light text-[#1B5C6E]">your practice.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm md:text-base text-[#6B7A7A] leading-relaxed mb-12 max-w-sm mx-auto font-light"
        >
          Intimate Ashtanga Vinyasa yoga — private sessions and small group classes for all levels, led by Warunee.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-[#1B5C6E] text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.15em] hover:bg-[#154D5D] transition-all duration-300 hover:scale-[1.02]"
          >
            Book a Class
          </a>
          <a
            href="#about"
            className="border border-[#C4C0BA] text-[#6B7A7A] px-8 py-4 rounded-full text-xs uppercase tracking-[0.15em] hover:border-[#1B5C6E] hover:text-[#1B5C6E] transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
    </section>
  );
}
