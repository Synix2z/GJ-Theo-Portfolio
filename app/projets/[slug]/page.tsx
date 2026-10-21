import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/button";
import { accentTag } from "@/components/ProjectCard";
import ProjectCarousel from "@/components/ProjectCarrousel";
import ProjectTypeBadge from "@/components/ProjectTypeBadge";
import { getProject, getProjectImages, projects } from "@/data/projects";

// Toute la page dépend du slug : évite l'avertissement de validation "navigation instantanée" de Next.js
export const instant = false;

type Props = { params: Promise<{ slug: string }> };

// Pré-génère une page statique par projet au moment du build
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Pour le SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project
    ? { title: `${project.title} | Portfolio`, description: project.shortDescription }
    : {};
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="font-syne text-2xl font-bold text-accent-text">{heading}</h2>
      {children}
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // Précédent / Suivant 
  const i = projects.indexOf(project);
  const prev = projects[i - 1];
  const next = projects[i + 1];

  const info = [
    ["Durée", project.duration],
    ["Équipe", project.team],
    ["Rôle", project.role],
  ];

  return (
    <main
      data-accent={project.accent}
      className="mx-auto w-full max-w-3xl space-y-12 px-6 py-12 font-body text-body"
    >
      <div className="space-y-10">
        <Link
          href="/#projects-title"
          className="inline-flex font-space-grotesk text-base text-accent-text transition hover:text-white min-[700px]:text-lg lg:text-xl"
        >
          ← Retour aux projets
        </Link>

        <header className="space-y-5">
          <div>
            <ProjectTypeBadge type={project.type} />
          </div>
          <h1 className="font-syne text-4xl font-extrabold text-accent-text sm:text-5xl">
            {project.title}
          </h1>
          <p>{project.shortDescription}</p>

          {(project.links?.demo || project.links?.github) && (
            <div className="flex flex-wrap gap-3 pt-1">
              {project.links.demo && <Button href={project.links.demo}>Voir la démo</Button>}
              {project.links.github && <Button href={project.links.github}>GitHub</Button>}
            </div>
          )}
        </header>
      </div>

      <ProjectCarousel images={getProjectImages(project)} title={project.title} />

      <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3">
        {info.map(([label, value]) => (
          <div key={label} className="bg-[#161D2F] p-4">
            <dt className="text-xs uppercase tracking-wide text-accent-text">{label}</dt>
            <dd className="mt-1">{value}</dd>
          </div>
        ))}
      </dl>

      <Section heading="À propos du projet">
        <p>{project.description}</p>
      </Section>

      <Section heading="Ma contribution">
        <ul className="space-y-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-text" />
              {feature}
            </li>
          ))}
        </ul>
      </Section>

      <Section heading="Langages">
        <div className="flex flex-wrap gap-2">
          {project.languages.map((lang) => (
            <span
              key={lang}
              className={`rounded-md px-3 py-1 font-space-grotesk text-sm ${accentTag[project.accent]}`}
            >
              {lang}
            </span>
          ))}
        </div>
      </Section>

      <Section heading="Outils">
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className={`rounded-md px-3 py-1 font-space-grotesk text-sm ${accentTag[project.accent]}`}
            >
              {tool}
            </span>
          ))}
        </div>
      </Section>

      {(prev || next) && (
        <nav className="grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/projets/${prev.slug}`}
              data-accent={prev.accent}
              className="rounded-xl bg-header-footer-bg p-4 transition hover:ring-1 hover:ring-accent-text"
            >
              <span className="text-sm text-accent-text min-[700px]:text-base lg:text-lg">
                ← Précédent
              </span>
              <p className="mt-1 font-syne font-bold">{prev.title}</p>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/projets/${next.slug}`}
              data-accent={next.accent}
              className="rounded-xl bg-header-footer-bg p-4 text-right transition hover:ring-1 hover:ring-accent-text"
            >
              <span className="text-sm text-accent-text min-[700px]:text-base lg:text-lg">
                Suivant →
              </span>
              <p className="mt-1 font-syne font-bold">{next.title}</p>
            </Link>
          )}
        </nav>
      )}
    </main>
  );
}