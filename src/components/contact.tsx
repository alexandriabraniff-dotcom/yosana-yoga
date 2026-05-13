"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 px-6 bg-[#FAFAF8] relative overflow-hidden">
      {/* Bottom leaf decal */}
      <div className="absolute bottom-0 right-0 pointer-events-none">
        <svg
          className="w-96 h-96 opacity-[0.05] text-[#1B5C6E] translate-x-24 translate-y-16"
          viewBox="0 0 300 300"
          fill="currentColor"
        >
          <path d="M150 10 Q240 60 260 180 Q190 240 100 210 Q30 150 150 10Z" />
          <path d="M150 10 L155 240" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M152 70 Q200 100 215 150" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M153 120 Q108 148 88 195" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#1B5C6E] mb-5">Get in Touch</p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-[#1A2B2B] leading-[1.15]">
            Ready to begin?{" "}
            <em className="italic text-[#1B5C6E]">Say hello.</em>
          </h2>
          <p className="text-sm text-[#6B7A7A] mt-4 max-w-sm mx-auto font-light leading-relaxed">
            Warunee personally responds to every enquiry. There is no chatbot here — just a real conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Studio image + info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
              <Image
                src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=900&q=80&auto=format&fit=crop"
                alt="A warm, light-filled home yoga studio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1B5C6E]/10" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6">
                <div className="w-8 h-8 bg-[#1B5C6E]/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin size={14} className="text-[#1B5C6E]" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#6B7A7A] mb-1">Location</p>
                <p className="text-sm text-[#1A2B2B] font-light">Parkside, Adelaide SA</p>
                <p className="text-xs text-[#6B7A7A] mt-1 font-light">Address shared on booking</p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <div className="w-8 h-8 bg-[#1B5C6E]/10 rounded-xl flex items-center justify-center mb-4">
                  <Mail size={14} className="text-[#1B5C6E]" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#6B7A7A] mb-1">Social</p>
                <a
                  href="https://www.instagram.com/yosana.adl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#1B5C6E] font-light hover:underline block"
                >
                  @yosana.adl
                </a>
                <a
                  href="https://www.facebook.com/yosanaco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#6B7A7A] font-light hover:text-[#1B5C6E] transition-colors block mt-1"
                >
                  Facebook: yosanaco
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTA panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-[#1B5C6E] rounded-3xl p-10 text-white relative overflow-hidden"
          >
            {/* Inner leaf texture */}
            <div className="absolute top-0 right-0 pointer-events-none">
              <svg
                className="w-48 h-48 opacity-[0.08] text-white translate-x-10 -translate-y-10"
                viewBox="0 0 200 200"
                fill="currentColor"
              >
                <path d="M100 10 Q160 40 170 130 Q110 170 50 130 Q20 80 100 10Z" />
                <path d="M100 10 L102 160" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8FC4D0] mb-3 relative z-10">New to Yosana?</p>
            <h3 className="font-display font-light text-3xl mb-5 leading-tight relative z-10">
              Come for your{" "}
              <em className="italic">first class.</em>
            </h3>
            <p className="text-[#B8D8E0] text-sm leading-relaxed mb-8 font-light relative z-10">
              There is no better way to understand whether a practice is right for you than simply showing up. Warunee welcomes first-timers warmly, with no judgment and no rush. Reach out via Instagram, Facebook, or the links below.
            </p>

            <div className="space-y-3 relative z-10">
              <a
                href="https://www.instagram.com/yosana.adl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-white text-[#1B5C6E] text-center py-4 px-6 rounded-full text-xs uppercase tracking-widest hover:bg-[#F4F2EE] transition-all duration-300 hover:scale-[1.01]"
              >
                Message on Instagram
              </a>
              <a
                href="https://www.facebook.com/yosanaco/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-white/30 text-white text-center py-4 px-6 rounded-full text-xs uppercase tracking-widest hover:border-white/60 transition-all duration-300"
              >
                Message on Facebook
              </a>
            </div>

            <p className="text-[#6FA8B8] text-xs mt-6 text-center font-light relative z-10">
              Warunee replies personally — usually within a day.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
