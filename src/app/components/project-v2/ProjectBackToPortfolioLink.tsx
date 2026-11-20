"use client";

import { ChevronLeft } from "lucide-react";
import LocaleLink from "../LocaleLink";
import { useLanguage } from "../../LanguageContext";
import { getTranslation } from "../../data/translations";
/**
 * Felles tilbake-lenke øverst på prosjektdetaljsider — alltid til porteføljehub (NO/EN).
 */
export default function ProjectBackToPortfolioLink() {
  const { lang } = useLanguage();
  const label = getTranslation("prosjekter.back", lang);

  return (
    <LocaleLink
      href="/prosjekter"
      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-300 transition-colors mb-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 rounded-sm"
      aria-label={label}
    >
      <ChevronLeft size={14} aria-hidden="true" />
      {label}
    </LocaleLink>
  );
}