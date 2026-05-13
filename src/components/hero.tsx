"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center px-6 md:px-12 lg:px-20 pt-32 pb-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT — text + buttons */}
        <div className="flex flex-col justify-center">
          {/* Location tag */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[10px] uppercase tracking-[0.3em] text-[#1B5C6E] mb-8"
          >
            Parkside · Adelaide
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display font-light text-5xl md:text-6xl xl:text-7xl text-[#1A2B2B] leading-[1.1] tracking-tight mb-6"
          >
            A home for
            <br />
            <em className="italic text-[#1B5C6E]">your practice.</em>
          </motion.h1>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="space-y-1 mb-10"
          >
            <p className="text-sm text-[#6B7A7A] font-light">
              Intimate Ashtanga Vinyasa yoga with Warunee (Pack).
            </p>
            <p className="text-sm text-[#6B7A7A] font-light">
              Private sessions &amp; small group classes — all levels welcome.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-row gap-4"
          >
            <a
              href="#contact"
              className="bg-[#1A2B2B] text-white px-8 py-4 rounded-sm text-xs uppercase tracking-[0.12em] hover:bg-[#1B5C6E] transition-all duration-300"
            >
              Book a Class
            </a>
            <a
              href="#about"
              className="border border-[#1A2B2B] text-[#1A2B2B] px-8 py-4 rounded-sm text-xs uppercase tracking-[0.12em] hover:border-[#1B5C6E] hover:text-[#1B5C6E] transition-all duration-300 bg-white"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* RIGHT — image */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="relative h-[480px] lg:h-[580px] rounded-sm overflow-hidden border border-[#E0DDD8]"
        >
          <Image
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&q=85&auto=format&fit=crop"
            alt="Warunee teaching yoga in a calm, light-filled home studio"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Very subtle leaf overlay on image */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="absolute bottom-0 left-0 w-48 h-48 opacity-[0.12] text-white"
              viewBox="0 0 200 200"
              fill="currentColor"
            >
              <path d="M30 180 Q10 90 90 20 Q160 50 170 140 Q100 180 30 180Z" />
              <path d="M30 180 L140 40" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
