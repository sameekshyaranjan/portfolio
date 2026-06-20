import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import {
  About,
  Skills,
  Community,
  Education,
  Certifications,
  Contact,
  Footer,
} from "@/components/sections/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sameekshya Ranjan Sahu — Full Stack & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Sameekshya Ranjan Sahu — Full Stack Developer & AI Engineer based in Bengaluru. Building civic, agricultural, and AI-integrated products.",
      },
      { property: "og:title", content: "Sameekshya Ranjan Sahu — Full Stack & AI Engineer" },
      {
        property: "og:description",
        content:
          "Full Stack Developer & AI Engineer. Available for Summer / Fall 2026 internships.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F1F1F3] selection:bg-[#6E56CF]/40">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Community />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
