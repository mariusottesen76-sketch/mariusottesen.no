"use client";

import type { Lang } from "../../LanguageContext";
import type { LocalizedString } from "../../data/strategic-platform-projects/types";
import { t } from "../../data/strategic-platform-projects/i18n";

type ProjectStatusBadgeProps = {
  label: LocalizedString;
  lang: Lang;
};

export default function ProjectStatusBadge({ label, lang }: ProjectStatusBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-indigo-500/35 bg-indigo-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-indigo-300">
      {t(label, lang)}
    </span>
  );
}
