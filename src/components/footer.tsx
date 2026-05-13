export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#F4F2EE] border-t border-[#E0DDD8] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          {/* Wordmark */}
          <div>
            <p
              className="tracking-[0.25em] text-sm font-light text-[#1B5C6E] uppercase mb-1"
            >
              YOSANA
            </p>
            <p className="text-xs text-[#6B7A7A] font-light">Yoga Home · Parkside, Adelaide</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            {["About", "Classes", "Pricing", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-widest text-[#6B7A7A] hover:text-[#1B5C6E] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/yosana.adl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#6B7A7A] hover:text-[#1B5C6E] transition-colors uppercase tracking-widest"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/yosanaco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#6B7A7A] hover:text-[#1B5C6E] transition-colors uppercase tracking-widest"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E0DDD8] text-xs text-[#A0A8A8] flex flex-col md:flex-row justify-between gap-2 font-light">
          <p>&copy; {year} Yosana Yoga Home, Parkside SA. All rights reserved.</p>
          <p>Ashtanga Vinyasa · Private &amp; Group · All Levels Welcome</p>
        </div>
      </div>
    </footer>
  );
}
