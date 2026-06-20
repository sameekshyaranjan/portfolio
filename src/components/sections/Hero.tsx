import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import photo from "@/assets/profile.jpg";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, delay, ease: "easeOut" },
});

export function Hero() {
  return (
    <section id="top" className="relative flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 beacon pointer-events-none" />
      

      <div className="relative max-w-5xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.div {...fade(0)}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1E1E22] bg-[#111113]/80 backdrop-blur text-xs text-[#8A8A9A]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#3DD68C] opacity-60 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3DD68C]" />
                </span>
                {personal.status}
              </div>
            </motion.div>

            <motion.h1 
              {...fade(0.05)}
              className="mt-6 font-display tight text-[2.5rem] sm:text-5xl md:text-[3.5rem] font-bold text-[#F1F1F3] leading-[1.05]"
            >
              Hi, I'm {personal.firstName}.
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-4 text-xl text-[#8A8A9A] font-medium">
              {personal.role}
            </motion.p>

            <motion.p {...fade(0.15)} className="mt-5 text-base text-[#8A8A9A] max-w-lg leading-relaxed">
              I build full-stack web applications, secure backend systems, and AI-powered
              products — things that actually work, ship, and scale.
            </motion.p>

            <motion.div {...fade(0.2)} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#6E56CF] hover:bg-[#7C66D9] text-white text-sm font-medium transition shadow-[0_0_24px_rgba(110,86,207,0.35)]"
              >
                View Work <span aria-hidden>↓</span>
              </a>
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#2A2A32] hover:border-[#6E56CF] text-[#F1F1F3] text-sm font-medium transition"
              >
                Resume <span aria-hidden>↗</span>
              </a>
              <div className="flex items-center gap-1 ml-1">
                <IconLink href={personal.github} label="GitHub">
                  <GithubIcon />
                </IconLink>
                <IconLink href={personal.linkedin} label="LinkedIn">
                  <LinkedinIcon />
                </IconLink>
              </div>
            </motion.div>

            <motion.div {...fade(0.25)} className="mt-10 inline-flex items-center gap-2 text-xs font-mono text-[#4A4A5A]">
              <span aria-hidden>📍</span> {personal.location}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="order-1 md:order-2 justify-self-center md:justify-self-end"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-[#6E56CF]/20 blur-2xl" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-[2px] bg-gradient-to-br from-[#6E56CF] via-[#6E56CF]/40 to-transparent">
                <img
                  src={photo}
                  alt={personal.name}
                  className="w-full h-full rounded-full object-cover object-center bg-[#111113]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 grid place-items-center rounded-md text-[#8A8A9A] hover:text-[#F1F1F3] hover:bg-[#111113] border border-transparent hover:border-[#2A2A32] transition"
    >
      {children}
    </a>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.13c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.55v14H.22V8Zm7.4 0h4.36v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 7v7.44h-4.56v-6.6c0-1.57-.03-3.6-2.19-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.62V8Z" />
    </svg>
  );
}
