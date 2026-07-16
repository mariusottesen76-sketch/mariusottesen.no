"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Lang } from "../../LanguageContext";
import type { LocalizedString } from "../../data/strategic-platform-projects/types";
import { t } from "../../data/strategic-platform-projects/i18n";

type ProjectCTAProps = {
  lang: Lang;
  primaryHref: string;
  primaryLabel: LocalizedString;
  secondaryHref: string;
  secondaryLabel: LocalizedString;
  variant?: "default" | "footer";
  note?: LocalizedString;
};

export default function ProjectCTA({
  lang,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  variant = "default",
  note,
}: ProjectCTAProps) {
  const isExternal = /^https?:\/\//.test(primaryHref);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3 items-center">
        {isExternal ? (
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-black uppercase text-xs hover:bg-indigo-500 hover:text-white transition-all italic shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            {t(primaryLabel, lang)}
            <ChevronRight size={16} aria-hidden="true" />
          </a>
        ) : (
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-black uppercase text-xs hover:bg-indigo-500 hover:text-white transition-all italic shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            {t(primaryLabel, lang)}
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        )}
        <Link
          href={secondaryHref}
          className={
            variant === "footer"
              ? "inline-flex items-center gap-2 px-6 py-3 rounded-full font-black uppercase text-xs border border-slate-600/60 text-slate-400 hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-indigo-500/5 transition-all italic focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              : "inline-flex items-center gap-2 text-sm font-medium text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          }
        >
          {t(secondaryLabel, lang)}
          {variant === "footer" && <ChevronRight size={16} aria-hidden="true" />}
        </Link>
      </div>
      {note && (
        <p className="text-xs text-slate-500 font-light leading-relaxed">{t(note, lang)}</p>
      )}
    </div>
  );
}

export const strategicTeaserCtaLabels = {
  primary: {
    no: "Utforsk plattformen",
    en: "Explore the platform",
  },
  secondary: {
    no: "Ta kontakt for faglig dialog",
    en: "Get in touch for professional dialogue",
  },
} as const;

export const strategicDetailCtaLabels = {
  primary: {
    no: "Ta kontakt for faglig dialog",
    en: "Get in touch for professional dialogue",
  },
  secondary: {
    no: "Se sentrale moduler",
    en: "See core modules",
  },
  note: {
    no: "Løsningen er utviklet som konseptprototype og porteføljedemonstrasjon — ikke presentert som produksjonsklart system.",
    en: "The solution is developed as a concept prototype and portfolio demonstration — not presented as a production-ready system.",
  },
} as const;
