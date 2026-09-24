import type { Metadata } from "next";
import Image from "next/image";
import { CuriositiesCarousel } from "@/components/curiosities-carousel";
import { SiteHeader } from "@/components/page-hero";
import { ContactSection, QuoteSection, ServicesSection } from "@/components/sections";
import { ArrowButton, CONTACT, Container, GridOverlay, SectionLabel } from "@/components/ui";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main>
      <section className="relative pb-24">
        <GridOverlay />
        <SiteHeader />
        <Container className="pt-28">
          <SectionLabel>Sobre mim</SectionLabel>
          <h1 className="mt-6 max-w-5xl text-[clamp(36px,5.2vw,72px)] leading-[1.08] tracking-[-0.03em]">
            Olá, me chamo Yago Vieira.
            <br />
            Designer focado em <span className="text-muted">UX/UI,</span>
            <br />
            <span className="text-muted">Branding e Web Design.</span>
          </h1>
        </Container>

        <Container className="mt-20 grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-[864/760] overflow-hidden bg-neutral-300">
            <Image
              src="/images/yago.jpg"
              alt="Retrato de Yago Vieira"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[50%_20%]"
            />
          </div>
          <div className="space-y-6 text-lg leading-snug lg:text-xl">
            <p>
              Sempre fui uma pessoa movida pela criatividade. Na infância, passava horas desenhando e pintando, e foi
              justamente esse interesse que me levou aos meus primeiros trabalhos ainda na escola.
            </p>
            <p>
              No ensino médio decidi transformar esse interesse em profissão. Depois de me formar, atuei por cerca de
              quatro anos em uma produtora, colaborando em projetos para grandes empresas e adquirindo experiência em
              diferentes áreas do design.
            </p>
            <p>
              Atualmente sou estudante de Design na Universidade Federal do Maranhão (UFMA), com foco em UX/UI Design e
              Branding.
            </p>
            <p>
              Meu trabalho é influenciado pelo design minimalista. Busco criar interfaces e identidades visuais simples,
              funcionais e intuitivas, equilibrando estética, clareza e propósito em cada decisão de design.
            </p>
          </div>
        </Container>

        <Container className="mt-24 grid items-end gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <ArrowButton href={`mailto:${CONTACT.email}`}>Iniciar projeto</ArrowButton>
            <p className="max-w-[220px] text-sm leading-snug">
              <strong className="font-medium">Entre em contato</strong> - Disponível para novos projetos.
            </p>
          </div>
          <div className="lg:col-span-2">
            <CuriositiesCarousel />
          </div>
        </Container>
      </section>
      <QuoteSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
