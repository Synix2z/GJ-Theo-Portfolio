import type { Metadata } from "next";
import { Syne, Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Théo Goujon - Portfolio",
  description:
    "Portfolio de Théo Goujon, étudiant en développement web. Découvrez mes projets et mon parcours.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${syne.variable} ${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}