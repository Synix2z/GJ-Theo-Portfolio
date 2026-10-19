import Separator from "@/components/separator";
import Button from "@/components/button";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <main>
      <section className="my-20 flex items-center px-8 sm:px-16 md:px-24 lg:px-8">
        <div className="mx-auto w-full max-w-3xl text-left">
          <h1 className="font-body text-h1 font-bold text-white">Théo Goujon</h1>
          <h2 className="font-body text-h2 text-accent-text">
            Étudiant en BUT Informatique - IUT de Nevers
          </h2>
          <p className="mt-2 max-w-xl font-body text-body text-white">
            Aujourd&apos;hui en 2ème année de BUT Informatique, je développe des
            applications web full-stack.
          </p>

          <div className="mt-6 flex flex-wrap gap-6">
            <Button onClick={() => scrollTo("projects-title")}>Voir mes projets</Button>
            <Button onClick={() => scrollTo("contact-title")}>Me contacter</Button>
          </div>
        </div>
      </section>

      <Separator />
    </main>
  );
}