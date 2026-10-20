"use client";

import { useState } from "react";

type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  const [active, setActive] = useState(false);

  const release = () => setTimeout(() => setActive(false), 300);

  return (
    <span
      onTouchStart={() => setActive(true)}
      onTouchEnd={release}
      onTouchCancel={release}
      className={`
        inline-flex items-center justify-center
        rounded-lg border px-8 py-2
        text-sm min-[700px]:text-base
        cursor-default select-none
        transition-all duration-200 ease-out
        hover:scale-105
        hover:border-violet-500/60 hover:bg-violet-500/20 hover:text-white
        ${
          active
            ? "scale-105 border-violet-500/60 bg-violet-500/20 text-white"
            : "border-white/10 bg-[#111827] text-white/90"
        }
      `}
    >
      {label}
    </span>
  );
}