import Title from "@/components/title";
import Separator from "@/components/separator";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section>
            <Title text="Projets" id="projects-title" />

            <div className="mx-auto mt-10 grid max-w-5xl gap-8 px-6 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}

                <div className="flex min-h-56 items-center justify-center rounded-2xl border border-dashed border-white/25 text-sm text-white/40">
                    + Projet à venir
                </div>
            </div>

            <Separator />
        </section>
    );
}

[{
	"resource": "/c:/Users/tgou5/Desktop/Projets-Perso/theo-gj-portfolio/sections-main-page/projects.tsx",
	"owner": "typescript",
	"code": "2307",
	"severity": 8,
	"message": "Cannot find module '@/components/ProjectCard' or its corresponding type declarations.",
	"source": "ts",
	"startLineNumber": 3,
	"startColumn": 25,
	"endLineNumber": 3,
	"endColumn": 51,
	"modelVersionId": 3,
	"origin": "extHost1"
},{
	"resource": "/c:/Users/tgou5/Desktop/Projets-Perso/theo-gj-portfolio/sections-main-page/projects.tsx",
	"owner": "typescript",
	"code": "2307",
	"severity": 8,
	"message": "Cannot find module '@/data/projects' or its corresponding type declarations.",
	"source": "ts",
	"startLineNumber": 4,
	"startColumn": 26,
	"endLineNumber": 4,
	"endColumn": 43,
	"modelVersionId": 3,
	"origin": "extHost1"
},{
	"resource": "/c:/Users/tgou5/Desktop/Projets-Perso/theo-gj-portfolio/sections-main-page/projects.tsx",
	"owner": "typescript",
	"code": "7006",
	"severity": 8,
	"message": "Parameter 'project' implicitly has an 'any' type.",
	"source": "ts",
	"startLineNumber": 12,
	"startColumn": 32,
	"endLineNumber": 12,
	"endColumn": 39,
	"modelVersionId": 3,
	"origin": "extHost1"
}]