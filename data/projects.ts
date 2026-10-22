export type ProjectType = "personnel" | "universitaire";
export type ProjectAccent = "violet" | "green" | "red" | "blue" | "orange" | "pink" | "cyan" | "yellow";
export const DEFAULT_IMAGE = "/images-projets/default.png";

export interface Project {
    slug: string;
    title: string;
    type: ProjectType;
    accent: ProjectAccent;
    shortDescription: string;
    description: string;
    image?: string; // image card
    images?: string[]; // images carrousel
    languages: string[];
    duration: string;
    team: string;
    role: string;
    tools: string[];
    features: string[];
    links?: { demo?: string; github?: string };
}

export const projects: Project[] = [
    {
        slug: "portfolio",
        title: "Portfolio personnel",
        type: "personnel",
        accent: "violet",
        shortDescription: "Mon portfolio pour me présenter et exposer mes projets.",
        description:
            "Portfolio personnel conçu pour me présenter et regrouper mes projets universitaires et personnels. Le site repose sur une architecture en composants réutilisables, un design system cohérent (polices, couleurs et variables centralisées) et des maquettes réalisées au préalable sur Figma. Chaque projet dispose de sa propre page détaillée avec carrousel d'images si besoin.",
        image: "/images-projets/Portfolio/cover.png",
        images: [
            "/images-projets/Portfolio/cover.png",
            "/images-projets/Portfolio/CV.png",
            "/images-projets/Portfolio/Competences&Projets.png",
            "/images-projets/Portfolio/DetailsProjet.png",
            "/images-projets/Portfolio/Contact.png",
            "/images-projets/Portfolio/MentionsLegales.png",
            "/images-projets/Portfolio/Maquettes.png"
        ],
        languages: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
        duration: "Depuis octobre 2026 (évolutif)",
        team: "Projet solo",
        role: "Conception, design et développement",
        tools: ["VS Code", "Figma", "Git", "GitHub", "Resend", "Vercel"],
        features: [
            "Maquettes Figma et design system (Syne, Space Grotesk, DM Sans, palette violette)",
            "Architecture en composants (ProjectCard, ProjectTypeBadge, ProjectCarousel, etc...)",
            "Pages projets dynamiques par slug avec carrousel d'images",
            "Tags distinguant projets personnels et universitaires",
            "Pages Mentions légales et Tech Stack",
            "Formulaire de contact",
            "Site responsive et déployé sur Vercel",
        ],
        links: { 
            demo: "https://gj-theo-portfolio.vercel.app/",
            github: "https://github.com/Synix2z/GJ-Theo-Portfolio"
        },
    },
    {
        slug: "rok-portfolio",
        title: "Site Rise of Kingdoms",
        type: "personnel",
        accent: "orange",
        shortDescription: "Site vitrine dynamique de mon profil de joueur Rise of Kingdoms.",
        description:
            "Site web personnel pensé pour présenter mon profil de joueur sur Rise of Kingdoms pour remplacer de simples captures d'écran. Il propose des statistiques animées, une frise chronologique, mes objectifs actuels ainsi qu'une page d'outils avec calculatrice, le tout sur un design system cohérent avec une palette de violet.",
        image: "/images-projets/ROK-Portfolio/cover.png",
        images: [
            "/images-projets/ROK-Portfolio/cover.png",
            "/images-projets/ROK-Portfolio/Commandants.png",
            "/images-projets/ROK-Portfolio/Timeline.png",
            "/images-projets/ROK-Portfolio/Stats.png",
            "/images-projets/ROK-Portfolio/Calculatrice.png"
        ],
        languages: ["TypeScript", "JavaScript", "React", "CSS Module"],
        duration: "Depuis juin 2026 (évolutif)",
        team: "Projet solo",
        role: "Conception, design et développement",
        tools: ["Vite", "React Router", "Lucide React", "VS Code", "Git", "GitHub", "Vercel", "GIMP"],
        features: [
            "Design system centralisé (variable.css avec palette de violet)",
            "Compteurs de statistiques, barres de progression et cartes de ressources",
            "Section des objectifs actuels",
            "Grilles pour afficher l'équipement",
            "Badges d'inscriptions avec variantes de rareté",
            "Frise chronologique",
            "Page Outils avec calculatrice",
        ],
        links: { 
            demo: "https://synix2z-rok-profile.vercel.app/",
            github: "https://github.com/Synix2z/ROK-Portfolio"
        },
    },
    {
        slug: "sae-401-bidstars",
        title: "SAE 4.01 - Site Web Bidstars",
        type: "universitaire",
        accent: "yellow",
        shortDescription: "Site d'enchères en ligne autour d'objets de célébrités.",
        description:
            "Projet récupéré d'une autre équipe dans le cadre de la SAE 3.1. L'objectif était d'améliorer et enrichir un site d'enchères en ligne permettant aux utilisateurs d'enchérir sur des objets ayant appartenu à des célébrités. Mon rôle s'est concentré sur la refonte complète du CSS et de l'interface visuelle.",
        image: "",
        images: [
            
        ],
        languages: ["PHP", "HTML", "CSS Module", "JavaScript"],
        duration: "2 mois et demi",
        team: "4 étudiants",
        role: "Frontend / CSS",
        tools: ["VS Code", "Trello", "Git", "Figma", "Canva"],
        features: [
            "Création de la charte graphique et du fichier variables.css centralisé",
            "Refonte des pages : Buy.php, Page Produit, Footer, Sellproduct, Favoris, Admin",
            "Système de boutons globaux (.main_btn, .searchbar_btn)",
            "Style des modales (connexion, inscription, enchère)",
            "Pages d'erreur typographiées (404, 500)",
            "Diagnostic et correction du problème de chargement CSS lié au MVC",
        ],
    },

    // À compléter plus tard une fois Mahara redisponible

];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getProjectImages = (p: Project) => p.images?.length ? p.images : [p.image || DEFAULT_IMAGE];