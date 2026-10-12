"use client";

import Link from "next/link";
import type { Lang } from "../../LanguageContext";
import type { LocalizedString } from "../../data/strategic-platform-projects/types";
import { t } from "../../data/strategic-platform-projects";
import { buildProjectContactHref, CONTACT_QUERY_TEMA } from "../../lib/project-contact-query";
import { PROJECT_CTA_PRIMARY_CLASS } from "../../lib/project-v2-cta-styles";
import { localePathFromNoPath } from "../../lib/locale-routes";

type ProjectEarlyMocContactProps = {
  lang: Lang;
  projectSlug: string;
  body: LocalizedString;
  contactPrimaryLabel: LocalizedString;
};

export default function ProjectEarlyMocContact({
  lang,
  projectSlug,
  body,
  contactPrimaryLabel,
}: ProjectEarlyMocContactProps) {
  const href = localePathFromNoPath(
    buildProjectContactHref(CONTACT_QUERY_TEMA.anvendelse, projectSlug),
    lang,
  );

  return (
    <section
      aria-labelledby="plattform-tidlig-kontakt"
      className="mb-10 p-5 md:p-6 bg-slate-900/40 rounded-2xl border border-slate-800/80"
    >
      <h2 id="plattform-tidlig-kontakt" className="sr-only">
        {lang === "no" ? "Kontakt om prosjektet" : "Contact about the project"}
      </h2>
      <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed mb-4">{t(body, lang)}</p>
      <Link href={href} className={PROJECT_CTA_PRIMARY_CLASS}>
        {t(contactPrimaryLabel, lang)}
      </Link>
    </section>
  );
}
