"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Private Session",
    price: "Contact",
    per: "for pricing",
    description: "One-on-one with Warunee. Fully tailored to your body and goals.",
    features: [
      "60 or 90 minute session",
      "Hands-on adjustments",
      "Personalised sequencing",
      "All levels welcome",
      "Mat & props provided",
    ],
    cta: "Enquire",
    highlight: false,
  },
  {
    name: "Small Group",
    price: "Contact",
    per: "for pricing",
    description: "Intimate group classes in a warm home setting. Always kept small.",
    features: [
      "Ashtanga Vinyasa flow",
      "Maximum small group size",
      "Attentive individual guidance",
      "All levels welcome",
      "Mat & props provided",
      "Complimentary tea",
    ],
    cta: "Book a Spot",
    highlight: true,
  },
  {
    name: "Intro Class",
    price: "Try first",
    per: "get in touch",
    description: "Never tried yoga? Come for your first class with no pressure and no expectation.",
    features: [
      "First-timers especially welcome",
      "No experience needed",
      "Slow pace introduction",
      "Mat & props provided",
      "Personal attention",
    ],
    cta: "Say Hello",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-36 px-6 bg-[#FAFAF8] relative overflow-hidden">
      {/* Top-right leaf */}
      <div className="absolute top-0 right-0 pointer-events-none">
        <svg
          className="w-72 h-72 opacity-[0.05] text-[#1B5C6E] translate-x-20 -translate-y-10"
          viewBox="0 0 300 300"
          fill="currentColor"
        >
          <path d="M150 20 Q250 70 260 190 Q180 250 90 220 Q20 160 150 20Z" />
          <path d="M150 20 L158 240" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M152 80 Q200 110 215 160" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M154 130 Q108 155 90 200" stroke="currentColor" strokeWidth="1" fill="none" />
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
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#1B5C6E] mb-5">Pricing</p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-[#1A2B2B] leading-[1.15]">
            <em className="italic">Simple</em> and personal.
          </h2>
          <p className="text-sm text-[#6B7A7A] mt-4 max-w-xs mx-auto font-light">
            Reach out directly — Warunee will find the right option for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              className={`rounded-3xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-[#1B5C6E] text-white md:-mt-6 md:pb-14 ring-2 ring-[#1B5C6E]/20"
                  : "bg-white"
              }`}
            >
              <p
                className={`text-[10px] uppercase tracking-widest mb-3 ${
                  plan.highlight ? "text-[#8FC4D0]" : "text-[#1B5C6E]"
                }`}
              >
                {plan.name}
              </p>
              <div className="mb-2">
                <span className={`font-display text-3xl font-light ${plan.highlight ? "text-white" : "text-[#1A2B2B]"}`}>
                  {plan.price}
                </span>
                <span className={`text-xs ml-2 ${plan.highlight ? "text-[#8FC4D0]" : "text-[#6B7A7A]"}`}>
                  {plan.per}
                </span>
              </div>
              <p className={`text-xs mb-8 leading-relaxed font-light ${plan.highlight ? "text-[#8FC4D0]" : "text-[#6B7A7A]"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-xs">
                    <Check
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${plan.highlight ? "text-[#8FC4D0]" : "text-[#1B5C6E]"}`}
                    />
                    <span className={plan.highlight ? "text-[#D9EDF1]" : "text-[#6B7A7A]"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center py-3 px-6 rounded-full text-xs uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] ${
                  plan.highlight
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
