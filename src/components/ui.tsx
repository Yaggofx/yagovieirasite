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

/** Linhas verticais das colunas, como no grid do Figma. */
export function GridOverlay({ dark = false }: { dark?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <Container
        className={`grid-lines h-full ${dark ? "[--grid-color:var(--line-dark)]" : ""}`}
      >
        {null}
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
