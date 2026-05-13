import { Globe, Heart, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#222] text-[#D9D0C3] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl text-[#F4EFE6] mb-3">
              Yosana<span className="text-[#7A9B76]"> Yoga</span>
            </p>
            <p className="text-sm leading-relaxed text-[#A09890]">
              A home for your practice. Come as you are, leave as you&apos;re meant to be.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#7A9B76] mb-4">Navigate</p>
            <nav className="flex flex-col gap-2">
              {["About", "Classes", "Pricing", "Testimonials", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-[#A09890] hover:text-[#F4EFE6] transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#7A9B76] mb-4">Find Us</p>
            <p className="text-sm text-[#A09890] leading-relaxed">
              Adelaide, South Australia
            </p>
            <a
              href="mailto:hello@yosanayoga.com.au"
              className="text-sm text-[#A09890] hover:text-[#F4EFE6] transition-colors mt-1 block"
            >
              hello@yosanayoga.com.au
            </a>

            <div className="flex gap-4 mt-5">
              <a href="#" aria-label="Website" className="text-[#7A6F63] hover:text-[#7A9B76] transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" aria-label="Made with love" className="text-[#7A6F63] hover:text-[#7A9B76] transition-colors">
                <Heart size={18} />
              </a>
              <a href="mailto:hello@yosanayoga.com.au" aria-label="Email" className="text-[#7A6F63] hover:text-[#7A9B76] transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#333] pt-8 text-xs text-[#5A5450] flex flex-col md:flex-row justify-between gap-2">
          <p>&copy; {year} Yosana Yoga Home. All rights reserved.</p>
          <p>Made with care in Adelaide, South Australia.</p>
        </div>
      </div>
    </footer>
  );
}
