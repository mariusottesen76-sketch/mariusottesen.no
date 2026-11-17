"use client";

import Image from "next/image";
import { PROJECT_OVERVIEW_IMAGE, PROJECT_PORTFOLIO_OVERVIEW_IMAGE } from "../../lib/project-v2-image";

type ProjectOverviewImageProps = {
  src: string;
  alt: string;
  bildeHint: string;
  onImageClick: () => void;
  imageFormat?: "standard_1x3" | "legacy_other";
  backgroundSrc?: string;
  /** Behold 1:3-ramme uten bilde — samme layout som øvrige prosjektkort. */
  empty?: boolean;
  /** Porteføljeoversikt på /prosjekter — 1:3 med smalere ramme (ca. 150–168 px). */
  compact?: boolean;
};

export default function ProjectOverviewImage({
  src,
  alt,
  bildeHint,
  onImageClick,
  backgroundSrc,
  empty = false,
  compact = false,
}: ProjectOverviewImageProps) {
  const spec = compact ? PROJECT_PORTFOLIO_OVERVIEW_IMAGE : PROJECT_OVERVIEW_IMAGE;
  const frameStyle = {
    aspectRatio: spec.aspectRatio,
    maxHeight: `${spec.desktopHeightPx}px`,
  };
  const frameClassName =
    "w-full relative bg-slate-900/60 overflow-hidden rounded-lg border border-slate-700/60 flex items-center justify-center";

  const imgWidth = compact ? spec.desktopWidthPx : PROJECT_OVERVIEW_IMAGE.desktopWidthPx;
  const imgHeight = compact ? spec.desktopHeightPx : PROJECT_OVERVIEW_IMAGE.desktopHeightPx;

  return (
    <div
      className={`shrink-0 flex flex-col items-center gap-1.5 self-start mx-auto md:mx-0 ${
        compact
          ? "w-full max-w-[220px] sm:max-w-[160px] md:max-w-none md:w-[190px] lg:w-[200px]"
          : "w-full max-w-[260px] md:max-w-none md:w-[232px]"
      }`}
    >
      {empty ? (
        <div
          className={`${frameClassName} px-3 py-4 text-center`}
          style={frameStyle}
          role="img"
          aria-label={alt}
        >
          <p className="text-[11px] text-slate-400 leading-snug font-light normal-case tracking-normal">
            {bildeHint}
          </p>
        </div>
      ) : (
        <button
          type="button"
          onClick={onImageClick}
          className={`${frameClassName} group cursor-zoom-in focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none`}
          style={frameStyle}
          aria-label={bildeHint}
        >
          {backgroundSrc && (
            <Image
              src={backgroundSrc}
              alt=""
              aria-hidden="true"
              fill
              className="object-cover object-center"
              sizes={compact ? "(max-width: 768px) 220px, 198px" : "(max-width: 768px) 260px, 232px"}
            />
          )}
          <Image
            src={src}
            alt={alt}
            width={imgWidth}
            height={imgHeight}
            loading="lazy"
            className="relative z-10 w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            sizes={
              compact
                ? "(max-width: 640px) 220px, (max-width: 1024px) 160px, 200px"
                : "(max-width: 768px) 260px, 232px"
            }
          />
        </button>
      )}
      {!empty ? (
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black text-center px-1">
          {bildeHint}
        </p>
      ) : (
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black text-center px-1">
          {bildeHint}
        </p>
      )}
    </div>
  );
}