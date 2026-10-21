import type { ReactNode } from "react";

const strong = "font-semibold text-accent-text";

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent-text underline underline-offset-2 hover:opacity-80"
    >
      {children}
    </a>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <h2 className="mt-12 mb-4 border-b border-white pb-2 text-xl font-semibold text-accent-text font-text-title">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </>
  );
}

export default function LegalMentions() {
  return (
    <main className="mx-auto w-4/5 max-w-3xl py-12 text-white">
      <h1 className="text-center text-3xl font-bold md:text-4xl font-text-title">
        Mentions légales
      </h1>

      <Section title="Site web">
        <p>
          Ce site est un portfolio personnel créé et maintenu par{" "}
          <span className={strong}>Théo Goujon</span>. Il n'est affilié à aucune
          entreprise ni aucune organisation.
        </p>
      </Section>

      <Section title="Hébergement">
        <p>
          Ce site est hébergé par{" "}
          <ExternalLink href="https://vercel.com">Vercel Inc.</ExternalLink>,
          situé au 440 N. Barranca Ave Number 4133 Covina California 91723, USA.
        </p>
      </Section>

      <Section title="Propriété intellectuelle">
        <p>
          Le code, le design et les textes de ce site ont été créés par{" "}
          <span className={strong}>Théo Goujon</span>. Toute reproduction sans
          autorisation est interdite. Les captures d'écran présentées dans les 
          projets sont des réalisations de moi ou de mon équipe selon le projet.
        </p>
      </Section>

      <Section title="Projets universitaires">
        <p>
          Les projets identifiés comme « universitaires » ont été réalisés dans
          le cadre de ma formation. Ils sont présentés ici dans un but purement
          pédagogique et de démonstration de compétences.
        </p>
      </Section>

      <Section title="Formulaire de contact et données personnelles">
        <p>
          Le formulaire de contact collecte votre nom, votre adresse e-mail et
          votre message, uniquement afin de vous répondre. Ces données sont
          transmises via{" "}
          <ExternalLink href="https://resend.com">Resend</ExternalLink>, et ne
          sont ni revendues ni utilisées à d'autres fins.
        </p>
      </Section>

      <Section title="Crédits">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Icônes de technologies :{" "}
            <ExternalLink href="https://devicon.dev">Devicon</ExternalLink>{" "}
            (licence MIT).
          </li>
          <li>
            Icônes d'interface :{" "}
            <ExternalLink href="https://phosphoricons.com">
              Phosphor Icons
            </ExternalLink>{" "}
            (licence MIT).
          </li>
          <li>
            Photographie de Lewis Hamilton (Ferrari SF-25, Imola, 18 mai 2025) :{" "}
            <ExternalLink href="https://www.flickr.com/photos/69527563@N05/54644894252/">
              Jen Ross
            </ExternalLink>
            , via{" "}
            <ExternalLink href="https://www.flickr.com/photos/69527563@N05/54644894252/">
              Flickr
            </ExternalLink>
            , sous licence{" "}
            <ExternalLink href="https://creativecommons.org/licenses/by/4.0/">
              CC BY 4.0
            </ExternalLink>
            . Image recadrée pour l'affichage.
          </li>
        </ul>
      </Section>
    </main>
  );
}