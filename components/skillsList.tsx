const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const skills = [
    { name: "HTML", icon: `${CDN}/html5/html5-original.svg` },
    { name: "CSS", icon: `${CDN}/css3/css3-original.svg` },
    { name: "Figma", icon: `${CDN}/figma/figma-original.svg` },
    { name: "React", icon: `${CDN}/react/react-original.svg` },
    { name: "Git", icon: `${CDN}/git/git-original.svg` },
    { name: "GitHub", icon: `${CDN}/github/github-original.svg` },
    { name: "Python", icon: `${CDN}/python/python-original.svg` },
    { name: "MySQL", icon: `${CDN}/mysql/mysql-original.svg` },
    { name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg` },
    { name: "Next.js", icon: `${CDN}/nextjs/nextjs-original.svg` },
    { name: "TailwindCSS", icon: `${CDN}/tailwindcss/tailwindcss-original.svg` },
    { name: "GIMP", icon: `${CDN}/gimp/gimp-original.svg` },
    { name: "Canva", icon: `${CDN}/canva/canva-original.svg` },
];

const REPEAT = 2;
const items = Array.from({ length: REPEAT }, () => skills).flat();

export default function SkillsList() {
    return (
        <div className="my-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="skills-list flex w-max">
                {[0, 1].map((group) => (
                    <ul
                        key={group}
                        aria-hidden={group === 1}
                        className="flex shrink-0 gap-12 pr-12"
                    >
                        {items.map((s, i) => (
                            <li
                                key={`${s.name}-${i}`}
                                className="flex h-28 w-28 shrink-0 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 transition-colors hover:border-violet-500/50 hover:bg-[#1E1A3A]"
                            >
                                <img src={s.icon} alt={s.name} className="h-12 w-12" />
                                <span className="font-button text-sm text-main-text">{s.name}</span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
}