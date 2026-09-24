import type { Metadata } from "next";
import Image from "next/image";
import { BrowserFrame, CaseHero, CaseOverview } from "@/components/case-study";
import { ContactSection } from "@/components/sections";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Odonto Metrics",
  description: "Estudo de caso: o hub completo para gestão odontológica.",
};

const steps = [
  {
    title: "Centralizamos a operação da clínica",
    text: "Estruturamos uma plataforma capaz de reunir atendimentos, pacientes, comissões, caixa e gestão financeira em um único ambiente, simplificando a rotina operacional das clínicas.",
  },
  {
    title: "Mapeamos e reduzimos gargalos operacionais",
    text: "Ao lado da Plabo, analisamos os principais fluxos da rotina clínica para identificar inconsistências, melhorar processos e tornar a gestão mais organizada e eficiente.",
  },
  {
    title: "Desenvolvemos uma gestão mais inteligente e orientada por dados",
    text: "Criamos o Odonto Metrics para conectar operação, performance e tomada de decisão em uma experiência mais clara, intuitiva e estratégica para as clínicas odontológicas.",
    highlight: true,
  },
];

const colors = [
  { name: "Azure", hex: "#489DFA", rgb: "72, 157, 250", className: "bg-azure text-white sm:col-span-3 h-64" },
  { name: "Slate", hex: "#324663", rgb: "50, 70, 99", className: "bg-slate text-white sm:col-span-2 h-56" },
  { name: "Mist", hex: "#A8DAFA", rgb: "168, 218, 250", className: "bg-mist text-slate h-56" },
];

function Shot({ src, alt, w, h }: { src: string; alt: string; w: number; h: number }) {
  return <Image src={src} alt={alt} width={w} height={h} className="h-auto w-full rounded-md shadow-xl" />;
}

export default function OdontoMetricsPage() {
  return (
    <main className="font-urbanist">
      <CaseHero
        title="Odonto Metrics"
        subtitle="O hub completo para gestão odontológica."
        tags={["UI Design", "SaaS Platform", "Management System"]}
        className="bg-azure"
        visual={
          <BrowserFrame>
            <Image
              src="/images/metrics-dashboard.png"
              alt="Dashboard do Odonto Metrics"
              width={512}
              height={385}
              priority
              className="h-auto w-full"
            />
          </BrowserFrame>
        }
      />

      <CaseOverview>
        <p>
          <span className="text-muted">Overview —</span> O Plabo nos procurou para desenvolver o Odonto Metrics, uma
          plataforma de gestão para clínicas odontológicas. O desafio era centralizar atendimentos, pacientes, finanças e
          operações em uma experiência simples, clara e eficiente.
        </p>
        <p>Fui responsável pela experiência e interface do produto, além da construção de sua identidade visual.</p>
      </CaseOverview>

      <Container className="grid lg:grid-cols-[1.4fr_1fr]">
        <div className="relative aspect-[512/342]">
          <Image
            src="/images/metrics-laptop.png"
            alt="Odonto Metrics em uso no notebook"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center bg-azure p-8 text-white sm:p-12">
          <p className="flex items-center gap-2 text-lg">
            <Image src="/images/metrics-logo-mark.png" alt="" width={36} height={16} className="brightness-0 invert" />
            odonto <strong>metrics</strong>
          </p>
          <h2 className="mt-8 text-3xl leading-tight sm:text-4xl">Odonto Metrics: O hub completo para gestão odontológica</h2>
          <p className="mt-6 max-w-sm text-white/80">
            Acompanhe métricas, organize processos e tenha uma visão completa da sua clínica com uma gestão centralizada
            e orientada por dados.
          </p>
        </div>
      </Container>

      <Container className="grid gap-3 py-24 md:grid-cols-3">
        {steps.map((step, i) => (
          <article
            key={step.title}
            className={`flex min-h-80 flex-col justify-between p-6 ${step.highlight ? "bg-azure text-white" : "bg-[#f7f9fc]"}`}
          >
            <div>
              <p className={`text-right text-sm ${step.highlight ? "text-white/70" : "text-muted"}`}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 max-w-[240px] text-xl leading-tight font-medium">{step.title}</h3>
            </div>
            <p className={`mt-10 text-sm leading-relaxed ${step.highlight ? "text-white/85" : "text-neutral-700"}`}>
              {step.text}
            </p>
          </article>
        ))}
      </Container>

      <Container>
        <div className="flex flex-col items-center justify-center bg-white py-24">
          <Image src="/images/metrics-logo-mark.png" alt="" width={143} height={62} />
          <p className="mt-2 text-6xl leading-[0.9] font-light text-mist sm:text-7xl">odonto</p>
          <p className="text-6xl leading-[0.9] font-bold text-azure sm:text-7xl">metrics</p>
          <p className="mt-3 text-sm tracking-[0.35em] text-azure">HUB ODONTOLÓGICO</p>
        </div>

        <div className="mt-3 grid gap-3 bg-[#e6ecf4] p-3 sm:grid-cols-3">
          {colors.map((c, i) => (
            <div key={c.name} className={`flex flex-col justify-between p-5 ${c.className}`}>
              <div className="flex justify-between text-sm">
                <span>{c.name}</span>
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="text-xs leading-relaxed">
                HEX: {c.hex}
                <br />
                RGB: {c.rgb}
              </p>
            </div>
          ))}
        </div>

        <div className="relative mt-3 overflow-hidden bg-azure px-6 pt-6 text-white">
          <span className="bg-white px-3 py-1 text-sm text-ink">Tipografia</span>
          <p className="-mb-[0.18em] text-[clamp(88px,19vw,260px)] leading-none">Urbanist</p>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-[2fr_1fr]">
          <div className="flex items-center bg-white px-6 text-[clamp(88px,16vw,220px)] leading-none">AaBb</div>
          <ul className="space-y-1 bg-azure p-6 text-2xl text-white">
            <li className="font-light">Light</li>
            <li className="font-normal">Regular</li>
            <li className="font-medium">Medium</li>
            <li className="font-semibold">SemiBold</li>
            <li className="font-bold">Bold</li>
          </ul>
        </div>
      </Container>

      <Container className="mt-3">
        <div className="grid items-center gap-10 bg-azure p-8 text-white sm:p-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-white/70">Dashboard gerencial</p>
            <p className="mt-3 text-xl leading-snug">
              O dashboard do Odonto Metrics foi desenvolvido para oferecer ao gestor uma visão clara e centralizada da
              operação da clínica.
            </p>
          </div>
          <Shot src="/images/metrics-dashboard.png" alt="Dashboard overview" w={512} h={385} />
        </div>

        <div className="mt-3 grid gap-6 bg-azure p-8 text-white sm:p-12 lg:grid-cols-2">
          <Shot src="/images/metrics-usuarios.png" alt="Tela de usuários cadastrados" w={512} h={322} />
          <Shot src="/images/metrics-clinica.png" alt="Visão geral da clínica" w={512} h={417} />
          <Shot src="/images/metrics-comissoes.png" alt="Tela de comissões geradas" w={512} h={288} />
          <div className="self-center">
            <p className="text-white/70">Relatórios gerenciais</p>
            <p className="mt-3 text-xl leading-snug">
              Todas as informações da clínica são centralizadas e disponibilizadas para acompanhamento financeiro,
              operacional e estratégico em tempo real.
            </p>
          </div>
        </div>

        <div className="mt-3 bg-ink px-8 py-16 text-white sm:px-12">
          <h2 className="max-w-md text-3xl leading-tight">Uma plataforma preparada para crescer com a clínica</h2>
          <p className="mt-4 max-w-md text-white/75">
            A plataforma foi desenvolvida com Java Spring Boot, Next.js e infraestrutura AWS, garantindo escalabilidade,
            estabilidade e consistência operacional.
          </p>
        </div>
      </Container>

      <div className="h-32" />
      <div className="font-sans">
        <ContactSection />
      </div>
    </main>
  );
}
