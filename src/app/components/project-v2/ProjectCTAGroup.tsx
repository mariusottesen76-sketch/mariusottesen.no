"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Lang } from "../../LanguageContext";
import type { LocalizedString } from "../../data/projects-v2/types";
import { t } from "../../data/projects-v2/registry";
import type { ProjectCtaAction, ProjectCtaConfig } from "../../data/projects-v2/cta";
import { PROJECT_CTA_PRIMARY_CLASS, PROJECT_CTA_SECONDARY_CLASS } from "../../lib/project-v2-cta-styles";

type ProjectCTAGroupProps = {
  lang: Lang;
  config: ProjectCtaConfig;
};

function CtaButton({
  href,
  label,
  lang,
  external,
  variant,
}: {
  href: string;
  label: LocalizedString;
  lang: Lang;
  external?: boolean;
  variant: "primary" | "secondary";
}) {
  const className = variant === "primary" ? PROJECT_CTA_PRIMARY_CLASS : PROJECT_CTA_SECONDARY_CLASS;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {t(label, lang)}
        <ChevronRight size={16} aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {t(label, lang)}
      <ChevronRight size={16} aria-hidden="true" />
    </Link>
  );
}

export default function ProjectCTAGroup({ lang, config }: ProjectCTAGroupProps) {
  return (
    <div className="space-y-3 min-w-0">
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-stretch sm:items-center">
        <CtaButton href={config.primary.href} label={config.primary.label} lang={lang} external={config.primary.external} variant="primary" />
        {config.secondary && (
          <CtaButton href={config.secondary.href} label={config.secondary.label} lang={lang} external={config.secondary.external} variant="secondary" />
        )}
      </div>
      {config.note && (
        <p className="text-xs text-slate-500 font-light leading-relaxed">{t(config.note, lang)}</p>
      )}
    </div>
  );
}
