import Image from "next/image";
import Link from "next/link";
import { DEFAULT_IMAGE } from "@/data/projects";
import type { Project, ProjectAccent } from "@/data/projects";
import ProjectTypeBadge from "./ProjectTypeBadge";

export const accentTag: Record<ProjectAccent, string> = {
  violet: "bg-[#5B3DFF]",
  green: "bg-[#00C27A]",
  red: "bg-[#CF2F2F]",
  blue: "bg-[#2878FF]",
  orange: "bg-[#F97316]",
  pink: "bg-[#EC4899]",
  cyan: "bg-[#06B6D4]",
  yellow: "bg-[#EAB308]",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projets/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#161D2F] transition duration-300 hover:-translate-y-1 hover:border-[#A78BFA]/50"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={project.image || DEFAULT_IMAGE}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition duration-500 group-hover:scale-105 loading-eager"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <ProjectTypeBadge type={project.type} />
        </div>

        <h3 className="font-syne text-lg font-bold text-white">
          {project.title}
        </h3>
        <p className="text-sm text-white/80">{project.shortDescription}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {project.languages.map((lang) => (
            <span
              key={lang}
              className={`rounded-md px-3 py-1 font-space-grotesk text-xs text-white ${accentTag[project.accent]}`}
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}