"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1800&q=85&auto=format&fit=crop"
        alt="Woman in a peaceful yoga pose surrounded by natural light"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.25em] text-[#c9dcc7] mb-6"
        >
          Welcome to Yosana Yoga Home
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.08] tracking-tight mb-8"
        >
          Come home
          <br />
          <em className="italic text-[#c9dcc7]">to yourself.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-white/80 leading-relaxed mb-12 max-w-md mx-auto"
        >
          Small-group yoga classes rooted in mindfulness, movement, and belonging — for all bodies, all levels.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#pricing"
            className="bg-[#B5755C] text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#9E6450] transition-all duration-300 hover:scale-[1.02]"
          >
            Explore Classes
          </a>
          <a
            href="#about"
            className="border border-white/50 text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
          >
            Our Story
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F4EFE6] to-transparent" />
    </section>
  );
}
