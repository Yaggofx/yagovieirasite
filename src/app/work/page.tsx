import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { ContactSection } from "@/components/sections";
import { Container, GridOverlay } from "@/components/ui";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <main>
      <PageHero
        label="Trabalho"
        first="Alguns"
        second="Trabalhos"
        aside="Projetos reais e estudos de caso que mostram como penso, estruturo e transformo ideias em experiências digitais."
      />
      <section className="relative pb-32">
        <GridOverlay />
        <Container className="grid gap-x-3 gap-y-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </Container>
      </section>
      <ContactSection />
    </main>
  );
}
