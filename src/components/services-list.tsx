"use client";

import { useState } from "react";

const services = [
  {
    title: "Design de Interfaces - UI Design",
    description:
      "Interfaces para sites, plataformas e produtos digitais — da arquitetura da informação ao protótipo final, com foco em clareza, usabilidade e consistência visual.",
  },
  {
    title: "Criação de Marca e Identidade Visual",
    description:
      "Construção de marcas do conceito à aplicação: logotipo, paleta, tipografia e diretrizes para comunicar o posicionamento com personalidade e coerência.",
  },
];

export function ServicesList() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="bg-white">
      {services.map((service, i) => {
        const isOpen = open === i;
        return (
          <li key={service.title} className="border-b border-line last:border-b-0">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center gap-4 px-5 py-7 text-left sm:px-8"
            >
              <span className="text-xs text-muted">[{String(i + 1).padStart(2, "0")}]</span>
              <span className="flex-1 text-xl tracking-tight sm:text-2xl">{service.title}</span>
              <span
                className={`text-2xl font-light text-muted transition-transform ${isOpen ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <p className="overflow-hidden px-5 text-neutral-600 sm:px-8 sm:pl-[4.5rem]">
                <span className="block max-w-2xl pb-7">{service.description}</span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
