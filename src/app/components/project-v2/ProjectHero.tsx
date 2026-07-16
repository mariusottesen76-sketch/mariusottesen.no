"use client";

import Image from "next/image";
import type { Lang } from "../../LanguageContext";
import {
  PROJECT_DETAIL_HERO,
  PROJECT_DETAIL_HERO_DEFAULT_OBJECT_POSITION,
  type DetailHeroFit,
} from "../../lib/project-v2-image";

type ProjectHeroProps = {
  src: string;
  alt: string;
  lang: Lang;
  onImageClick?: (src: string, alt: string) => void;
  priority?: boolean;
  objectPosition?: string;
  fit?: DetailHeroFit;
};

const frameClass =
  "w-full max-w-[1200px] relative bg-slate-900 overflow-hidden rounded-xl border border-slate-700/60 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none";

/** Standardisert 3:1 hero-banner på detaljsider — maks 1200 × 400 px, object-fit cover/contain. */
export default function ProjectHero({
  src,
  alt,
  lang,
  onImageClick,
  priority = true,
  objectPosition = PROJECT_DETAIL_HERO_DEFAULT_OBJECT_POSITION,
  fit = "cover",
}: ProjectHeroProps) {
  const objectFitClass = fit === "contain" ? "object-contain" : "object-cover";

  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={objectFitClass}
      style={{ objectPosition }}
      sizes="(max-width: 768px) 100vw, 1200px"
    />
  );

  const frameStyle = {
    aspectRatio: PROJECT_DETAIL_HERO.aspectRatio,
    maxHeight: `${PROJECT_DETAIL_HERO.maxHeightPx}px`,
  };

  if (onImageClick) {
    return (
      <button
        type="button"
        onClick={() => onImageClick(src, alt)}
        className={`${frameClass} cursor-zoom-in group`}
        style={frameStyle}
        aria-label={lang === "no" ? "Åpne hovedbilde i større format" : "Open main image in larger format"}
      >
        <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.01]">{image}</div>
      </button>
    );
  }

  return (
    <div className={frameClass} style={frameStyle}>
      {image}
    </div>
  );
}
