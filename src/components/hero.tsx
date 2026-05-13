"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="h-screen bg-white flex flex-col overflow-hidden">

      {/* Main grid — fills the viewport below the nav (nav is ~66px) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-0">

        {/* LEFT — text column */}
        <div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-12 relative">

          {/* Subtle leaf — top left corner */}
          <div className="absolute top-0 left-0 pointer-events-none">
            <svg className="w-56 h-56 opacity-[0.06] text-[#1B5C6E] -translate-x-10 -translate-y-10" viewBox="0 0 200 200" fill="currentColor">
              <path d="M100 10 Q170 40 175 140 Q110 175 40 140 Q10 80 100 10Z" />
              <path d="M100 10 L103 168" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M101 60 Q145 85 155 130" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M102 100 Q62 122 50 162" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </div>

          {/* Location pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-10 w-fit"
          >
            <span className="w-4 h-px bg-[#1B5C6E]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#1B5C6E]">Parkside · Adelaide</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display font-light leading-[1.08] tracking-tight text-[#1A2B2B] mb-7"
            style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
          >
            A home for
            <br />
            <em className="italic text-[#1B5C6E]">your practice.</em>
          </motion.h1>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="space-y-1.5 mb-12"
          >
            <p className="text-sm text-[#6B7A7A] font-light leading-relaxed">
              Intimate Ashtanga Vinyasa yoga with Warunee (Pack).
            </p>
            <p className="text-sm text-[#6B7A7A] font-light leading-relaxed">
              Private sessions &amp; small group classes — all levels welcome.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-row gap-3"
          >
            <a
              href="#contact"
              className="bg-[#1A2B2B] text-white px-8 py-3.5 text-xs uppercase tracking-[0.15em] hover:bg-[#1B5C6E] transition-colors duration-300"
            >
              Book a Class
            </a>
            <a
              href="#about"
              className="border border-[#C4C0BA] text-[#1A2B2B] px-8 py-3.5 text-xs uppercase tracking-[0.15em] hover:border-[#1B5C6E] hover:text-[#1B5C6E] transition-colors duration-300"
            >
              Learn More
            </a>
          </motion.div>

        </div>

        {/* RIGHT — full-height image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <Image
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&q=85&auto=format&fit=crop"
            alt="Yoga practice in a calm, light-filled home studio"
            fill
            priority
            sizes="50vw"
            className="object-cover object-center"
          />
          {/* Thin left border edge */}
          <div className="absolute inset-y-0 left-0 w-px bg-[#E0DDD8]" />

          {/* Corner leaf — bottom right of image */}
          <div className="absolute bottom-0 right-0 pointer-events-none">
            <svg className="w-40 h-40 opacity-20 text-white translate-x-6 translate-y-6" viewBox="0 0 200 200" fill="currentColor">
              <path d="M100 10 Q170 40 175 140 Q110 175 40 140 Q10 80 100 10Z" />
              <path d="M100 10 L103 168" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
