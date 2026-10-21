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
        slug: "sae-401-bidstars",
        title: "SAE 4.01 - Site Web Bidstars",
        type: "universitaire",
        accent: "yellow",
        shortDescription: "Site d'enchères en ligne autour d'objets de célébrités.",
        description:
            "Projet récupéré d'une autre équipe dans le cadre de la SAE 3.1. L'objectif était d'améliorer et enrichir un site d'enchères en ligne permettant aux utilisateurs d'enchérir sur des objets ayant appartenu à des célébrités. Mon rôle s'est concentré sur la refonte complète du CSS et de l'interface visuelle.",
        image: "/images-projets/SAE_Bidstars/cover.png",
        images: [
            "/images-projets/SAE_Bidstars/cover.png",
            "/images-projets/default.png",
        ],
        languages: ["PHP", "HTML", "CSS", "JavaScript"],
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
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getProjectImages = (p: Project) => p.images?.length ? p.images : [p.image || DEFAULT_IMAGE];