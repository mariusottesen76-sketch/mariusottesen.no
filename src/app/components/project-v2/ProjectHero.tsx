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
  aspectRatio?: string;
  maxWidthPx?: number;
  maxHeightPx?: number;
  frameless?: boolean;
};

const framedClass =
  "relative bg-slate-900 overflow-hidden rounded-xl border border-slate-700/60 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none";
const framelessClass =
  "relative overflow-hidden focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none";

/** Hero-banner på detaljsider — standard 3:1, valgfritt vertikalt format. */
export default function ProjectHero({
  src,
  alt,
  lang,
  onImageClick,
  priority = true,
  objectPosition = PROJECT_DETAIL_HERO_DEFAULT_OBJECT_POSITION,
  fit = "cover",
  aspectRatio: aspectRatioProp,
  maxWidthPx: maxWidthPxProp,
  maxHeightPx: maxHeightPxProp,
  frameless = false,
}: ProjectHeroProps) {
  const aspectRatio = aspectRatioProp ?? PROJECT_DETAIL_HERO.aspectRatio;
  const maxWidthPx = maxWidthPxProp ?? PROJECT_DETAIL_HERO.maxWidthPx;
  const maxHeightPx = maxHeightPxProp ?? PROJECT_DETAIL_HERO.maxHeightPx;
  const objectFitClass = fit === "contain" ? "object-contain" : "object-cover";
  const frameClass = frameless ? framelessClass : framedClass;

  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={objectFitClass}
      style={{ objectPosition }}
      sizes={`(max-width: 768px) 100vw, ${maxWidthPx}px`}
    />
  );

  const frameStyle = {
    aspectRatio,
    maxWidth: `${maxWidthPx}px`,
    maxHeight: `${maxHeightPx}px`,
    width: "100%",
  };

  const frame = onImageClick ? (
    <button
      type="button"
      onClick={() => onImageClick(src, alt)}
      className={`${frameClass} cursor-zoom-in group mx-auto block`}
      style={frameStyle}
      aria-label={lang === "no" ? "Åpne hovedbilde i større format" : "Open main image in larger format"}
    >
      <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.01]">{image}</div>
    </button>
  ) : (
    <div className={`${frameClass} mx-auto`} style={frameStyle}>
      {image}
    </div>
  );

  return frame;
}
