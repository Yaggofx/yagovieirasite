import { PageHero } from "@/components/page-hero";
import { ContactSection, ServicesSection, WorkSection } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <PageHero
        first="Creative Web"
        second="Designer"
        aside={
          <>
            Olá, me chamo Yago Vieira.
            <br />
            Designer focado em UX/UI Design, Branding e Web Design.
          </>
        }
      />
      <WorkSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
