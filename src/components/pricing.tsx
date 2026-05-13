"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Single Class",
    price: "$28",
    per: "per session",
    description: "Try us once. No commitment needed.",
    features: [
      "Any class style",
      "Mat & props provided",
      "Complimentary tea",
    ],
    cta: "Book a Session",
    highlight: false,
  },
  {
    name: "Monthly Flow",
    price: "$95",
    per: "per month",
    description: "Our most popular option — unlimited classes, one consistent practice.",
    features: [
      "Unlimited classes",
      "Priority booking",
      "Mat & props provided",
      "Complimentary tea",
      "Monthly intention-setting session",
    ],
    cta: "Start Your Practice",
    highlight: true,
  },
  {
    name: "Class Pass",
    price: "$75",
    per: "for 3 classes",
    description: "Perfect if you like flexibility without the full commitment.",
    features: [
      "3 classes, use anytime",
      "Any class style",
      "Mat & props provided",
      "Complimentary tea",
    ],
    cta: "Get a Pass",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6 bg-[#F4EFE6]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-[#7A9B76] mb-4">Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl text-[#222] leading-tight">
            Simple, honest <em className="italic text-[#B5755C]">pricing.</em>
          </h2>
          <p className="text-[#7A6F63] mt-4 max-w-sm mx-auto text-sm leading-relaxed">
            No hidden fees. No lock-in contracts. Just yoga.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              className={`rounded-3xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-[#222] text-[#F4EFE6] ring-2 ring-[#7A9B76] md:-mt-6 md:pb-14"
                  : "bg-[#FDFAF5]"
              }`}
            >
              <p
                className={`text-xs uppercase tracking-widest mb-3 ${
                  plan.highlight ? "text-[#7A9B76]" : "text-[#7A6F63]"
                }`}
              >
                {plan.name}
              </p>
              <div className="mb-2 flex items-end gap-1">
                <span className={`font-display text-5xl ${plan.highlight ? "text-white" : "text-[#222]"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm mb-2 ${plan.highlight ? "text-[#A09890]" : "text-[#7A6F63]"}`}>
                  {plan.per}
                </span>
              </div>
              <p className={`text-sm mb-8 leading-relaxed ${plan.highlight ? "text-[#A09890]" : "text-[#5A5450]"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${plan.highlight ? "text-[#7A9B76]" : "text-[#7A9B76]"}`}
                    />
                    <span className={plan.highlight ? "text-[#D9D0C3]" : "text-[#5A5450]"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center py-3.5 px-6 rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] ${
                  plan.highlight
                    ? "bg-[#B5755C] text-white hover:bg-[#9E6450]"
                    : "border border-[#D9D0C3] text-[#222] hover:border-[#7A9B76] hover:text-[#7A9B76]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-[#7A6F63] mt-10"
        >
          First class? Introductory offer — your first session is just $15.
        </motion.p>
      </div>
    </section>
  );
}
