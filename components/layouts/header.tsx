
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import Button from "@/components/button";
import { ArrowDownToLine } from "lucide-react";

const navigation = [
  { label: "À propos", id: "about-title" },
  { label: "Expérience", id: "experience-title" },
  { label: "Compétences", id: "skills-title" },
  { label: "Projet", id: "projects-title" },
  { label: "Parcours", id: "career-title" },
  { label: "Contact", id: "contact-title" },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function scrollToSection(id: string) {
    if (pathname !== "/") {
      router.push(`/#${id}`);
      setOpen(false);
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 z-[100] flex h-[100px] w-full items-center bg-header-footer-bg px-8">
      <Link
        href="/"
        onClick={(e) => {
          setOpen(false);
          if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.replaceState(null, "", "/");
          }
        }}
        className="mr-auto font-body text-[40px] font-bold text-accent-text transition-transform duration-200 hover:scale-120 max-lg:text-[30px] max-md:text-2xl"
      >
        TG
      </Link>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="group ml-auto hidden flex-col gap-[5px] bg-transparent max-lg:flex"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls="main-nav"
      >
        <span className="h-[3px] w-8 rounded-sm bg-accent-text max-md:w-7" />
        <span className="h-[3px] w-8 rounded-sm bg-accent-text max-md:w-7" />
        <span className="h-[3px] w-8 rounded-sm bg-accent-text max-md:w-7" />
      </button>

      <nav
        id="main-nav"
        className={`
          ${open ? "flex" : "hidden"}
          absolute top-[100px] right-0 w-full flex-col items-center gap-5
          bg-header-footer-bg py-5
          lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-[30px] lg:bg-transparent lg:py-0
        `}
      >
        {navigation.map(({ label, id }) => (
          <button
            key={id}
            type="button"
            onClick={() => scrollToSection(id)}
            className="
              relative cursor-pointer border-0 bg-transparent
              pb-1 font-body text-base text-white lg:text-xl
              transition-colors hover:text-accent-text
              active:text-accent-text
              after:absolute after:bottom-0 after:left-0
              after:h-1 after:w-1/2 after:origin-left
              after:scale-x-0 after:rounded-sm
              after:bg-linear-to-r after:from-[#C084FC] after:via-[#7C4EEE] after:to-[#4F46E5]
              after:transition-transform after:duration-[250ms]
              hover:after:scale-x-100 active:after:scale-x-100
              max-md:text-lg
            "
          >
            {label}
          </button>
        ))}

        <Button onClick={() => console.log("Button clicked!")}>
          <ArrowDownToLine size={30} />
          CV
        </Button>
      </nav>
    </header>
  );
}