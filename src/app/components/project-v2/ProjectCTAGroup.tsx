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
  onOpenVideo?: (payload: { src: string; poster: string; title: string }) => void;
  videoModalTitle?: string;
};

function CtaButton({
  action,
  lang,
  variant,
  onOpenVideo,
  videoModalTitle,
}: {
  action: ProjectCtaAction;
  lang: Lang;
  variant: "primary" | "secondary";
  onOpenVideo?: (payload: { src: string; poster: string; title: string }) => void;
  videoModalTitle?: string;
}) {
  const className = variant === "primary" ? PROJECT_CTA_PRIMARY_CLASS : PROJECT_CTA_SECONDARY_CLASS;
  const label = t(action.label, lang);

  if (action.opensVideoModal && onOpenVideo) {
    return (
      <button
        type="button"
        onClick={() =>
          onOpenVideo({
            src: action.href,
            poster: action.videoPoster ?? "",
            title: videoModalTitle ?? label,
          })
        }
        className={className}
      >
        {label}
        <ChevronRight size={16} aria-hidden="true" />
      </button>
    );
  }

  if (action.external) {
    return (
      <a href={action.href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
        <ChevronRight size={16} aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link href={action.href} className={className}>
      {label}
      <ChevronRight size={16} aria-hidden="true" />
    </Link>
  );
}

export default function ProjectCTAGroup({ lang, config, onOpenVideo, videoModalTitle }: ProjectCTAGroupProps) {
  return (
    <div className="space-y-3 min-w-0">
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-stretch sm:items-center">
        <CtaButton
          action={config.primary}
          lang={lang}
          variant="primary"
          onOpenVideo={onOpenVideo}
          videoModalTitle={videoModalTitle}
        />
        {config.secondary && (
          <CtaButton action={config.secondary} lang={lang} variant="secondary" />
        )}
      </div>
      {config.note && (
        <p className="text-xs text-slate-500 font-light leading-relaxed">{t(config.note, lang)}</p>
      )}
    </div>
  );
}
