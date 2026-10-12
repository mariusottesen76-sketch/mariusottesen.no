"use client";

import Link from "next/link";
import type { Lang } from "../../LanguageContext";
import type { ProjectFagPerspektivLink } from "../../data/projects-v2/types";
import { getTranslation } from "../../data/translations";
import { t } from "../../data/projects-v2/registry";
import { blockTitleClass } from "../../lib/typography";
import {
  getProjectRelevantVidereLinks,
  isProjectRelevantExternal,
  resolveProjectRelevantHref,
} from "../../lib/project-relevant-videre";
import type { ProjectV2Record } from "../../data/projects-v2/types";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

type ProjectRelevantVidereProps = {
  project: Pick<ProjectV2Record, "id" | "fagPerspektivLink" | "fagPerspektivLinks">;
  lang: Lang;
  /** Litt kompaktere på prosjektkort (/prosjekter). */
  variant?: "overview" | "detail";
};

function RelevantLink({ link, lang }: { link: ProjectFagPerspektivLink; lang: Lang }) {
  const external = isProjectRelevantExternal(link);
  return (
    <Link
      href={resolveProjectRelevantHref(link, lang)}
      className={`${linkClass} text-sm font-medium`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {t(link.label, lang)}
    </Link>
  );
}

export default function ProjectRelevantVidere({ project, lang, variant = "detail" }: ProjectRelevantVidereProps) {
  const links = getProjectRelevantVidereLinks(project, variant);
  if (links.length === 0) return null;

  const headingId =
    variant === "overview" ? `prosjekt-relevant-videre-${project.id}` : `prosjekt-relevant-videre-detail-${project.id}`;
  const sectionClass =
    variant === "overview"
      ? "p-4 bg-slate-900/40 rounded-2xl border border-slate-800 space-y-3"
      : "mb-10 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 space-y-4";

  return (
    <section aria-labelledby={headingId} className={sectionClass}>
      <h2 id={headingId} className={blockTitleClass}>
        {getTranslation("fag.artikkel.relevant", lang)}
      </h2>
      <ul className="space-y-2 list-none p-0 m-0">
        {links.map((link) => (
          <li key={link.href}>
            <RelevantLink link={link} lang={lang} />
          </li>
        ))}
      </ul>
    </section>
  );
}
