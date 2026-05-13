"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 md:py-32 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#1B5C6E]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1B5C6E]">Get in Touch</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-[#1A2B2B] leading-[1.1]">
              Ready to begin?{" "}
              <em className="italic text-[#1B5C6E]">Say hello.</em>
            </h2>
            <p className="text-sm text-[#6B7A7A] font-light max-w-xs sm:text-right leading-relaxed shrink-0">
              Warunee personally replies to every message — no chatbots, just a real conversation.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 md:gap-6">

          {/* LEFT — image + info */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 flex flex-col gap-4"
          >
            <div className="relative h-56 sm:h-72 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=900&q=80&auto=format&fit=crop"
                alt="A warm light-filled yoga space"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1B5C6E]/10" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[#E0DDD8] p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={12} className="text-[#1B5C6E]" />
                  <p className="text-[10px] uppercase tracking-widest text-[#6B7A7A]">Location</p>
                </div>
                <p className="text-sm text-[#1A2B2B] font-light">Parkside, Adelaide SA</p>
                <p className="text-xs text-[#A0A8A8] mt-1 font-light">Address shared on booking</p>
              </div>
              <div className="border border-[#E0DDD8] p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Mail size={12} className="text-[#1B5C6E]" />
                  <p className="text-[10px] uppercase tracking-widest text-[#6B7A7A]">Social</p>
                </div>
                <a href="https://www.instagram.com/yosana.adl" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-[#1B5C6E] font-light hover:underline block">@yosana.adl</a>
                <a href="https://www.facebook.com/yosanaco/" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-[#A0A8A8] font-light hover:text-[#1B5C6E] transition-colors mt-1 block">facebook.com/yosanaco</a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — CTA panel */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 bg-[#1B5C6E] p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">New Students</p>
              <h3 className="font-display font-light text-2xl sm:text-3xl text-white leading-tight mb-5">
                Come for your{" "}
                <em className="italic opacity-75">first class.</em>
              </h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                There is no better way to know if a practice is right for you than simply showing up. Reach out via Instagram or Facebook — Warunee will take it from there.
              </p>
            </div>

            <div className="relative z-10 space-y-3 mt-8 sm:mt-10">
              <a href="https://www.instagram.com/yosana.adl" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-white text-[#1B5C6E] py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-[#F4F2EE] transition-colors">
                Message on Instagram
              </a>
              <a href="https://www.facebook.com/yosanaco/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-full border border-white/25 text-white py-4 text-[10px] uppercase tracking-[0.2em] hover:border-white/60 transition-colors">
                Message on Facebook
              </a>
              <p className="text-[10px] text-white/30 text-center pt-2 font-light">
                Usually replies within one business day.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
