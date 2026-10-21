export default function LegalMentions() {
  return (
    <main className="mx-auto w-4/5 max-w-3xl py-12 text-white">
      <h1 className="text-center text-3xl font-bold md:text-4xl font-text-title">Mentions légales</h1>

      <h2 className="mt-12 mb-4 border-b border-white pb-2 text-xl font-semibold text-accent-text font-text-title">Site web</h2>
      <p className="opacity-80">
        Ce site est un portfolio personnel créé et maintenu par <span className="font-semibold text-accent-text">Théo Goujon</span>. Il n'est affilié à aucune entreprise ni aucune organisation.
      </p>

      <h2 className="mt-12 mb-4 border-b border-white pb-2 text-xl font-semibold text-accent-text font-text-title">Hébergement</h2>
      <p className="opacity-80">
        Ce site est hébergé par <span className="font-semibold text-accent-text">Vercel Inc.</span>, situé au 440 N. Barranca Ave Number 4133 Covina California 91723, USA. Pour plus d'informations, rendez-vous sur <span className="font-semibold text-accent-text">vercel.com</span>.
      </p>

      <h2 className="mt-12 mb-4 border-b border-white pb-2 text-xl font-semibold text-accent-text font-text-title">Propriété intellectuelle</h2>
      <p className="opacity-80">Tout le contenu de ce site (code, design, textes) a été créé par Théo Goujon.</p>
    </main>
  )
}