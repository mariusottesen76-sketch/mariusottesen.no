"use client";

import type { Lang } from "../../LanguageContext";
import type { StrategicPlatformGovernanceScenarios } from "../../data/strategic-platform-projects/types";
import { t } from "../../data/strategic-platform-projects";
import { cardTitleClass } from "../../lib/typography";

type GovernanceScenariosSectionProps = {
  data: StrategicPlatformGovernanceScenarios;
  lang: Lang;
};

/** Illustrative styringscenarioer — kompakte kort med etiketter. */
export default function GovernanceScenariosSection({ data, lang }: GovernanceScenariosSectionProps) {
  return (
    <section aria-labelledby="plattform-scenarioer" className="mb-10">
      <h2 id="plattform-scenarioer" className={`${cardTitleClass} mb-4 text-lg`}>
        {t(data.heading, lang)}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-4">
        {data.scenarios.map((scenario) => (
          <article
            key={scenario.heading.no}
            className="p-4 bg-slate-900/40 rounded-xl border border-slate-800 space-y-2.5 min-w-0"
          >
            <h3 className={cardTitleClass}>{t(scenario.heading, lang)}</h3>
            <dl className="space-y-2">
              {scenario.fields.map((field) => (
                <div key={field.label.no} className="min-w-0">
                  <dt className="text-[10px] font-black uppercase tracking-widest text-indigo-400/90 mb-0.5">
                    {t(field.label, lang)}
                  </dt>
                  <dd className="text-sm text-slate-400 font-light leading-relaxed">{t(field.value, lang)}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <p className="text-xs text-slate-500 font-light italic">{t(data.disclaimer, lang)}</p>
    </section>
  );
}
