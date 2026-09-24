import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={project.href} className="group block">
      <div
        className={`relative aspect-[4/3.2] overflow-hidden bg-[#d9d9d9] ${project.coverClassName ?? ""}`}
      >
        {project.cover ? (
          <Image
            src={project.cover}
            alt={`Capa do projeto ${project.title}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-3xl font-medium tracking-tight text-white/90">
            {project.title.split(" ")[0].toLowerCase()}
          </span>
        )}
      </div>
      <div className="mt-2 flex items-start justify-between gap-4 bg-card px-4 py-3.5 text-white">
        <div>
          <h3 className="text-lg leading-tight">{project.title}</h3>
          <p className="mt-1 text-xs text-white/50">{project.tags.join("  –  ")}</p>
        </div>
        <div className="flex flex-col items-end gap-2 text-xs text-white/50">
          <span>[{String(index + 1).padStart(2, "0")}]</span>
          <span>{project.year}</span>
        </div>
      </div>
    </Link>
  );
}

export function PlaceholderCard({ index }: { index: number }) {
  return (
    <div aria-hidden className="block opacity-70">
      <div className="aspect-[4/3.2] bg-[#d9d9d9]" />
      <div className="mt-2 flex items-start justify-between bg-card px-4 py-3.5 text-white">
        <div>
          <p className="text-lg leading-tight">Em breve</p>
          <p className="mt-1 text-xs text-white/50">Novo projeto em andamento</p>
        </div>
        <span className="text-xs text-white/50">[{String(index + 1).padStart(2, "0")}]</span>
      </div>
    </div>
  );
}
