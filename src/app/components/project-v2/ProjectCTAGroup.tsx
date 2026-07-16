"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Lang } from "../../LanguageContext";
import type { LocalizedString } from "../../data/projects-v2/types";
import { t } from "../../data/projects-v2/registry";
import type { ProjectCtaConfig } from "../../data/projects-v2/cta";

type ProjectCTAGroupProps = {
  lang: Lang;
  config: ProjectCtaConfig;
  variant?: "default" | "footer";
};

function CtaButton({
  href,
  label,
  lang,
  external,
  primary,
}: {
  href: string;
  label: LocalizedString;
  lang: Lang;
  external?: boolean;
  primary?: boolean;
}) {
  const className = primary
    ? "inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-black uppercase text-xs hover:bg-indigo-500 hover:text-white transition-all italic shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 min-h-[44px]"
    : "inline-flex items-center gap-2 px-6 py-3 rounded-full font-black uppercase text-xs border border-slate-600/60 text-slate-400 hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-indigo-500/5 transition-all italic focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 min-h-[44px]";

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
      {primary && <ChevronRight size={16} aria-hidden="true" />}
    </Link>
  );
}

export default function ProjectCTAGroup({ lang, config, variant = "default" }: ProjectCTAGroupProps) {
  const secondaryClass =
    variant === "footer"
      ? "inline-flex items-center gap-2 px-6 py-3 rounded-full font-black uppercase text-xs border border-slate-600/60 text-slate-400 hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-indigo-500/5 transition-all italic focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 min-h-[44px]"
      : "inline-flex items-center gap-2 text-sm font-medium text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 min-h-[44px] px-1";

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3 items-center">
        <CtaButton href={config.primary.href} label={config.primary.label} lang={lang} external={config.primary.external} primary />
        <Link href={config.secondary.href} className={secondaryClass}>
          {t(config.secondary.label, lang)}
          {variant === "footer" && <ChevronRight size={16} aria-hidden="true" />}
        </Link>
      </div>
      {config.tertiary && (
        <p className="text-sm">
          <a
            href={config.tertiary.href}
            target={config.tertiary.external ? "_blank" : undefined}
            rel={config.tertiary.external ? "noopener noreferrer" : undefined}
            className="text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            {t(config.tertiary.label, lang)}
          </a>
        </p>
      )}
      {config.contact && variant === "default" && !config.tertiary && (
        <p className="text-sm">
          <Link
            href={config.contact.href}
            className="text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            {t(config.contact.label, lang)}
          </Link>
        </p>
      )}
      {config.note && (
        <p className="text-xs text-slate-500 font-light leading-relaxed">{t(config.note, lang)}</p>
      )}
    </div>
  );
}
