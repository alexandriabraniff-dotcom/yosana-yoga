"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Camera, Users } from "lucide-react";

const details = [
  {
    icon: MapPin,
    label: "Studio Address",
    value: "60 Blyth St",
    sub: "Parkside SA 5063",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0459 101 621",
    href: "tel:+61459101621",
  },
  {
    icon: Camera,
    label: "Instagram",
    value: "@yosana.adl",
    href: "https://www.instagram.com/yosana.adl",
  },
  {
    icon: Users,
    label: "Facebook",
    value: "facebook.com/yosanaco",
    href: "https://www.facebook.com/yosanaco/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 md:py-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#2A5240]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#2A5240]">Get in Touch</p>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-[#1A2B2B] leading-[1.1]">
            Ready to begin?{" "}
            <em className="italic text-[#2A5240]">Say hello.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* LEFT — contact details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="space-y-0 divide-y divide-[#F0EDE8]"
          >
            {details.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-5 py-5"
                >
                  <div className="w-10 h-10 bg-[#2A5240]/8 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-[#2A5240]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-widest text-[#A0A8A8] mb-0.5">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-[#1A2B2B] font-light hover:text-[#2A5240] transition-colors">
                        {d.value}
                      </a>
                    ) : (
                      <>
                        <p className="text-sm text-[#1A2B2B] font-light">{d.value}</p>
                        {d.sub && <p className="text-xs text-[#A0A8A8] font-light">{d.sub}</p>}
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="bg-[#2A5240] p-10 sm:p-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5">New Students</p>
              <h3 className="font-display font-light text-2xl sm:text-3xl text-white leading-tight mb-4">
                Come for your{" "}
                <em className="italic opacity-70">first class.</em>
              </h3>
              <p className="text-sm text-white/55 font-light leading-relaxed mb-10">
                Reach out by phone, Instagram, or Facebook. Warunee replies personally to every message — usually within the same day.
              </p>

              <div className="space-y-3">
                <a href="tel:+61459101621"
                  className="flex items-center justify-center w-full bg-white text-[#2A5240] py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-[#F4F2EE] transition-colors font-medium">
                  Call 0459 101 621
                </a>
                <a href="https://www.instagram.com/yosana.adl" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-full border border-white/20 text-white py-4 text-[10px] uppercase tracking-[0.2em] hover:border-white/50 transition-colors">
                  Message on Instagram
                </a>
              </div>

              <p className="text-[10px] text-white/25 text-center mt-6 font-light">
                Private 1:1 and Small Group Sessions · All Levels Welcome
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
