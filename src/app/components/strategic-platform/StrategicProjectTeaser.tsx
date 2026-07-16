"use client";

import Image from "next/image";
import type { Lang } from "../../LanguageContext";
import type { ProsjektType } from "../../data/prosjekter/predictive-sales-coach";
import type { StrategicPlatformProject } from "../../data/strategic-platform-projects/types";
import { t } from "../../data/strategic-platform-projects/i18n";
import { blockTitleClass, cardTitleClass, prosjektTeaserClass } from "../../lib/typography";
import { formatProsjektPlain } from "../../lib/product-brand";
import ProjectCTA, { strategicTeaserCtaLabels } from "./ProjectCTA";

type StrategicProjectTeaserProps = {
  prosjekt: ProsjektType;
  platform: StrategicPlatformProject;
  lang: Lang;
  onImageClick: (src: string, alt: string) => void;
  bildeHint: string;
};

function InfoBlock({
  label,
  text,
  lang,
}: {
  label: { no: string; en: string };
  text: { no: string; en: string };
  lang: Lang;
}) {
  return (
    <div className="p-3 bg-slate-950/40 rounded-lg border border-slate-800/80 min-w-0">
      <h3 className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1.5">
        {t(label, lang)}
      </h3>
      <p className="text-sm text-slate-400 font-light leading-relaxed">{t(text, lang)}</p>
    </div>
  );
}

const blockLabels = {
  utfordring: { no: "Utfordringen", en: "The challenge" },
  bygget: { no: "Hva som er bygget", en: "What has been built" },
  relevans: { no: "Relevans", en: "Relevance" },
  status: { no: "Status", en: "Status" },
  videreutvikling: { no: "Videreutvikling og skaleringspotensial", en: "Further development and scaling potential" },
} as const;

export default function StrategicProjectTeaser({
  prosjekt,
  platform,
  lang,
  onImageClick,
  bildeHint,
}: StrategicProjectTeaserProps) {
  const { teaser } = platform;

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-start p-2.5 md:p-3 min-w-0">
      <div className="w-full md:w-[220px] lg:w-[260px] shrink-0 flex flex-col items-center gap-1.5 self-start">
        <button
          type="button"
          onClick={() => onImageClick(prosjekt.bildeUrl, prosjekt.tittel[lang])}
          className="w-full relative bg-slate-800 overflow-hidden group cursor-zoom-in focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none rounded-lg border border-slate-700/60"
          aria-label={bildeHint}
        >
          <Image
            src={prosjekt.bildeUrl}
            alt={prosjekt.tittel[lang]}
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 260px"
            className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
            style={{ width: "100%", height: "auto" }}
          />
        </button>
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black text-center px-1">
          {bildeHint}
        </p>
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-start overflow-hidden space-y-3">
        {prosjekt.visningsDato?.trim() && (
          <span className="text-[10px] font-mono uppercase tracking-widest font-bold block leading-none text-indigo-400">
            {prosjekt.visningsDato}
          </span>
        )}
        <div className="space-y-1">
          <h2
            className={`${blockTitleClass} text-xl md:text-2xl break-words [overflow-wrap:anywhere]`}
            dangerouslySetInnerHTML={{
              __html: formatProsjektPlain(prosjekt.tittel[lang], prosjekt.id),
            }}
          />
          <p className="text-sm text-indigo-300/90 font-medium italic">{t(teaser.undertittel, lang)}</p>
        </div>
        <p className={`${prosjektTeaserClass} text-base`}>{t(teaser.intro, lang)}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <InfoBlock label={blockLabels.utfordring} text={teaser.blokker.utfordring} lang={lang} />
          <InfoBlock label={blockLabels.bygget} text={teaser.blokker.bygget} lang={lang} />
          <InfoBlock label={blockLabels.relevans} text={teaser.blokker.relevans} lang={lang} />
          <InfoBlock label={blockLabels.status} text={teaser.blokker.status} lang={lang} />
        </div>

        <div className="p-3 bg-slate-950/40 rounded-lg border border-slate-800/80 min-w-0">
          <h3 className={`${cardTitleClass} text-xs mb-2`}>{t(blockLabels.videreutvikling, lang)}</h3>
          <p className="text-sm text-slate-400 font-light leading-relaxed">{t(teaser.videreutvikling, lang)}</p>
        </div>

        <ProjectCTA
          lang={lang}
          primaryHref={platform.detailPath}
          primaryLabel={platform.teaserCta?.primary ?? strategicTeaserCtaLabels.primary}
          secondaryHref="/kontakt"
          secondaryLabel={strategicTeaserCtaLabels.secondary}
        />
      </div>
    </div>
  );
}
