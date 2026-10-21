export default function TechStack() {
  return (
    <main className="mx-auto w-4/5 max-w-3xl py-12 text-white">
      <h1 className="text-center text-3xl font-bold md:text-4xl font-text-title">Stack technique</h1>
      <p className="text-center text-accent-text">Technologies et bibliothèques utilisées pour construire ce site.</p>

      <h2 className="mt-12 mb-4 border-b border-white pb-2 text-xl font-semibold text-accent-text font-text-title">Base</h2>
      <table className="w-full text-left">
        <tbody>
          <tr><td className="w-44 py-1.5 font-semibold">Next.js</td><td className="opacity-50">Framework React & routage</td></tr>
          <tr><td className="w-44 py-1.5 font-semibold">React</td><td className="opacity-50">Bibliothèque d'interface</td></tr>
          <tr><td className="w-44 py-1.5 font-semibold">Tailwind CSS</td><td className="opacity-50">Styles utilitaires</td></tr>
        </tbody>
      </table>

      <h2 className="mt-12 mb-4 border-b border-white pb-2 text-xl font-semibold text-accent-text font-text-title">Polices</h2>
      <table className="w-full text-left">
        <tbody>
          <tr><td className="w-44 py-1.5 font-semibold">DM Sans</td><td className="opacity-50">Police du texte principal</td></tr>
          <tr><td className="w-44 py-1.5 font-semibold">Syne</td><td className="opacity-50">Police des titres</td></tr>
          <tr><td className="w-44 py-1.5 font-semibold">Space Grotesk</td><td className="opacity-50">Police des boutons & accents</td></tr>
        </tbody>
      </table>

      <h2 className="mt-12 mb-4 border-b border-white pb-2 text-xl font-semibold text-accent-text font-text-title">Outils</h2>
      <table className="w-full text-left">
        <tbody>
          <tr><td className="w-44 py-1.5 font-semibold">Git & GitHub</td><td className="opacity-50">Gestion de versions</td></tr>
          <tr><td className="w-44 py-1.5 font-semibold">VS Code</td><td className="opacity-50">Éditeur de code</td></tr>
          <tr><td className="w-44 py-1.5 font-semibold">Figma</td><td className="opacity-50">Maquettes</td></tr>
          <tr><td className="w-44 py-1.5 font-semibold">Vercel</td><td className="opacity-50">Hébergement</td></tr>
        </tbody>
      </table>
    </main>
  )
}