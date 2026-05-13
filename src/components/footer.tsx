import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#F7F5F1] border-t border-[#E0DDD8] relative overflow-hidden">

      {/* Eucalyptus — top right of footer */}
      <div className="absolute top-0 right-0 w-[160px] sm:w-[220px] pointer-events-none select-none opacity-40">
        <Image src="/eucalyptus.png" alt="" width={220} height={147} className="w-full h-auto" style={{ transform: "scaleX(-1)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-10 md:py-12 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8 mb-8 md:mb-10">
          <p className="tracking-[0.3em] text-sm font-light text-[#1B5C6E] uppercase">YOSANA</p>

          <nav className="flex flex-wrap gap-5 sm:gap-8">
            {["About", "Classes", "Pricing", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="text-[10px] uppercase tracking-[0.2em] text-[#6B7A7A] hover:text-[#1B5C6E] transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex gap-5 sm:gap-6">
            <a href="https://www.instagram.com/yosana.adl" target="_blank" rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] text-[#6B7A7A] hover:text-[#1B5C6E] transition-colors">Instagram</a>
            <a href="https://www.facebook.com/yosanaco/" target="_blank" rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] text-[#6B7A7A] hover:text-[#1B5C6E] transition-colors">Facebook</a>
          </div>
        </div>

        <div className="pt-7 md:pt-8 border-t border-[#E0DDD8] text-[10px] text-[#B0B8B8] flex flex-col sm:flex-row justify-between gap-2 uppercase tracking-widest">
          <p>&copy; {year} Yosana Yoga Home, Parkside SA</p>
          <p>Ashtanga Vinyasa · All Levels Welcome</p>
        </div>
      </div>
    </footer>
  );
}
