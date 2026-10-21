import type { ProjectType } from "@/data/projects";

const config: Record<ProjectType,{ label: string; classes: string; dot: string }> = {
  personnel: {
    label: "Projet personnel",
    classes: "border-sky-400/30 text-sky-300 bg-sky-400/5",
    dot: "bg-sky-400",
  },
  universitaire: {
    label: "Projet universitaire",
    classes: "border-emerald-400/30 text-emerald-300 bg-emerald-400/5",
    dot: "bg-emerald-400",
  },
};

export default function ProjectTypeBadge({ type }: {
  type: ProjectType;
}) {
  const { label, classes, dot } = config[type];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${classes}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {label}
    </span>
  );
}
