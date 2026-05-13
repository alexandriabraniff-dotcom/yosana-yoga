"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="bg-[#F7F5F1] relative overflow-hidden">

      {/* Eucalyptus — top right */}
      <div className="absolute top-0 right-0 w-[220px] sm:w-[300px] lg:w-[380px] pointer-events-none select-none opacity-60">
        <Image src="/eucalyptus.png" alt="" width={380} height={253} className="w-full h-auto" style={{ transform: "scaleX(-1)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 bg-[#1B5C6E]/8" />
            <div className="relative h-[340px] sm:h-[420px] lg:h-[500px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=900&q=85&auto=format&fit=crop"
                alt="Cozy home yoga studio with natural light and plants"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#1B5C6E]" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#1B5C6E]">Our Story</p>
            </div>

            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-[#1A2B2B] leading-[1.15] mb-7">
              Welcome to{" "}
              <br className="hidden sm:block" />
              <em className="italic text-[#1B5C6E]">Yosana Yoga Home.</em>
            </h2>

            <div className="space-y-4 text-sm text-[#6B7A7A] font-light leading-[1.9]">
              <p>
                Nestled in a warm, light-filled home in Parkside, Yosana is a quietly special place to slow down and return to your body. It is not a gym, not a studio — it is a home, and that is the point.
              </p>
              <p>
                Warunee — known to her students as Pack — is an Ashtanga Vinyasa specialist who meets each student exactly where they are. Patient, precise, and deeply attentive: she watches every body with care and adjusts with gentleness.
              </p>
              <p>
                Classes are kept small on purpose, so no one gets lost, and everyone feels held.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-0 border border-[#E0DDD8] divide-x divide-[#E0DDD8]">
              {[
                { label: "Style", value: "Ashtanga\nVinyasa" },
                { label: "Format", value: "Private\n& Group" },
                { label: "Level", value: "All\nWelcome" },
              ].map((s) => (
                <div key={s.label} className="px-3 sm:px-5 py-5 sm:py-6 text-center">
                  <p className="font-display font-light text-base sm:text-lg text-[#1A2B2B] mb-1 whitespace-pre-line leading-tight">{s.value}</p>
                  <p className="text-[9px] uppercase tracking-widest text-[#A0A8A8]">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Eucalyptus — bottom left */}
      <div className="absolute bottom-0 left-0 w-[180px] sm:w-[240px] lg:w-[300px] pointer-events-none select-none opacity-50">
        <Image src="/eucalyptus.png" alt="" width={300} height={200} className="w-full h-auto" style={{ transform: "scaleY(-1)" }} />
      </div>
    </section>
  );
}
