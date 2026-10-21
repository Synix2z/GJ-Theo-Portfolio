"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = { images: string[]; title: string };

export default function ProjectCarousel({ images, title }: Props) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const target = (i + images.length) % images.length;
    el.scrollTo({ left: target * el.clientWidth, behavior: "smooth" });
  };

  const arrow =
    "absolute top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-header-footer-bg text-xl text-white transition hover:bg-accent-text hover:text-header-footer-bg";

  return (
    <div className="relative">
      <div
        ref={track}
        onScroll={(e) => {
          const el = e.currentTarget;
          setIndex(Math.round(el.scrollLeft / el.clientWidth));
        }}
        className="flex snap-x snap-mandatory overflow-x-auto rounded-xl border border-white/10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="relative aspect-video w-full shrink-0 snap-center"
          >
            <Image
              src={src}
              alt={`${title} - image ${i + 1}`}
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              priority={i === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Image précédente"
            className={`${arrow} left-3`}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Image suivante"
            className={`${arrow} right-3`}
          >
            ›
          </button>

          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Aller à l'image ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-accent-text" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}