"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-[#F4EFE6]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[520px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=900&q=85&auto=format&fit=crop"
                alt="Peaceful yoga studio with natural light and plants"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-[#7A9B76] text-[#F4EFE6] rounded-2xl p-6 max-w-[200px] shadow-xl">
              <p className="font-display text-3xl mb-1">7+</p>
              <p className="text-sm text-[#c9dcc7]">years of practice and teaching</p>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-[#7A9B76] mb-5">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#222] leading-tight mb-8">
              A practice born from{" "}
              <em className="italic text-[#B5755C]">returning home.</em>
            </h2>
            <div className="space-y-5 text-[#5A5450] leading-relaxed">
              <p>
                Yosana Yoga Home began as a small, intimate space where people could slow down — away from the noise, the pace, the pressure. We believe that yoga is not a performance. It is a coming home to the body you already have.
              </p>
              <p>
                Our teacher brings over seven years of study in Hatha, Vinyasa, and Yin traditions, weaving together movement and mindfulness in a way that meets you exactly where you are. Whether you&apos;ve never rolled out a mat or you&apos;ve been practicing for years, you belong here.
              </p>
              <p>
                Classes are kept intentionally small — never more than eight students — so every person receives real attention, real care.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 pt-10 border-t border-[#D9D0C3]">
              {[
                { num: "All Levels", label: "Welcome" },
                { num: "8 Max", label: "Class Size" },
                { num: "3 Styles", label: "Hatha · Vinyasa · Yin" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-xl text-[#222] mb-1">{stat.num}</p>
                  <p className="text-xs text-[#7A6F63] tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
