"use client";

import Image from "next/image";
import { PROJECT_OVERVIEW_IMAGE } from "../../lib/project-v2-image";

type ProjectOverviewImageProps = {
  src: string;
  alt: string;
  bildeHint: string;
  onImageClick: () => void;
  imageFormat?: "standard_1x3" | "legacy_other";
  backgroundSrc?: string;
};

export default function ProjectOverviewImage({
  src,
  alt,
  bildeHint,
  onImageClick,
  backgroundSrc,
}: ProjectOverviewImageProps) {
  return (
    <div className="w-full max-w-[260px] md:max-w-none md:w-[232px] shrink-0 flex flex-col items-center gap-1.5 self-start mx-auto md:mx-0">
      <button
        type="button"
        onClick={onImageClick}
        className="w-full relative bg-slate-900 overflow-hidden group cursor-zoom-in focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none rounded-lg border border-slate-700/60 flex items-center justify-center"
        style={{
          aspectRatio: PROJECT_OVERVIEW_IMAGE.aspectRatio,
          maxHeight: `${PROJECT_OVERVIEW_IMAGE.desktopHeightPx}px`,
        }}
        aria-label={bildeHint}
      >
        {backgroundSrc && (
          <Image
            src={backgroundSrc}
            alt=""
            aria-hidden="true"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 260px, 232px"
          />
        )}
        <Image
          src={src}
          alt={alt}
          width={PROJECT_OVERVIEW_IMAGE.desktopWidthPx}
          height={PROJECT_OVERVIEW_IMAGE.desktopHeightPx}
          loading="lazy"
          className="relative z-10 w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
          sizes="(max-width: 768px) 260px, 232px"
        />
      </button>
      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black text-center px-1">
        {bildeHint}
      </p>
    </div>
  );
}
