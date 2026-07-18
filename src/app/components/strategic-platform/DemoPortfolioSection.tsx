"use client";

import type { Lang } from "../../LanguageContext";
import type { StrategicPlatformDemoPortfolio } from "../../data/strategic-platform-projects/types";
import { t } from "../../data/strategic-platform-projects";
import { cardTitleClass } from "../../lib/typography";

type DemoPortfolioSectionProps = {
  data: StrategicPlatformDemoPortfolio;
  lang: Lang;
};

/** Demoportefølje med kategori-kort og initiativ-chips — kun detaljsider. */
export default function DemoPortfolioSection({ data, lang }: DemoPortfolioSectionProps) {
  return (
    <section aria-labelledby="plattform-demoportefolje" className="mb-10">
      <h2 id="plattform-demoportefolje" className={`${cardTitleClass} mb-3 text-lg`}>
        {t(data.heading, lang)}
      </h2>
      <p className="text-base leading-relaxed font-light text-slate-400 mb-5">{t(data.intro, lang)}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {data.categories.map((category) => (
          <div
            key={category.heading.no}
            className="p-4 bg-slate-900/40 rounded-xl border border-slate-800 space-y-3 min-w-0 flex flex-col"
          >
            <h3 className="text-[10px] font-black uppercase tracking-widest text-indigo-400 leading-snug">
              {t(category.heading, lang)}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.initiatives.map((initiative) => (
                <span
                  key={initiative.no}
                  className="text-xs text-slate-300 font-light leading-snug px-2.5 py-1 rounded-full border border-slate-700/80 bg-slate-950/50"
                >
                  {t(initiative, lang)}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-slate-500 font-light leading-relaxed mt-5 italic">{t(data.closing, lang)}</p>
      {data.disclaimer && (
        <p className="text-xs text-slate-500 font-light leading-relaxed mt-2">{t(data.disclaimer, lang)}</p>
      )}
    </section>
  );
}
