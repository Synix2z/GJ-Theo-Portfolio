import Title from "@/components/title";
import Separator from "@/components/separator";

type CareerItem = {
    date: string;
    title: string;
    location: string;
    bullets?: string[];
    paragraphs?: string[];
};

const career: CareerItem[] = [
    {
        date: "2024 - Présent",
        title: "IUT Informatique",
        location: "Nevers",
        bullets: [
            "2026 - 2027 / 3ème année en cours",
            "2025 - 2026 / 2nde année de BUT Informatique",
            "2024 - 2025 / 1ère année de BUT Informatique",
        ],
    },
    {
        date: "2021 - 2024",
        title: "Lycée Jules-Renard",
        location: "Nevers",
        paragraphs: [
            "Baccalauréat Général avec mention Assez Bien",
            "Spécialités : Mathématiques (1ère), Physique-Chimie (2ème), Science de l’Ingénieur (3ème)",
        ],
    },
];

export default function Career() {
    return (
        <section>
            <div className="px-8 min-[700px]:px-20 lg:px-40 xl:px-56">
                <Title text="Parcours" id="career-title" />

                <div className="mx-auto my-20 w-full max-w-4xl">
                    <div className="relative ml-2 border-l-2 border-white">
                        {career.map((item, i) => (
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
                                <p className="mt-1 text-sm text-violet-400">{item.location}</p>

                                {item.bullets && (
                                    <ul className="mt-3 list-disc space-y-4 pl-5 text-sm min-[700px]:text-base text-white">
                                        {item.bullets.map((b, j) => (
                                            <li key={j}>{b}</li>
                                        ))}
                                    </ul>
                                )}

                                {item.paragraphs?.map((p, j) => (
                                    <p
                                        key={j}
                                        className="mt-3 text-sm min-[700px]:text-base text-white"
                                    >
                                        {p}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Separator />
        </section>
    );
}