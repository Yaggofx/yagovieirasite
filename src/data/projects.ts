export type Project = {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  href: string;
  cover?: string;
  /** Classes de fundo usadas quando o projeto não tem imagem de capa. */
  coverClassName?: string;
};

export const projects: Project[] = [
  {
    slug: "odonto-metrics",
    title: "Odonto Metrics",
    tags: ["UI Design", "Identidade Visual", "Plataforma SaaS"],
    year: "2026",
    href: "/work/odonto-metrics",
    cover: "/images/metrics-laptop.png",
  },
  {
    slug: "thera",
    title: "Thera Software House",
    tags: ["UX Strategy", "Web Design", "Branding"],
    year: "2026",
    href: "/work/thera",
    coverClassName: "bg-[radial-gradient(120%_90%_at_70%_20%,#8a1cf2_0%,#2a0a4a_45%,#050505_80%)]",
  },
];
