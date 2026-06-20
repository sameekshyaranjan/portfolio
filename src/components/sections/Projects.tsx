import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { Container, SectionLabel, StatusDot, TechBadge } from "@/components/ui/primitives";
import { MockBrowser } from "@/components/ui/MockBrowser";

export function Projects() {
  return (
    <section id="work" className="pb-24 md:pb-32 pt-12">
      <Container>
        <SectionLabel text="Selected Work" />
        <h2 className="font-display tight text-3xl md:text-4xl font-semibold text-[#F1F1F3]">
          Things I've Built
        </h2>
        <p className="mt-3 text-[#8A8A9A] max-w-xl">
          Three projects. Different domains. Same standard of engineering.
        </p>

        <div className="mt-14 space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-[#1E1E22] bg-[#111113] p-6 md:p-8 hover:border-[#2E2E36] transition-all hover:shadow-[0_0_0_1px_#2E2E36,0_30px_60px_-30px_rgba(0,0,0,0.6)]"
    >
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 items-center">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-4 mb-5">
            <span className="font-mono text-xs text-[#4A4A5A]">{project.id}</span>
            <span className="h-px flex-1 bg-[#1E1E22]" />
            <StatusDot status={project.status} />
          </div>

          <h3 className="font-display tight text-2xl md:text-3xl font-semibold text-[#F1F1F3]">
            {project.name}
          </h3>
          <p className="mt-2 text-[#8A8A9A]">{project.tagline}</p>

          <ul className="mt-5 space-y-2.5">
            {project.description.map((d, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#8A8A9A] leading-relaxed">
                <span className="text-[#6E56CF] mt-1.5 shrink-0">→</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>

          <div className="mt-6 flex items-center gap-5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#F1F1F3] hover:text-[#6E56CF] transition inline-flex items-center gap-1.5"
            >
              GitHub <span aria-hidden>↗</span>
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#F1F1F3] hover:text-[#6E56CF] transition inline-flex items-center gap-1.5"
              >
                Live Demo <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <MockBrowser project={project} />
        </div>
      </div>
    </motion.article>
  );
}
