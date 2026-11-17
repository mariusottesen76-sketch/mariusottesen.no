"use client";

import type { Lang } from "../../LanguageContext";
import { getTranslation } from "../../data/translations";
import { sectionTitleClass } from "../../lib/typography";
import LocaleLink from "../LocaleLink";
import VerdisKiftetTitle from "../bok/VerdisKiftetTitle";

const cardClass =
  "p-4 md:p-5 bg-slate-900/40 rounded-xl border border-slate-800 space-y-2 min-w-0 hover:border-indigo-500/30 transition-colors";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

export default function ProsjektFagligFordypning({ lang }: { lang: Lang }) {
  const tr = (key: string) => getTranslation(key, lang);

  return (
    <section
      aria-labelledby="prosjekter-fordypning-heading"
      className="scroll-mt-24 mt-10 pt-6 border-t border-slate-800/60 min-w-0"
    >
      <h2 id="prosjekter-fordypning-heading" className={`${sectionTitleClass} mb-4`}>
        {tr("prosjekter.fordypning.title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <LocaleLink href="/faginnlegg" className={cardClass}>
          <h3 className="text-base font-black text-indigo-400 italic tracking-tight">
            {tr("prosjekter.fordypning.innsikt.title")}
          </h3>
          <p className="text-sm text-slate-400 leading-snug font-light">{tr("prosjekter.fordypning.innsikt.desc")}</p>
          <span className={`${linkClass} text-sm font-medium inline-block`}>
            {tr("prosjekter.fordypning.innsikt.cta")}
          </span>
        </LocaleLink>
        <LocaleLink href="/bok" className={cardClass}>
          <h3 className="text-base font-black text-indigo-400 italic tracking-tight">
            <VerdisKiftetTitle />
            <span className="text-slate-300 font-bold not-italic"> – {tr("prosjekter.fordypning.bok.subtitle")}</span>
          </h3>
          <p className="text-sm text-slate-400 leading-snug font-light">{tr("prosjekter.fordypning.bok.desc")}</p>
          <span className={`${linkClass} text-sm font-medium inline-block`}>{tr("prosjekter.fordypning.bok.cta")}</span>
        </LocaleLink>
      </div>
    </section>
  );
}