import { motion } from "framer-motion";
import { community, personal, skills } from "@/lib/data";
import { Container, SectionLabel } from "@/components/ui/primitives";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-[#1E1E22]">
      <Container>
        <SectionLabel text="About" />
        <motion.h2 {...reveal} className="font-display tight text-3xl md:text-4xl font-semibold">
          A self-taught builder, shipping real products.
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-[1.4fr_1fr] gap-12">
          <motion.div {...reveal} className="space-y-5 text-[#8A8A9A] leading-relaxed">
            <p>
              I'm a final-year engineering student at Bangalore Institute of Technology with hands-on
              experience building full-stack products from the ground up. I pick up new technologies
              quickly and gravitate toward problems that have real stakes — the kind where good
              engineering makes a genuine difference.
            </p>
            <p>
              I work across the entire stack, from crafting responsive frontends to designing backend
              systems and integrating AI APIs. I care about how things are built, not just that they
              work.
            </p>
          </motion.div>

          <motion.div {...reveal} className="grid grid-cols-2 gap-px bg-[#1E1E22] border border-[#1E1E22] rounded-xl overflow-hidden self-start">
            {[
              { v: "3", l: "Projects shipped" },
              { v: "2026", l: "Year all projects built" },
              { v: "~50%", l: "API latency cut" },
              { v: "MERN+", l: "Stack fluency" },
            ].map((s) => (
              <div key={s.l} className="bg-[#111113] p-6">
                <div className="font-display tight text-3xl font-semibold text-[#6E56CF]">{s.v}</div>
                <div className="mt-2 text-xs font-mono text-[#8A8A9A] uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-[#1E1E22]">
      <Container>
        <SectionLabel text="Toolbox" />
        <motion.h2 {...reveal} className="font-display tight text-3xl md:text-4xl font-semibold">
          Technical Stack
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([cat, list], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-[#1E1E22] bg-[#111113] p-6 hover:border-[#2E2E36] hover:-translate-y-0.5 transition"
            >
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#4A4A5A]">{cat}</div>
              <ul className="mt-4 space-y-2">
                {list.map((s) => (
                  <li key={s} className="text-sm text-[#F1F1F3]">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Community() {
  return (
    <section className="py-24 md:py-32 border-t border-[#1E1E22]">
      <Container>
        <SectionLabel text="Beyond Code" />
        <motion.h2 {...reveal} className="font-display tight text-3xl md:text-4xl font-semibold">
          Community & Involvement
        </motion.h2>

        <div className="mt-12 relative pl-8 border-l border-[#1E1E22] space-y-10">
          {community.map((c, i) => (
            <motion.div
              key={c.org}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <span
                className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#6E56CF]"
                style={{ boxShadow: "0 0 0 4px #0A0A0B, 0 0 12px rgba(110,86,207,0.6)" }}
              />
              <div className="text-sm font-mono text-[#4A4A5A] uppercase tracking-wider">{c.role}</div>
              <div className="mt-1 text-lg font-medium text-[#F1F1F3]">{c.org}</div>
              <p className="mt-1.5 text-sm text-[#8A8A9A] max-w-xl">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Education() {
  return (
    <section className="py-24 md:py-32 border-t border-[#1E1E22]">
      <Container>
        <SectionLabel text="Education" />
        <motion.h2 {...reveal} className="font-display tight text-3xl md:text-4xl font-semibold">
          Where I'm Studying
        </motion.h2>

        <motion.div
          {...reveal}
          className="mt-10 rounded-2xl border border-[#1E1E22] bg-[#111113] p-8 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#6E56CF]/10 blur-3xl rounded-full" />
          <div className="relative flex items-start justify-between gap-6 flex-wrap">
            <div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[#6E56CF]/10 border border-[#6E56CF]/30 grid place-items-center text-lg">
                  🎓
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-[#F1F1F3]">
                    Bangalore Institute of Technology
                  </h3>
                  <p className="text-sm text-[#8A8A9A] mt-0.5">
                    Bachelor of Engineering · Electrical and Electronics Engineering
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#8A8A9A] font-mono">Bengaluru, Karnataka</p>
            </div>
            <span className="font-mono text-sm text-[#8A8A9A]">2023 — 2027</span>
          </div>
        </motion.div>

        <motion.div
          {...reveal}
          className="mt-4 rounded-xl border border-[#1E1E22] bg-[#0D0D10] p-5 flex items-center justify-between gap-4 flex-wrap"
        >
          <div>
            <div className="text-sm text-[#F1F1F3]">Shree Krishna International School, Bhubaneswar</div>
            <div className="text-xs text-[#4A4A5A] font-mono mt-1">Class XII · CBSE · 82%</div>
          </div>
          <span className="font-mono text-xs text-[#4A4A5A]">2020 — 2022</span>
        </motion.div>
      </Container>
    </section>
  );
}

export function Certifications() {
  const items = [
    { title: "The Complete Web Development Bootcamp", org: "Udemy" },
    { title: "Introduction to AI and ChatGPT", org: "Udemy" },
  ];
  return (
    <section className="py-24 md:py-32 border-t border-[#1E1E22]">
      <Container>
        <SectionLabel text="Certifications" />
        <motion.h2 {...reveal} className="font-display tight text-3xl md:text-4xl font-semibold">
          Continued Learning
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-[#1E1E22] bg-[#111113] p-5 flex items-center gap-4 hover:border-[#2E2E36] transition"
            >
              <span className="w-10 h-10 rounded-lg bg-[#15151A] border border-[#262630] grid place-items-center text-[#6E56CF]">
                📜
              </span>
              <div>
                <div className="text-sm font-medium text-[#F1F1F3]">{c.title}</div>
                <div className="text-xs text-[#4A4A5A] font-mono mt-0.5">{c.org}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0D0D10] border-t border-[#1E1E22]">
      <Container>
        <SectionLabel text="Get In Touch" />
        <motion.h2 {...reveal} className="font-display tight text-3xl md:text-5xl font-semibold max-w-2xl">
          Let's Build Something Meaningful.
        </motion.h2>
        <motion.p {...reveal} className="mt-4 text-[#8A8A9A] max-w-xl">
          Open to internship opportunities — full-stack, AI engineering, or product-focused
          engineering roles. Available Summer / Fall 2026.
        </motion.p>

        <motion.div {...reveal} className="mt-14 flex flex-wrap gap-6">
          <ContactLink icon="✉" href={`mailto:${personal.email}`} label={personal.email} />
          <ContactLink icon="⟶" href={personal.linkedin} label="LinkedIn" />
          <ContactLink icon="⊙" href={personal.github} label="GitHub" />
        </motion.div>
      </Container>
    </section>
  );
}

function ContactLink({ icon, href, label }: { icon: string; href: string; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-[#1E1E22] bg-[#111113] text-[#F1F1F3] hover:border-[#6E56CF] hover:text-[#6E56CF] transition-all"
    >
      <span className="text-[#6E56CF] font-mono">{icon}</span>
      <span className="text-sm font-mono">{label}</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-[#1E1E22]">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#4A4A5A]">
          <div>© 2026 {personal.name}</div>
          <div>Built with React & Tailwind</div>
          <div className="flex items-center gap-4">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#F1F1F3]">GitHub</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#F1F1F3]">LinkedIn</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
