import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { ServicesList } from "./services-list";
import { ArrowButton, CONTACT, Container, GridOverlay, SectionLabel } from "./ui";

export function WorkSection() {
  return (
    <section className="relative bg-ink py-24 text-white">
      <GridOverlay dark />
      <Container>
        <SectionLabel dark>Trabalho</SectionLabel>
        <h2 className="mt-4 text-4xl tracking-tight sm:text-5xl">Meus trabalhos</h2>
        <div className="mt-14 grid gap-x-3 gap-y-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="relative py-24">
      <GridOverlay />
      <Container>
        <SectionLabel>Serviços</SectionLabel>
        <h2 className="mt-4 text-4xl leading-[1.1] tracking-tight sm:text-6xl">
          Veja como posso
          <br />
          <span className="text-muted">
            ajudar você <span className="inline-block h-px w-20 bg-muted align-middle" aria-hidden />
          </span>
        </h2>
        <div className="mt-20">
          <ServicesList />
        </div>
      </Container>
    </section>
  );
}

export function QuoteSection() {
  return (
    <section className="relative bg-ink py-24 text-white">
      <GridOverlay dark />
      <Container className="grid gap-6 lg:grid-cols-4">
        <span className="text-[120px] leading-none font-bold text-white/30 lg:col-start-1" aria-hidden>
          &ldquo;
        </span>
        <blockquote className="self-end text-3xl tracking-tight sm:text-4xl lg:col-span-3 lg:col-start-2">
          Servir bem para servir sempre.
        </blockquote>
      </Container>
    </section>
  );
}

export function ContactSection() {
  return (
    <footer id="contato" className="relative bg-ink pt-32 pb-28 text-white">
      <GridOverlay dark />
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionLabel dark>Contato</SectionLabel>
          <a href={CONTACT.phoneHref} className="text-sm hover:underline">
            {CONTACT.phone}
          </a>
        </div>
        <div className="mt-4 flex flex-col justify-between gap-10 border-b border-line-dark pb-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl leading-[1.1] tracking-tight sm:text-6xl">
              Vamos dar inicio
              <br />
              ao <span className="text-muted">seu projeto?</span>
            </h2>
            <div className="mt-8">
              <ArrowButton href={`mailto:${CONTACT.email}`} variant="light">
                Entre em contato
              </ArrowButton>
            </div>
          </div>
          <a href={`mailto:${CONTACT.email}`} className="text-sm hover:underline">
            {CONTACT.email}
          </a>
        </div>
        <div className="mt-12">
          <p className="text-sm text-white/50">Outras redes</p>
          <ul className="mt-4 space-y-3 text-sm">
            {CONTACT.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-16 border-t border-line-dark pt-6 text-sm">2026 ©</p>
      </Container>
    </footer>
  );
}
