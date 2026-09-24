"use client";

import Image from "next/image";
import { useState } from "react";

// Adicione novas curiosidades aqui — o carrossel passa a navegar entre elas automaticamente.
const slides = [
  {
    image: "/images/curiosidade-praia.png",
    alt: "Pôr do sol na praia",
    text: (
      <>
        Toco guitarra e sou fissurado em música,
        <br />
        meus gêneros musicais preferidos são Soul, Rock e Rap.
      </>
    ),
  },
];

export function CuriositiesCarousel() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const hasMany = slides.length > 1;

  return (
    <div className="relative aspect-[16/8.5] overflow-hidden bg-neutral-800 text-white">
      <Image src={slide.image} alt={slide.alt} fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute right-0 bottom-0 left-0 p-5">
        <p className="text-[11px] tracking-[0.2em] text-white/60 uppercase">Curiosidades</p>
        <p className="mt-1.5 text-sm leading-snug sm:text-base">{slide.text}</p>
      </div>
      {hasMany && (
        <button
          type="button"
          aria-label="Próxima curiosidade"
          onClick={() => setIndex((index + 1) % slides.length)}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-4xl font-thin text-white/80 hover:text-white"
        >
          ›
        </button>
      )}
    </div>
  );
}
