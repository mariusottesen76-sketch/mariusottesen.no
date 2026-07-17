"use client";

import { ChevronRight } from "lucide-react";
import type { Lang } from "../../LanguageContext";
import type { ProjectCategory } from "../../data/projects-v2/types";
import type { StrategicPlatformModule } from "../../data/strategic-platform-projects/types";
import { t } from "../../data/strategic-platform-projects/i18n";
import { getModuleBuiltStatusLabel } from "../../lib/project-module-status-label";
import { cardTitleClass } from "../../lib/typography";

type ProjectModuleGridProps = {
  modules: StrategicPlatformModule[];
  lang: Lang;
  category?: ProjectCategory;
  slug?: string;
};

export default function ProjectModuleGrid({ modules, lang, category, slug }: ProjectModuleGridProps) {
  const builtLabel = getModuleBuiltStatusLabel(lang, category, slug);
  const hasExtended = modules.some((modul) => modul.fokusomrader?.length || modul.relevantFor);

  return (
    <div
      className={`grid gap-3 ${
        hasExtended ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {modules.map((modul) => (
        <article
          key={modul.tittel.no}
          className="p-4 bg-slate-900/40 rounded-xl border border-slate-800 space-y-3 min-w-0"
        >
          <div className="flex flex-wrap items-center gap-2">
            <h3 className={cardTitleClass}>{t(modul.tittel, lang)}</h3>
            <span
              className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                modul.bygget
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                  : "border-slate-600/50 bg-slate-800/50 text-slate-500"
              }`}
            >
              {modul.bygget ? builtLabel : lang === "no" ? "Fremtidig" : "Future"}
            </span>
          </div>
          <p className="text-sm text-slate-400 font-light leading-relaxed">{t(modul.beskrivelse, lang)}</p>
          {modul.fokusomrader && modul.fokusomrader.length > 0 && (
            <ul className="space-y-1.5">
              {modul.fokusomrader.map((omrade) => (
                <li
                  key={omrade.no}
                  className="flex items-start gap-1.5 text-xs text-slate-500 font-light leading-relaxed"
                >
                  <ChevronRight size={12} className="text-indigo-400/80 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{t(omrade, lang)}</span>
                </li>
              ))}
            </ul>
          )}
          {modul.relevantFor && (
            <p className="text-xs text-slate-500 font-light leading-relaxed italic border-t border-slate-800/80 pt-3">
              {t(modul.relevantFor, lang)}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
