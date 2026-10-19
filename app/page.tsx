"use client";

import Hero from "@/sections-main-page/hero";
import About from "@/sections-main-page/about";
import Experience from "@/sections-main-page/experience";
import Skills from "@/sections-main-page/skills";
import Projects from "@/sections-main-page/projects";
import Career from "@/sections-main-page/career";
import Contact from "@/sections-main-page/contact";


function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Career/>
      <Contact/>
    </main>
  );
}