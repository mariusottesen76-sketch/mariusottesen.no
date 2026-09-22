"use client";

import { useState } from "react";
import Image from "next/image";
import type { BokProsjektLang } from "../../data/bok-prosjekt-innhold";
import { BOK_OMSLAG } from "../../data/bok-prosjekt-innhold";
import ProjectImageModal from "../project-v2/ProjectImageModal";

type OmslagVariant = keyof typeof BOK_OMSLAG;

const omslagRammeClass =
  "rounded-xl border border-slate-800/80 bg-slate-950/50 p-2 sm:p-3 shadow-lg w-full max-w-[min(100%,300px)]";

/** Viser hele omslaget med korrekt sideforhold — object-contain, ingen strekk. Klikk for forstørret visning. */
export default function BokOmslagImage({
  variant,
  lang,
  className = "",
}: {
  variant: OmslagVariant;
  lang: BokProsjektLang;
  className?: string;
}) {
  const [enlarged, setEnlarged] = useState(false);
  const asset = BOK_OMSLAG[variant];
  const enlargeLabel =
    lang === "no"
      ? `Forstør ${variant === "forside" ? "forsideomslag" : "bakomslag"}`
      : `Enlarge ${variant === "forside" ? "front cover" : "back cover"}`;
  const dialogLabel =
    lang === "no" ? "Forstørret omslagsbilde" : "Enlarged cover image";

  return (
    <>
      <figure className={`${omslagRammeClass} ${className}`.trim()}>
        <button
          type="button"
          onClick={() => setEnlarged(true)}
          className="block w-full cursor-zoom-in rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          aria-label={enlargeLabel}
        >
          <Image
            src={asset.src}
            alt={asset.alt[lang]}
            width={600}
            height={900}
            className="w-full h-auto max-h-[min(72vh,520px)] object-contain object-center mx-auto pointer-events-none"
            sizes="(max-width: 640px) 85vw, 300px"
            unoptimized
          />
        </button>
      </figure>
      {enlarged ? (
        <ProjectImageModal
          src={asset.src}
          alt={asset.alt[lang]}
          lang={lang}
          onClose={() => setEnlarged(false)}
          dialogAriaLabel={dialogLabel}
        />
      ) : null}
    </>
  );
}
