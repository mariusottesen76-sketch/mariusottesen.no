"use client";

import type { Lang } from "../../LanguageContext";
import type { ProjectOverviewContent } from "../../data/projects-v2/types";
import { OVERVIEW_BOX_LABELS } from "../../data/projects-v2/overview-labels";
import { t } from "../../data/projects-v2/registry";
import { sectionHeadingClass } from "../../lib/typography";

const DETAIL_HEADING = {
  development: {
    no: "Videreutvikling og skalerbarhet",
    en: "Further development and scalability",
  },
  adaptation: {
    no: "Tilpasning til virksomheter og bransjer",
    en: "Adaptation to organisations and industries",
  },
} as const;

export default function ProjectV2ScalabilityFallback({
  overview,
  lang,
}: {
  overview: ProjectOverviewContent;
  lang: Lang;
}) {
  const development = t(overview.development, lang).trim();
  const adaptation = t(overview.adaptation, lang).trim();
  if (!development && !adaptation) return null;

  return (
    <section aria-labelledby="prosjekt-v2-skalerbarhet" className="mb-10 space-y-6">
      <h2 id="prosjekt-v2-skalerbarhet" className={sectionHeadingClass}>
        {lang === "no" ? "Videreutvikling og anvendelse" : "Further development and application"}
      </h2>
      {development ? (
        <div className="p-5 bg-slate-900/40 rounded-xl border border-slate-800 space-y-2 min-w-0">
          <h3 className="text-sm font-black text-indigo-400 italic tracking-tight">
            {DETAIL_HEADING.development[lang]}
          </h3>
          <p className="text-xs font-black uppercase tracking-widest text-slate-500">
            {t(OVERVIEW_BOX_LABELS.development, lang)}
          </p>
          <p className="text-sm text-slate-400 font-light leading-relaxed">{development}</p>
        </div>
      ) : null}
      {adaptation ? (
        <div className="p-5 bg-slate-900/40 rounded-xl border border-slate-800 space-y-2 min-w-0">
          <h3 className="text-sm font-black text-indigo-400 italic tracking-tight">
            {DETAIL_HEADING.adaptation[lang]}
          </h3>
          <p className="text-xs font-black uppercase tracking-widest text-slate-500">
            {t(OVERVIEW_BOX_LABELS.adaptation, lang)}
          </p>
          <p className="text-sm text-slate-400 font-light leading-relaxed">{adaptation}</p>
        </div>
      ) : null}
    </section>
  );
}