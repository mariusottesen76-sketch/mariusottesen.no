"use client";

import type { Lang } from "../../LanguageContext";
import type { ProjectApplicationGroup } from "../../data/projects-v2/types";
import { t } from "../../data/projects-v2/registry";
import { cardTitleClass } from "../../lib/typography";

type ProjectApplicationGroupsProps = {
  groups: ProjectApplicationGroup[];
  lang: Lang;
  heading?: { no: string; en: string };
};

/** Viser godkjente demo-/anvendelseseksempler — skjules når grupper er tomme. */
export default function ProjectApplicationGroups({
  groups,
  lang,
  heading = {
    no: "Anvendelse, demo eller eksempler",
    en: "Application, demo or examples",
  },
}: ProjectApplicationGroupsProps) {
  const visible = groups.filter((g) => g.items.length > 0);
  if (visible.length === 0) return null;

  return (
    <section aria-labelledby="prosjekt-anvendelse" className="mb-10">
      <h2 id="prosjekt-anvendelse" className={`${cardTitleClass} mb-4 text-lg`}>
        {t(heading, lang)}
      </h2>
      <div className="space-y-4">
        {visible.map((group) => (
          <div key={group.heading.no} className="p-4 bg-slate-900/40 rounded-xl border border-slate-800 space-y-3 min-w-0">
            <h3 className={cardTitleClass}>{t(group.heading, lang)}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item.no}
                  className="text-xs text-slate-400 font-light leading-relaxed px-2.5 py-1 rounded-full border border-slate-700/80 bg-slate-950/40"
                >
                  {t(item, lang)}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
