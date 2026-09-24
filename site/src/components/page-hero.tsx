import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowButton, CONTACT, Container, GridOverlay, SectionLabel } from "./ui";

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-sm">
          [Yago Vieira]
        </Link>
        <a href="#contato" className="bg-ink px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-800">
          Contato
        </a>
      </Container>
    </header>
  );
}

/**
 * Hero compartilhado pelas páginas: título em duas linhas (preto + cinza deslocado),
 * CTA de contato à esquerda e texto de apoio à direita.
 */
export function PageHero({
  label,
  first,
  second,
  aside,
}: {
  label?: string;
  first: string;
  second: string;
  aside: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[92svh] flex-col">
      <GridOverlay />
      <SiteHeader />
      <Container className="flex flex-1 flex-col justify-center py-16">
        {label && (
          <div className="mb-6">
            <SectionLabel>{label}</SectionLabel>
          </div>
        )}
        <h1 className="text-[clamp(56px,9vw,128px)] leading-[0.95] font-normal tracking-[-0.04em]">
          <span className="block">{first}</span>
          <span className="block pl-[14%] text-muted sm:pl-[24%]">{second}</span>
        </h1>
      </Container>
      <Container className="grid gap-8 pb-28 sm:grid-cols-2 sm:items-end lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-1 lg:col-span-2 lg:flex-row lg:items-center lg:gap-4">
          <ArrowButton href={`mailto:${CONTACT.email}`}>Iniciar projeto</ArrowButton>
          <p className="max-w-[220px] text-sm leading-snug">
            <strong className="font-medium">Entre em contato</strong> - Disponível para novos projetos.
          </p>
        </div>
        <div className="border-t border-line pt-4 text-sm leading-snug sm:col-start-2 lg:col-start-4">
          {aside}
        </div>
      </Container>
    </section>
  );
}
