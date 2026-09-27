import Link from "next/link";
import type { ReactNode } from "react";

export const CONTACT = {
  email: "yaggodesigner@gmail.com",
  phone: "+55 98 984375620",
  phoneHref: "https://wa.me/5598984375620",
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "Behance", href: "#" },
  ],
};

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`relative mx-auto w-full max-w-[1300px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** Linhas verticais das colunas (5 linhas: 0%, 25%, 50%, 75% e 100%, cor #000000 com 5% de opacidade). */
export function GridOverlay({ dark = false }: { dark?: boolean }) {
  const lineStyle = dark ? "border-[rgba(255,255,255,0.08)]" : "border-[rgba(0,0,0,0.05)]";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <Container className="h-full">
        <div className="grid h-full grid-cols-4">
          <div className={`h-full border-l ${lineStyle}`} />
          <div className={`h-full border-l ${lineStyle}`} />
          <div className={`h-full border-l ${lineStyle}`} />
          <div className={`h-full border-l border-r ${lineStyle}`} />
        </div>
      </Container>
    </div>
  );
}

export function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-2.5 text-sm ${dark ? "text-white" : "text-ink"}`}>
      <span className={`inline-block size-1.5 ${dark ? "bg-white" : "bg-ink"}`} aria-hidden />
      {children}
    </p>
  );
}

export function ArrowButton({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
}) {
  const styles =
    variant === "dark" ? "bg-ink text-white hover:bg-neutral-800" : "bg-white text-ink hover:bg-neutral-200";
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const className = `inline-flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${styles}`;
  const content = (
    <>
      {children}
      <span aria-hidden>↗</span>
    </>
  );

  return external ? (
    <a href={href} className={className}>
      {content}
    </a>
  ) : (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
