"use client";

import { motion } from "motion/react";
import { MapPin, Clock, Mail, Phone } from "lucide-react";

const info = [
  {
    icon: MapPin,
    label: "Location",
    value: "Adelaide, South Australia",
    detail: "Exact address provided on booking",
  },
  {
    icon: Clock,
    label: "Studio Hours",
    value: "Mon – Fri",
    detail: "Classes from 6:00 AM – 7:30 PM",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@yosanayoga.com.au",
    href: "mailto:hello@yosanayoga.com.au",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0400 000 000",
    href: "tel:+61400000000",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[#EDE7DC]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-[#7A9B76] mb-4">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl text-[#222] leading-tight">
            Ready to begin your <em className="italic text-[#B5755C]">practice?</em>
          </h2>
          <p className="text-[#7A6F63] mt-4 max-w-sm mx-auto text-sm leading-relaxed">
            Reach out to ask questions, book your first session, or just say hello. We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {info.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                  className="bg-[#FDFAF5] rounded-2xl p-6"
                >
                  <div className="w-9 h-9 bg-[#7A9B76]/15 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={16} className="text-[#7A9B76]" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-[#7A6F63] mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[#222] font-medium text-sm hover:text-[#7A9B76] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#222] font-medium text-sm">{item.value}</p>
                  )}
                  {item.detail && (
                    <p className="text-[#7A6F63] text-xs mt-1">{item.detail}</p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* CTA panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
            className="bg-[#222] rounded-3xl p-10 text-[#F4EFE6]"
          >
            <p className="text-xs uppercase tracking-widest text-[#7A9B76] mb-3">New Students</p>
            <h3 className="font-display text-3xl mb-5 leading-tight">
              Your first class is <em className="italic text-[#B5755C]">just $15.</em>
            </h3>
            <p className="text-[#A09890] text-sm leading-relaxed mb-8">
              We offer an introductory rate so you can experience the studio, meet the teacher, and find the class style that suits you — with no pressure and no commitment.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:hello@yosanayoga.com.au?subject=First%20Class%20Booking"
                className="block w-full bg-[#B5755C] text-white text-center py-4 px-6 rounded-full text-sm tracking-wide hover:bg-[#9E6450] transition-all duration-300 hover:scale-[1.01]"
              >
                Book My First Class
              </a>
              <a
                href="mailto:hello@yosanayoga.com.au"
                className="block w-full border border-[#444] text-[#D9D0C3] text-center py-4 px-6 rounded-full text-sm tracking-wide hover:border-[#7A9B76] hover:text-[#7A9B76] transition-all duration-300"
              >
                Ask a Question
              </a>
            </div>

            <p className="text-[#5A5450] text-xs mt-6 text-center">
              We typically respond within one business day.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
