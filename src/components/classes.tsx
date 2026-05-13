"use client";

import { motion } from "motion/react";
import { Wind, Flame, Moon } from "lucide-react";

const classes = [
  {
    icon: Wind,
    name: "Hatha Flow",
    style: "Foundational",
    description:
      "Ground yourself in the classical postures. Hatha is slow, intentional, and perfect for building a strong foundation — whatever your experience.",
    days: "Monday & Wednesday",
    time: "7:00 AM — 8:00 AM",
    level: "All Levels",
    color: "#7A9B76",
  },
  {
    icon: Flame,
    name: "Vinyasa",
    style: "Dynamic",
    description:
      "Breath leads movement in this energising flow. Sequences are creative and varied — no two classes are exactly alike. Expect to move, sweat, and feel alive.",
    days: "Tuesday & Thursday",
    time: "6:00 PM — 7:00 PM",
    level: "Intermediate",
    color: "#B5755C",
  },
  {
    icon: Moon,
    name: "Yin & Restore",
    style: "Slow & Deep",
    description:
      "Long-held postures, gentle props, and stillness. Yin works the deeper connective tissues and quiets the nervous system. Ideal after a long week.",
    days: "Friday",
    time: "5:30 PM — 7:00 PM",
    level: "All Levels",
    color: "#9C7EA8",
  },
];

export default function Classes() {
  return (
    <section id="classes" className="py-24 md:py-32 px-6 bg-[#EDE7DC]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-[#7A9B76] mb-4">The Practice</p>
          <h2 className="font-display text-4xl md:text-5xl text-[#222] leading-tight max-w-xl mx-auto">
            Three classes. One intention — <em className="italic text-[#B5755C]">presence.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classes.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-[#FDFAF5] rounded-3xl p-8 flex flex-col transition-shadow hover:shadow-xl hover:shadow-black/5"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: c.color + "20" }}
                >
                  <Icon size={20} style={{ color: c.color }} />
                </div>

                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: c.color }}>
                  {c.style}
                </p>
                <h3 className="font-display text-2xl text-[#222] mb-4">{c.name}</h3>
                <p className="text-sm text-[#5A5450] leading-relaxed flex-1">{c.description}</p>

                <div className="mt-8 pt-6 border-t border-[#E8E1D6] space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#7A6F63]">When</span>
                    <span className="text-[#222] font-medium text-right">{c.days}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#7A6F63]">Time</span>
                    <span className="text-[#222] font-medium">{c.time}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#7A6F63]">Level</span>
                    <span className="text-[#222] font-medium">{c.level}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Schedule note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-[#7A6F63] mt-10"
        >
          All classes held at our home studio in Adelaide. Bookings essential — spaces are limited.
        </motion.p>
      </div>
    </section>
  );
}
