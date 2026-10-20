import Title from "@/components/title";
import Separator from "@/components/separator";
import Tag from "@/components/tag";

type ExperienceItem = {
    date: string;
    title: string;
    company: string;
    description: string;
    tags?: string[];
};

const experiences: ExperienceItem[] = [
    {
        date: "Février - Mars 2026",
        title: "Refonte complète d’un site web",
        company: "Les Prairies Gourmandes du Morvan · Millay",
        description:
            "Au cours de ces 2 mois, j’ai pu travailler en équipe avec un camarade pour faire la refonte d’un site. Initialement fait par Wordpress, nous avons recrée le site web de zéro, ajoutant également des fonctionnalités (accès employés, système de réservation, etc…). On a pu donc mettre en place une vraie démarche client, effectuant des maquettes Figma au départ pour avoir un avis de la part de notre maître de stage, tout en échangeant de manière régulière pour présenter les avancées et fixer les prochains objectifs. Je me suis pour ma part concentré sur le frontend, assurant une bonne expérience utilisateur, la responsivité des pages et la bonne intégration de nouvelles fonctionnalités.",
        tags: ["React", "Figma", "HTML", "CSS", "JavaScript"],
    },
    {
        date: "Février 2021",
        title: "Stage découverte en 3ème",
        company: "Peugeot CATAR - Nevers",
        description:
            "Le but de ce stage a été de découvrir et d’avoir une première expérience du monde professionnel durant 1 semaine. Lors de cette semaine j’ai pu découvrir les différents métiers, tel que la boutique (stockage), carrosserie, Peugeot Rapide, et la vente. Tout en exerçant de manière plus ou moins concrète.",
    },
];

export default function Experience() {
    return (
        <section>
            <div className="px-8 min-[700px]:px-20 lg:px-40 xl:px-56">
                <Title text="Expérience" id="experience-title" />

                <div className="mx-auto my-20 w-full max-w-4xl">
                    <div className="relative ml-2 border-l-2 border-white">
                        {experiences.map((item, i) => (
                            <div key={i} className="relative pl-8 pb-8 last:pb-4">
                                <span
                                    className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full ${
                                        i === 0 ? "bg-[#ff0a3c]" : "bg-[#00ff88]"
                                    }`}
                                />

                                <p className="text-xs text-white">{item.date}</p>
                                <h3 className="mt-1 text-xl min-[700px]:text-2xl text-white">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-sm text-violet-400">{item.company}</p>
                                <p className="mt-3 text-sm min-[700px]:text-base text-white">
                                    {item.description}
                                </p>

                                {item.tags && (
                                    <div className="mt-5 flex flex-wrap gap-4">
                                        {item.tags.map((tag) => (
                                            <Tag key={tag} label={tag} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Separator />
        </section>
    );
}