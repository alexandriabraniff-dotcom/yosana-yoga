"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="h-screen bg-white flex flex-col overflow-hidden relative">

      {/* Eucalyptus — top right corner */}
      <div className="absolute top-0 right-0 w-[280px] sm:w-[360px] lg:w-[480px] pointer-events-none z-10 select-none">
        <Image
          src="/eucalyptus.png"
          alt=""
          width={480}
          height={320}
          className="w-full h-auto object-contain"
          style={{ transform: "scaleX(-1)" }}
          priority
        />
      </div>

      {/* Eucalyptus — bottom left corner */}
      <div className="absolute bottom-0 left-0 w-[200px] sm:w-[260px] lg:w-[340px] pointer-events-none z-10 select-none">
        <Image
          src="/eucalyptus.png"
          alt=""
          width={340}
          height={230}
          className="w-full h-auto object-contain"
          style={{ transform: "scaleY(-1)" }}
        />
      </div>

      {/* Main grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-0">

        {/* LEFT — text */}
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-20 py-12 relative z-20">

          {/* Location tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="w-4 h-px bg-[#1B5C6E]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#1B5C6E]">Parkside · Adelaide</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display font-light leading-[1.08] tracking-tight text-[#1A2B2B] mb-6"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}
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
            className="space-y-1 mb-10"
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
              className="bg-[#1A2B2B] text-white px-6 sm:px-8 py-3.5 text-xs uppercase tracking-[0.15em] hover:bg-[#1B5C6E] transition-colors duration-300"
            >
              Book a Class
            </a>
            <a
              href="#about"
              className="border border-[#C4C0BA] text-[#1A2B2B] px-6 sm:px-8 py-3.5 text-xs uppercase tracking-[0.15em] hover:border-[#1B5C6E] hover:text-[#1B5C6E] transition-colors duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* RIGHT — photo (desktop only) */}
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
          <div className="absolute inset-y-0 left-0 w-px bg-[#E0DDD8]" />
        </motion.div>

      </div>
    </section>
  );
}
