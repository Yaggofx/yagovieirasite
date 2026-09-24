import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PlaceholderCard } from "@/components/project-card";
import { ContactSection } from "@/components/sections";
import { Container, GridOverlay } from "@/components/ui";

export const metadata: Metadata = { title: "Playground" };

export default function PlaygroundPage() {
  return (
    <main>
      <PageHero
        label="Playground"
        first="Play"
        second="Ground"
        aside={
          <>
            Este é o meu laboratório criativo.
            <br />
            Um espaço para testar, errar, experimentar e deixar a criatividade seguir seu próprio caminho.
          </>
        }
      />
      <section className="relative pb-32">
        <GridOverlay />
        <Container className="grid gap-x-3 gap-y-8 md:grid-cols-2">
          <PlaceholderCard index={0} />
          <PlaceholderCard index={1} />
        </Container>
      </section>
      <ContactSection />
    </main>
  );
}
