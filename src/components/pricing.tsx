"use client";

import { motion } from "motion/react";

const plans = [
  {
    number: "01",
    name: "Private Session",
    price: "Contact for pricing",
    description: "Fully tailored one-on-one session with Warunee. 60 or 90 minutes.",
    features: ["Personalised sequencing", "Hands-on adjustments", "All levels", "Mat & props provided"],
    cta: "Enquire",
    teal: false,
  },
  {
    number: "02",
    name: "Small Group",
    price: "Contact for pricing",
    description: "Intimate group classes in a warm home setting. Kept deliberately small.",
    features: ["Ashtanga Vinyasa flow", "Personal guidance", "All levels", "Mat & props", "Complimentary tea"],
    cta: "Book a Spot",
    teal: true,
  },
  {
    number: "03",
    name: "First Class",
    price: "New students",
    description: "Never tried yoga? Come and see. No pressure, no expectation — just Warunee.",
    features: ["Beginners especially welcome", "No experience needed", "Personal attention", "Mat & props provided"],
    cta: "Say Hello",
    teal: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#F7F5F1] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-8 md:px-12 py-24 md:py-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#1B5C6E]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1B5C6E]">Pricing</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display font-light text-4xl md:text-5xl text-[#1A2B2B] leading-[1.1]">
              <em className="italic">Simple</em> and personal.
            </h2>
            <p className="text-sm text-[#6B7A7A] font-light max-w-xs md:text-right leading-relaxed">
              Reach out directly — Warunee will find the right fit for you.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`flex flex-col p-8 ${
                plan.teal
                  ? "bg-[#1B5C6E] text-white"
                  : "bg-white border border-[#E0DDD8]"
              }`}
            >
              {/* Number */}
              <span className={`font-display text-4xl font-light mb-6 ${plan.teal ? "text-white/20" : "text-[#E0DDD8]"}`}>
                {plan.number}
              </span>

              <p className={`text-[10px] uppercase tracking-widest mb-2 ${plan.teal ? "text-[#8FC4D0]" : "text-[#1B5C6E]"}`}>
                {plan.name}
              </p>
              <p className={`font-display font-light text-2xl mb-3 ${plan.teal ? "text-white" : "text-[#1A2B2B]"}`}>
                {plan.price}
              </p>
              <p className={`text-xs font-light leading-relaxed mb-8 flex-1 ${plan.teal ? "text-[#9DCAD6]" : "text-[#6B7A7A]"}`}>
                {plan.description}
              </p>

              <ul className="space-y-2 mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs font-light">
                    <span className={`w-3 h-px flex-shrink-0 ${plan.teal ? "bg-[#8FC4D0]" : "bg-[#1B5C6E]"}`} />
                    <span className={plan.teal ? "text-[#C5E5ED]" : "text-[#6B7A7A]"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center py-3 px-6 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  plan.teal
                    ? "bg-white text-[#1B5C6E] hover:bg-[#F4F2EE]"
                    : "border border-[#C4C0BA] text-[#1A2B2B] hover:border-[#1B5C6E] hover:text-[#1B5C6E]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
