import type { Metadata } from "next";
import { Inter_Tight, Urbanist } from "next/font/google";
import { FloatingNav } from "@/components/floating-nav";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yago Vieira — Creative Web Designer",
    template: "%s — Yago Vieira",
  },
  description:
    "Designer focado em UX/UI Design, Branding e Web Design. Projetos reais e estudos de caso.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${interTight.variable} ${urbanist.variable} antialiased`}>
      <body className="min-h-screen">
        {children}
        <FloatingNav />
      </body>
    </html>
  );
}
