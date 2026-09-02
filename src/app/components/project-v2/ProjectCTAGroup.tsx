"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import type { Lang } from "../../LanguageContext";
import type { LocalizedString } from "../../data/projects-v2/types";
import { t } from "../../data/projects-v2/registry";
import type { ProjectCtaAction, ProjectCtaConfig } from "../../data/projects-v2/cta";
import { localePathFromNoPath } from "../../lib/locale-routes";
import {
  PROJECT_CTA_DISABLED_CLASS,
  PROJECT_CTA_PRIMARY_CLASS,
  PROJECT_CTA_SECONDARY_CLASS,
  PROJECT_CTA_TERTIARY_CLASS,
} from "../../lib/project-v2-cta-styles";

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
  variant: "primary" | "secondary" | "tertiary";
  onOpenVideo?: (payload: { src: string; poster: string; title: string }) => void;
  videoModalTitle?: string;
}) {
  const className =
    variant === "primary"
      ? action.disabled
        ? PROJECT_CTA_DISABLED_CLASS
        : PROJECT_CTA_PRIMARY_CLASS
      : variant === "secondary"
        ? action.disabled
          ? PROJECT_CTA_DISABLED_CLASS
          : PROJECT_CTA_SECONDARY_CLASS
        : PROJECT_CTA_TERTIARY_CLASS;
  const label = t(action.label, lang);
  const ariaLabel = action.ariaLabel ? t(action.ariaLabel, lang) : undefined;
  const href = action.href && !action.external && !action.opensVideoModal
    ? localePathFromNoPath(action.href, lang)
    : action.href;

  if (action.disabled) {
    return (
      <span className={className} aria-disabled="true">
        {label}
      </span>
    );
  }

  if (action.opensVideoModal && onOpenVideo) {
    return (
      <button
        type="button"
        onClick={() =>
          onOpenVideo({
            src: action.href!,
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

  if (action.external && action.href) {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={ariaLabel ?? label}
      >
        {label}
        <ExternalLink size={14} aria-hidden="true" />
      </a>
    );
  }

  if (variant === "tertiary" && href) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        <ChevronLeft size={14} aria-hidden="true" />
        {label}
      </Link>
    );
  }

  if (href) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {label}
        <ChevronRight size={16} aria-hidden="true" />
      </Link>
    );
  }

  return (
    <span className={className} aria-disabled="true">
      {label}
    </span>
  );
}

function DemoBadge({ badge, lang }: { badge: LocalizedString; lang: Lang }) {
  return (
    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">{t(badge, lang)}</p>
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
        {config.tertiary && <CtaButton action={config.tertiary} lang={lang} variant="tertiary" />}
      </div>
      {config.demoBadge && <DemoBadge badge={config.demoBadge} lang={lang} />}
      {config.note && (
        <p className="text-xs text-slate-500 font-light leading-relaxed">{t(config.note, lang)}</p>
      )}
    </div>
  );
}
