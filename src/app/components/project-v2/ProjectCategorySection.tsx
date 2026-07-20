"use client";

import type { ReactNode } from "react";
import { sectionTitleClass } from "../../lib/typography";

type ProjectCategorySectionProps = {
  id: string;
  headingId: string;
  title: string;
  description: string;
  children: ReactNode;
  isFirst?: boolean;
};

export default function ProjectCategorySection({
  id,
  headingId,
  title,
  description,
  children,
  isFirst = false,
}: ProjectCategorySectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`scroll-mt-24 min-w-0 ${isFirst ? "mt-5" : "mt-10 pt-1 border-t border-slate-800/40"}`}
    >
      <div className="mb-3 pl-3 sm:pl-4 border-l-2 border-indigo-500/70 bg-slate-900/35 rounded-r-xl py-2.5 pr-3 sm:pr-4">
        <h2 id={headingId} className={`${sectionTitleClass} text-lg md:text-xl mb-1.5`}>
          {title}
        </h2>
        <p className="text-sm text-slate-400 leading-snug font-light w-full min-w-0 max-w-none">{description}</p>
      </div>
      <div className="space-y-6 min-w-0">{children}</div>
    </section>
  );
}
