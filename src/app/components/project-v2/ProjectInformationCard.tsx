"use client";

import type { Lang } from "../../LanguageContext";
import type { LocalizedString } from "../../data/projects-v2/types";
import { t } from "../../data/projects-v2/registry";

type ProjectInformationCardProps = {
  label: LocalizedString;
  text: LocalizedString;
  lang: Lang;
  needsReview?: boolean;
  /** Portefølje på /prosjekter — litt mer innvendig luft, ingen tvunget høyde. */
  variant?: "default" | "portfolio";
};

export default function ProjectInformationCard({
  label,
  text,
  lang,
  needsReview,
  variant = "default",
}: ProjectInformationCardProps) {
  const body = t(text, lang).trim();
  if (!body) return null;
  const portfolio = variant === "portfolio";

  return (
    <div
      className={`${portfolio ? "p-3.5 md:p-4" : "p-3"} bg-slate-950/40 rounded-lg border border-slate-800/80 min-w-0 ${
        portfolio ? "h-fit" : "h-full flex flex-col"
      }`}
    >
      <h3
        className={`text-[10px] font-black uppercase tracking-widest text-indigo-400 ${
          portfolio ? "mb-2" : "mb-1.5"
        }`}
      >
        {t(label, lang)}
        {needsReview && (
          <span className="ml-1.5 text-amber-500/80 normal-case tracking-normal font-medium" title="Redaksjonell gjennomgang">
            *
          </span>
        )}
      </h3>
      <p
        className={`text-sm font-light leading-relaxed ${portfolio ? "text-slate-300" : "text-slate-400 flex-1"}`}
      >
        {body}
      </p>
    </div>
  );
}
