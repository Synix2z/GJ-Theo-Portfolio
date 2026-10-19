
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-header-footer-bg">
      <div className="flex min-h-[75px] items-center justify-between gap-4 px-5 py-5 md:px-10 md:py-4 lg:px-[100px] max-md:flex-col">
        <nav className="flex flex-1 flex-col gap-2 max-md:items-center">
          <Link
            href="/legal"
            className="text-sm text-white transition-colors hover:text-accent-text active:text-accent-text lg:text-base"
          >
            Mentions légales
          </Link>

          <Link
            href="/tech-stack"
            className="text-sm text-white transition-colors hover:text-accent-text active:text-accent-text lg:text-base"
          >
            Tech Stack
          </Link>
        </nav>

        <div className="flex flex-1 flex-col items-center justify-center gap-2 text-sm text-white md:flex-row md:gap-1 md:whitespace-nowrap lg:text-base">
          <p className="flex items-center gap-1.5">
            <span className="text-2xl leading-none">©</span>
            <span>– Tous droits réservés</span>
          </p>

          <p>– Portfolio Personnel de</p>

          <p className="text-accent-text">Théo Goujon</p>
        </div>

        <div className="flex flex-1 justify-end max-md:justify-center">
          <a
            href="https://github.com/Synix2z"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mon profil GitHub"
            className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-accent-text active:text-accent-text md:h-12 md:w-12"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 md:h-10 md:w-10"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12.01 12.01 0 0 0 24 12C24 5.37 18.63 0 12 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}