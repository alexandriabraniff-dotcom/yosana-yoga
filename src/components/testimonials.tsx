"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Yosana has completely changed my relationship with my body. I came in anxious, stiff, and doubtful — and left feeling like I&apos;d finally come home. The classes are small, intimate, and genuinely care about each person.",
    name: "Priya M.",
    detail: "Practicing for 14 months",
  },
  {
    quote:
      "I&apos;ve tried a lot of yoga studios over the years, and nothing compares to the warmth and quality of teaching here. The Yin class on Fridays has become my weekly non-negotiable.",
    name: "Claire B.",
    detail: "Yin & Restore student",
  },
  {
    quote:
      "As a complete beginner, I was terrified to start. But the class size meant I never felt lost or overlooked. I&apos;ve now been coming for six months and can&apos;t imagine my week without it.",
    name: "Daniel W.",
    detail: "Hatha Flow student",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-[#2C2825] relative overflow-hidden">
      {/* Soft texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-[#7A9B76] mb-4">Kind Words</p>
          <h2 className="font-display text-4xl md:text-5xl text-[#F4EFE6] leading-tight">
            What our students <em className="italic text-[#B5755C]">say.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.12 }}
              className="bg-[#38332F] rounded-3xl p-8 flex flex-col"
            >
              {/* Quote mark */}
              <span className="font-display text-5xl text-[#7A9B76] leading-none mb-4 select-none">&ldquo;</span>
              <p className="text-[#C8C0B6] leading-relaxed text-sm flex-1"
                dangerouslySetInnerHTML={{ __html: t.quote }}
              />
              <div className="mt-8 pt-6 border-t border-[#444038]">
                <p className="text-[#F4EFE6] font-medium text-sm">{t.name}</p>
                <p className="text-[#7A6F63] text-xs mt-0.5">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
