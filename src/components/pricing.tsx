"use client";

import { motion } from "motion/react";

const plans = [
  {
    number: "01",
    name: "Private Session",
    price: "Contact for pricing",
    duration: "60 or 90 min",
    description: "Fully tailored one-on-one session with personalised sequencing and hands-on adjustments.",
    features: ["Personalised sequencing", "Hands-on adjustments", "All levels", "Mat & props provided"],
  },
  {
    number: "02",
    name: "Small Group Class",
    price: "Contact for pricing",
    duration: "60 min",
    description: "Intimate group classes in a warm home setting. Kept deliberately small for real attention.",
    features: ["Ashtanga Vinyasa flow", "Personal guidance", "All levels welcome", "Mat & props", "Complimentary tea"],
    featured: true,
  },
  {
    number: "03",
    name: "First Class",
    price: "New students",
    duration: "Come as you are",
    description: "Never tried yoga? Come and see — no pressure, no expectations, beginners especially welcome.",
    features: ["No experience needed", "Personal attention", "Relaxed & welcoming", "Mat & props provided"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#F7F5F1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 md:py-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#2A5240]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#2A5240]">Pricing</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-[#1A2B2B] leading-[1.1]">
              <em className="italic">Simple</em> and personal.
            </h2>
            <p className="text-sm text-[#6B7A7A] font-light max-w-xs sm:text-right leading-relaxed shrink-0">
              Reach out directly — Warunee will find the right fit for you.
            </p>
          </div>
        </motion.div>

        {/* Plans list */}
        <div className="divide-y divide-[#E0DDD8]">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`group py-10 md:py-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-start ${
                plan.featured ? "relative" : ""
              }`}
            >
              {/* Featured marker */}
              {plan.featured && (
                <div className="absolute left-0 top-10 md:top-12 w-0.5 h-8 bg-[#2A5240]" />
              )}

              <div className={plan.featured ? "pl-5" : ""}>
                {/* Top row: number + name + price */}
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-4">
                  <span className="font-display text-xs text-[#C4C0BA] tracking-widest">{plan.number}</span>
                  <h3 className="font-display font-light text-xl sm:text-2xl md:text-3xl text-[#1A2B2B]">
                    {plan.name}
                  </h3>
                  <span className={`text-xs uppercase tracking-[0.18em] font-light ml-auto md:ml-0 ${
                    plan.featured ? "text-[#2A5240]" : "text-[#A0A8A8]"
                  }`}>{plan.duration}</span>
                </div>

                <p className="text-sm text-[#6B7A7A] font-light leading-relaxed mb-7 max-w-lg">
                  {plan.description}
                </p>

                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs font-light text-[#8A9090]">
                      <span className="w-3 h-px bg-[#2A5240]/40 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: price + CTA */}
              <div className="flex flex-row md:flex-col items-center md:items-end gap-5 md:gap-4 md:pt-1">
                <p className={`font-display font-light text-lg whitespace-nowrap ${
                  plan.featured ? "text-[#2A5240]" : "text-[#1A2B2B]"
                }`}>
                  {plan.price}
                </p>
                <a
                  href="#contact"
                  className={`text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 transition-all duration-300 whitespace-nowrap ${
                    plan.featured
                      ? "bg-[#2A5240] text-white hover:bg-[#1E3D2F]"
                      : "border border-[#C4C0BA] text-[#1A2B2B] hover:border-[#2A5240] hover:text-[#2A5240]"
                  }`}
                >
                  {plan.name === "First Class" ? "Say Hello" : plan.name === "Private Session" ? "Enquire" : "Book a Spot"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
