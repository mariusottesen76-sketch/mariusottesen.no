"use client";

import type { ReactNode } from "react";
import type { Lang } from "../../LanguageContext";
import { sectionTitleClass } from "../../lib/typography";

type ProjectCategorySectionProps = {
  id: string;
  headingId: string;
  title: string;
  description: string;
  lang: Lang;
  children: ReactNode;
  isFirst?: boolean;
};

export default function ProjectCategorySection({
  id,
  headingId,
  title,
  description,
  lang,
  children,
  isFirst = false,
}: ProjectCategorySectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`scroll-mt-24 min-w-0 ${isFirst ? "mt-2" : "mt-10 pt-2 border-t border-slate-800/40"}`}
    >
      <div className="mb-5 pl-3 sm:pl-4 border-l-2 border-indigo-500/70 bg-slate-900/35 rounded-r-xl py-3 pr-3 sm:pr-4">
        <p className="text-[10px] font-mono uppercase tracking-widest font-bold text-indigo-400/80 mb-1.5 leading-none">
          {lang === "no" ? "Porteføljegruppe" : "Portfolio group"}
        </p>
        <h2 id={headingId} className={`${sectionTitleClass} text-lg md:text-xl`}>
          {title}
        </h2>
        <p className="text-sm text-slate-400 leading-snug font-light mt-1.5 max-w-3xl">{description}</p>
      </div>
      <div className="space-y-6 min-w-0">{children}</div>
    </section>
  );
}
