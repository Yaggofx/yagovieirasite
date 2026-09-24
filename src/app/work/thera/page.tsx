import type { Metadata } from "next";
import { BrowserFrame, CaseHero, CaseOverview } from "@/components/case-study";
import { ContactSection } from "@/components/sections";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Thera Software House",
  description: "Estudo de caso: tecnologia, produto e soluções digitais.",
};

const method = [
  {
    title: "Descoberta & Viabilidade",
    text: "Análise técnica de requisitos e definição de escopo estratégico para mitigação de riscos.",
  },
  {
    title: "Arquitetura & Design do Produto",
    text: "Engenharia de software focada em alta disponibilidade e performance, do backend à UX.",
  },
  { title: "Desenvolver & Lançar", text: "Construção iterativa, testes contínuos e entrega do produto em produção." },
];

const services = ["Sites e Sistemas", "Prototipagem e MVP", "Infraestrutura Cloud", "Consultoria Técnica"];

const palette = [
  { name: "Roxo", hex: "#8A1CF2", className: "bg-thera text-white" },
  { name: "Preto", hex: "#0A0A0A", className: "bg-[#0a0a0a] text-white" },
  { name: "Lavanda", hex: "#F1E8FF", className: "bg-[#f1e8ff] text-ink" },
];

export default function TheraPage() {
  return (
    <main>
      <CaseHero
        title="Thera Software House"
        subtitle="Tecnologia, produto e soluções digitais."
        tags={["UX Strategy", "Web Design", "Branding"]}
        className="bg-thera"
        visual={
          <BrowserFrame dark>
            <div className="flex aspect-[16/9] flex-col justify-between bg-[radial-gradient(90%_80%_at_80%_0%,#3b0d6b_0%,#0a0a0a_60%)] p-6">
              <p className="text-lg font-semibold tracking-tight">thera</p>
              <p className="max-w-xs text-2xl leading-tight">Soluções digitais sob medida para o seu negócio</p>
            </div>
          </BrowserFrame>
        }
      />

      <CaseOverview>
        <p>
          <span className="text-muted">Overview —</span> A Thera precisava de um site capaz de apresentar seus serviços,
          projetos e diferentes frentes de atuação de forma clara e consistente com seu posicionamento. O desafio foi
          transformar a identidade da software house em uma experiência digital que comunicasse tecnologia, proximidade
          e capacidade de execução.
        </p>
        <p>
          Fui responsável pela experiência e interface do site, estruturando a arquitetura das informações, os
          principais fluxos de navegação e levando a identidade da Thera para o site.
        </p>
      </CaseOverview>

      <Container className="space-y-3">
        <div className="bg-thera p-3">
          <div className="grid gap-3 lg:grid-cols-[2fr_1fr]">
            <div className="flex min-h-[420px] flex-col items-center justify-center bg-ink p-10 text-center text-white">
              <span className="border border-white/20 px-2 py-0.5 text-[10px]">Como</span>
              <h2 className="mt-4 max-w-sm text-3xl leading-tight">Da ideia à solução, com estratégia em cada etapa.</h2>
            </div>
            <div className="grid gap-3">
              {["Produto Sob Medida", "Parceria Estratégica"].map((t) => (
                <div key={t} className="flex items-end bg-ink p-6 text-white">
                  <div className="border border-white/10 bg-white/5 p-4">
                    <span className="mb-2 block size-5 rounded bg-thera" />
                    <p className="text-sm">{t}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-10 bg-ink p-10 text-white lg:grid-cols-2">
          <div>
            <span className="border border-white/20 px-2 py-0.5 text-[10px]">Serviços</span>
            <h2 className="mt-4 text-3xl leading-tight">Tecnologia sob medida para o seu negócio</h2>
            <ul className="mt-8 space-y-2">
              {services.map((s) => (
                <li key={s} className="flex items-center justify-between border border-white/10 bg-white/5 px-4 py-3 text-sm">
                  {s}
                  <span className="text-white/40">›</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-h-64 bg-[radial-gradient(80%_80%_at_60%_40%,#b04dff_0%,#3a0d6e_45%,#0a0a0a_85%)]" />
        </div>

        <div className="bg-thera p-3">
          <div className="grid gap-10 bg-ink p-10 text-white lg:grid-cols-2">
            <div>
              <span className="border border-white/20 px-2 py-0.5 text-[10px]">Projetos</span>
              <h2 className="mt-4 text-3xl leading-tight">Confiança é resultado de execução</h2>
              <p className="mt-4 max-w-sm text-sm text-white/60">
                Unimos estratégia, design e tecnologia para entregar soluções que funcionam de verdade.
              </p>
            </div>
            <div className="bg-white p-6 text-ink">
              <p className="text-xs text-azure">odonto metrics</p>
              <p className="mt-2 text-2xl leading-tight font-semibold">
                Sistema Financeiro para Clínicas Odontológicas em Modelo Hub
              </p>
            </div>
          </div>
        </div>

        <div className="bg-thera p-3">
          <div className="grid gap-3 lg:grid-cols-[1fr_2fr]">
            <div className="bg-ink p-10 text-white">
              <span className="border border-white/20 px-2 py-0.5 text-[10px]">Processos</span>
              <h2 className="mt-4 text-3xl leading-tight">Método é o que garante consistência em cada entrega</h2>
            </div>
            <ol className="space-y-4 bg-ink p-10 text-white">
              {method.map((m, i) => (
                <li key={m.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-thera text-sm">
                    {i + 1}
                  </span>
                  <div className="border border-white/10 bg-white/5 p-4">
                    <p className="font-medium">{m.title}</p>
                    <p className="mt-1 text-sm text-white/60">{m.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-[radial-gradient(70%_60%_at_50%_0%,#5b16a3_0%,#0a0a0a_70%)] px-10 py-20 text-center text-white">
          <h2 className="mx-auto max-w-xl text-3xl leading-tight">Tire sua ideia do papel e transforme em um produto digital de verdade</h2>
          <div className="mt-8 flex justify-center gap-3 text-sm">
            <span className="rounded bg-thera px-4 py-2">Iniciar projeto</span>
            <span className="rounded border border-white/20 px-4 py-2">Ver projetos</span>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[1fr_1fr_1.3fr]">
          <ul className="bg-thera p-8 text-white">
            {["Regular", "Medium", "SemiBold", "Bold"].map((w, i) => (
              <li
                key={w}
                className={`border-b border-white/30 py-2 text-3xl ${["font-normal", "font-medium", "font-semibold", "font-bold"][i]}`}
              >
                {w}
              </li>
            ))}
            <li className="pt-4 text-7xl font-medium">Geist</li>
          </ul>
          <div className="grid gap-3 bg-[#e9dcff] p-3">
            {palette.map((c, i) => (
              <div key={c.name} className={`flex min-h-28 flex-col justify-between p-4 text-xs ${c.className}`}>
                <div className="flex justify-between">
                  <span>{c.name}</span>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <span>HEX: {c.hex}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center bg-thera p-10 text-6xl font-semibold tracking-tight text-white">
            thera
          </div>
        </div>
      </Container>

      <div className="h-32" />
      <ContactSection />
    </main>
  );
}
