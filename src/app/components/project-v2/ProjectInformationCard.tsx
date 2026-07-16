"use client";

import type { Lang } from "../../LanguageContext";
import type { LocalizedString } from "../../data/projects-v2/types";
import { t } from "../../data/projects-v2/registry";

type ProjectInformationCardProps = {
  label: LocalizedString;
  text: LocalizedString;
  lang: Lang;
  needsReview?: boolean;
};

export default function ProjectInformationCard({ label, text, lang, needsReview }: ProjectInformationCardProps) {
  return (
    <div className="p-3 bg-slate-950/40 rounded-lg border border-slate-800/80 min-w-0 h-full flex flex-col">
      <h3 className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1.5">
        {t(label, lang)}
        {needsReview && (
          <span className="ml-1.5 text-amber-500/80 normal-case tracking-normal font-medium" title="Redaksjonell gjennomgang">
            *
          </span>
        )}
      </h3>
      <p className="text-sm text-slate-400 font-light leading-relaxed flex-1">{t(text, lang)}</p>
    </div>
  );
}
