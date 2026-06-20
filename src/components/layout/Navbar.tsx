import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0B]/80 backdrop-blur-md border-b border-[#1E1E22]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group" aria-label="Home">
          <span className="w-8 h-8 rounded-lg border border-[#2A2A32] grid place-items-center font-display font-bold text-[#6E56CF] group-hover:border-[#6E56CF] transition">
            S
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#8A8A9A] hover:text-[#F1F1F3] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-3.5 py-1.5 rounded-md border border-[#2A2A32] text-[#F1F1F3] hover:border-[#6E56CF] hover:text-[#6E56CF] transition"
          >
            Resume ↗
          </a>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden w-9 h-9 grid place-items-center rounded-md border border-[#2A2A32] text-[#F1F1F3]"
          aria-label="Menu"
        >
          <span className="block w-4 h-px bg-current relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-current before:-top-1.5 after:content-[''] after:absolute after:w-4 after:h-px after:bg-current after:top-1.5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#1E1E22] bg-[#0A0A0B]/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[#8A8A9A] hover:text-[#F1F1F3]"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="text-sm text-[#6E56CF]">Resume ↗</a>
          </div>
        </div>
      )}
    </header>
  );
}
