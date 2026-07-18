"use client";

import type { Lang } from "../../LanguageContext";
import type { StrategicPlatformStep } from "../../data/strategic-platform-projects/types";
import { t } from "../../data/strategic-platform-projects/i18n";
import { cardTitleClass } from "../../lib/typography";

type NumberedStepGridProps = {
  steps: StrategicPlatformStep[];
  lang: Lang;
  className?: string;
};

/** Nummererte steg — ett nummer per steg (list-none + visuell badge, semantisk ol). */
export default function NumberedStepGrid({ steps, lang, className = "" }: NumberedStepGridProps) {
  return (
    <ol className={`list-none p-0 m-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ${className}`.trim()}>
      {steps.map((steg, index) => (
        <li key={steg.tittel.no} className="p-4 bg-slate-900/40 rounded-xl border border-slate-800 space-y-2 min-w-0">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-black"
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <h3 className={cardTitleClass}>{t(steg.tittel, lang)}</h3>
          <p className="text-slate-400 text-sm font-light leading-relaxed">{t(steg.beskrivelse, lang)}</p>
        </li>
      ))}
    </ol>
  );
}
