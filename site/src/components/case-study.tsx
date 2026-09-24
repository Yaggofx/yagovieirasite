import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "./ui";

/** Cabeçalho colorido dos estudos de caso: título, subtítulo, tags e um visual à direita. */
export function CaseHero({
  title,
  subtitle,
  tags,
  className,
  titleClassName = "",
  visual,
}: {
  title: string;
  subtitle: string;
  tags: string[];
  className: string;
  titleClassName?: string;
  visual: ReactNode;
}) {
  return (
    <section className={`overflow-hidden text-white ${className}`}>
      <Container className="flex items-center justify-between py-4 text-sm">
        <Link href="/" className="hover:underline">
          [Yago Vieira]
        </Link>
        <Link href="/work" className="hover:underline">
          ← Todos os trabalhos
        </Link>
      </Container>
      <Container className="grid items-center gap-12 pt-12 pb-0 lg:grid-cols-2 lg:pt-20">
        <div className="pb-12 lg:pb-24">
          <h1 className={`text-5xl leading-none font-semibold tracking-tight sm:text-7xl ${titleClassName}`}>
            {title}
          </h1>
          <p className="mt-4 text-lg text-white/85 sm:text-xl">{subtitle}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag} className="border border-white/30 px-3 py-1.5 text-xs">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="self-end">{visual}</div>
      </Container>
    </section>
  );
}

export function CaseOverview({ children }: { children: ReactNode }) {
  return (
    <Container className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl space-y-6 text-xl leading-snug sm:text-2xl">{children}</div>
    </Container>
  );
}

/** Janela de navegador estilizada, usada para emoldurar telas do produto. */
export function BrowserFrame({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-t-xl shadow-2xl ${dark ? "bg-[#161616]" : "bg-white"}`}>
      <div className={`flex items-center gap-1.5 px-4 py-3 ${dark ? "bg-[#222]" : "bg-[#2b2b2b]"}`}>
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      {children}
    </div>
  );
}
