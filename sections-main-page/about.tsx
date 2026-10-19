import Image from "next/image";

import Title from "@/components/title";
import Separator from "@/components/separator";

export default function About() {
    return (
        <section>
            <Title text="À propos" id="about-title" />

            <div className="my-20 flex items-center px-8 sm:px-16 md:px-24 lg:px-8">
                <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 text-left md:flex-row md:gap-16">
                    <Image
                        src="/images/Lewis_Hamilton.png"
                        alt="Théo Goujon"
                        width={300}
                        height={300}
                        className="h-48 w-48 shrink-0 rounded-full object-cover object-[90%_50%] md:h-64 md:w-64"
                    />

                    <div>
                        <p className="mt-2 font-body text-body text-accent-text">
                            Développeur informatique en formation · Nevers
                        </p>

                        <div className="mt-4 flex flex-col gap-4 font-body text-body text-white">
                            <p>
                                Passionné par l&apos;informatique, je suis aujourd&apos;hui en
                                3ème année de BUT Informatique à Nevers. J&apos;ai une
                                préférence pour le front-end, concevoir ce que l&apos;utilisateur
                                voit et avec lequel il interagit pour offrir une bonne
                                expérience utilisateur.
                            </p>
                            <p>
                                En dehors du développement, je suis passionné par les jeux vidéo
                                de type stratégie, l&apos;Histoire, ainsi que le sport
                                automobile (F1, Moto GP).
                            </p>
                            <p>
                                Je suis actuellement à la recherche d&apos;un stage en 2027 et
                                je suis ouvert à toute opportunité qui correspond à mon profil.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Separator />
        </section>
    );
}