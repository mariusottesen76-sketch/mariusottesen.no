"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LanguageProvider, LanguageToggle, useLanguage } from "../../LanguageContext";
import type { StrategicPlatformSlug } from "../../data/strategic-platform-projects/types";
import { getStrategicPlatformBySlug, t } from "../../data/strategic-platform-projects";
import { controlTower } from "../../data/prosjekter/control-tower";
import { aiTransformationValueRealization } from "../../data/prosjekter/ai-transformation-value-realization";
import { predictiveSalesCoach } from "../../data/prosjekter/predictive-sales-coach";
import { flowSignal } from "../../data/prosjekter/flowsignal";
import { aiReadinessScan } from "../../data/prosjekter/ai-readiness-scan";
import { smbSalgsflytSjekken } from "../../data/prosjekter/smb-salgsflyt-sjekken";
import { prosjektoppgaveStrategiskImplementering } from "../../data/prosjekter/prosjektoppgave-strategisk-implementering";
import { skoyenasenTannklinikk } from "../../data/prosjekter/skoyenasen-tannklinikk";
import { mariusottesenNettside } from "../../data/prosjekter/mariusottesen-nettside";
import { aiAssistertInnsiktsagent } from "../../data/prosjekter/ai-assistert-innsiktsagent";
import { aiAssistertInnsiktsOgInnholdsagent } from "../../data/prosjekter/ai-assistert-innsikts-og-innholdsagent";
import { aiArkitekturBeslutningsstotte } from "../../data/prosjekter/ai-arkitektur-beslutningsstotte";
import { aiValueLabOslo } from "../../data/prosjekter/ai-value-lab-oslo";
import type { ProsjektType } from "../../data/prosjekter/predictive-sales-coach";
import {
  blockTitleClass,
  cardTitleClass,
  pageTitleClass,
  sectionHeadingClass,
  sectionHeadingWrapClass,
} from "../../lib/typography";
import { formatProsjektPlain } from "../../lib/product-brand";
import ProjectStatusBadge from "./ProjectStatusBadge";
import ProjectCTAGroup from "../project-v2/ProjectCTAGroup";
import ProjectModuleGrid from "./ProjectModuleGrid";
import ScalabilitySection from "./ScalabilitySection";
import ProjectHero from "../project-v2/ProjectHero";
import ProjectImageModal from "../project-v2/ProjectImageModal";
import ProjectApplicationGroups from "../project-v2/ProjectApplicationGroups";
import NumberedStepGrid from "./NumberedStepGrid";
import DemoPortfolioSection from "./DemoPortfolioSection";
import GovernanceScenariosSection from "./GovernanceScenariosSection";
import ProjectFaqSection from "./ProjectFaqSection";
import { getProjectV2ById } from "../../data/projects-v2/registry";
import { buildProjectDetailCta } from "../../data/projects-v2/cta";
import { PROJECT_CATEGORY_LABELS } from "../../lib/project-v2-category";
import { resolveDetailHeroFit } from "../../lib/project-v2-image";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

function MultilineBody({ text, className }: { text: string; className: string }) {
  const paragraphs = text.split("\n\n").filter(Boolean);
  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className={className}>
          {paragraph.split("\n").map((line, index) => (
            <React.Fragment key={`${index}-${line.slice(0, 30)}`}>
              {index > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </p>
      ))}
    </div>
  );
}

const bodyTextClass = "text-base leading-relaxed font-light w-full min-w-0 max-w-none text-slate-400";

const prosjektBySlug: Record<StrategicPlatformSlug, ProsjektType> = {
  "control-tower": controlTower,
  "ai-transformation-value-realization": aiTransformationValueRealization,
  "predictive-sales-coach": predictiveSalesCoach,
  flowsignal: flowSignal,
  "ai-readiness-scan": aiReadinessScan,
  "salgsflyt-sjekken": smbSalgsflytSjekken,
  "strategisk-ai-implementering": prosjektoppgaveStrategiskImplementering,
  "skoyenasen-tannklinikk": skoyenasenTannklinikk,
  "mariusottesen-nettside": mariusottesenNettside,
  "agentisk-arbeidsflyt": aiAssistertInnsiktsagent,
  "ai-innsikts-og-innholdsmotor": aiAssistertInnsiktsOgInnholdsagent,
  "ai-arkitektur-beslutningsstotte": aiArkitekturBeslutningsstotte,
  "ai-value-lab-oslo": aiValueLabOslo,
};

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className={sectionHeadingWrapClass}>
      <h2 id={id} className={sectionHeadingClass}>
        {children}
      </h2>
    </div>
  );
}

function TilbakeKnapp() {
  const { lang } = useLanguage();
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined" && window.history.length > 1) {
          router.back();
        } else {
          router.push("/prosjekter");
        }
      }}
      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-300 transition-colors mb-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 rounded-sm"
      aria-label={lang === "no" ? "Tilbake til AI-prosjekter" : "Back to AI projects"}
    >
      <ChevronLeft size={14} aria-hidden="true" />
      {lang === "no" ? "Tilbake til AI-prosjekter" : "Back to AI projects"}
    </button>
  );
}

function StrategicProjectDetailInner({ slug }: { slug: StrategicPlatformSlug }) {
  const { lang } = useLanguage();
  const platform = getStrategicPlatformBySlug(slug);
  const prosjekt = prosjektBySlug[slug];
  const projectV2 = getProjectV2ById(prosjekt.id);
  const detailCta = projectV2 ? buildProjectDetailCta(projectV2) : null;
  const { detail } = platform;
  const heroSrc = projectV2?.detailHeroImage ?? prosjekt.bildeUrl;
  const heroAlt = projectV2?.altText ?? detail.hero.bildeAlt;
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="py-4 text-left w-full overflow-x-hidden min-w-0">
      <nav className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/40 pb-4">
        <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label={lang === "no" ? "Til forsiden" : "Go to home"}>
          <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-800 shrink-0">
            <Image src="/images/ikon.png" alt="Marius Ottesen" width={36} height={36} className="w-full h-full object-cover" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 group-hover:text-indigo-300">
            Marius Ottesen Consulting
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
          <Link href="/consulting" className={linkClass}>
            Consulting
          </Link>
          <Link href="/prosjekter" className={linkClass}>
            {lang === "no" ? "Prosjekter" : "Projects"}
          </Link>
          <Link href="/kontakt" className={linkClass}>
            {lang === "no" ? "Kontakt" : "Contact"}
          </Link>
          <LanguageToggle />
        </div>
      </nav>

      <TilbakeKnapp />

      <header className="border-b border-white/10 pb-6 mb-8 space-y-4">
        <ProjectStatusBadge label={detail.statusBadge} lang={lang} />
        {projectV2 && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-mono uppercase tracking-widest text-slate-500">
            <span className="text-indigo-400 font-bold">{t(projectV2.displayDate, lang)}</span>
            <span aria-hidden="true">·</span>
            <span>{PROJECT_CATEGORY_LABELS[projectV2.category][lang]}</span>
          </div>
        )}
        <h1
          className={`${pageTitleClass} mb-2`}
          dangerouslySetInnerHTML={{
            __html: formatProsjektPlain(prosjekt.tittel[lang], prosjekt.id),
          }}
        />
        <p className="text-lg md:text-xl text-indigo-300/90 font-medium italic">{t(detail.hero.verdiforslag, lang)}</p>
        <p className={`text-slate-300 ${bodyTextClass}`}>{t(detail.hero.executiveSummary, lang)}</p>

        <ProjectHero
          src={heroSrc}
          alt={t(heroAlt, lang)}
          lang={lang}
          onImageClick={(src, alt) => setActiveImage({ src, alt })}
          objectPosition={projectV2?.detailHeroObjectPosition}
          fit={resolveDetailHeroFit(projectV2?.needsNewDetailHero ?? projectV2?.detailHeroMissing)}
          aspectRatio={projectV2?.detailHeroAspectRatio}
          maxWidthPx={projectV2?.detailHeroMaxWidthPx}
          maxHeightPx={projectV2?.detailHeroMaxHeightPx}
        />

        {projectV2 && detailCta ? (
          <ProjectCTAGroup lang={lang} config={detailCta} />
        ) : null}
      </header>

      {detail.kortFortalt && (
        <section
          aria-labelledby="plattform-kort-fortalt"
          className="mb-10 p-6 bg-slate-900/40 rounded-2xl border border-slate-800"
        >
          <h2 id="plattform-kort-fortalt" className={`${blockTitleClass} mb-3`}>
            {t(detail.kortFortalt.heading, lang)}
          </h2>
          <p className={`text-sm ${bodyTextClass}`}>{t(detail.kortFortalt.body, lang)}</p>
        </section>
      )}

      <section aria-labelledby="plattform-utfordring" className="mb-10">
        <SectionHeading id="plattform-utfordring">{t(detail.utfordring.heading, lang)}</SectionHeading>
        <MultilineBody text={t(detail.utfordring.body, lang)} className={bodyTextClass} />
      </section>

      <section aria-labelledby="plattform-logikk" className="mb-10">
        <SectionHeading id="plattform-logikk">{t(detail.logikk.heading, lang)}</SectionHeading>
        <p className={`${bodyTextClass} mb-4`}>{t(detail.logikk.body, lang)}</p>
        {detail.logikk.predictiveForklaring && (
          <div className="mb-4 p-4 bg-slate-900/40 rounded-xl border border-slate-800 space-y-2 min-w-0">
            <h3 className={cardTitleClass}>{t(detail.logikk.predictiveForklaring.heading, lang)}</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              {t(detail.logikk.predictiveForklaring.body, lang)}
            </p>
          </div>
        )}
        {detail.logikk.steps && detail.logikk.steps.length > 0 && (
          <NumberedStepGrid steps={detail.logikk.steps} lang={lang} className="mb-4" />
        )}
        {detail.logikk.after && <p className={bodyTextClass}>{t(detail.logikk.after, lang)}</p>}
      </section>

      {detail.datagrunnlag && (
        <section aria-labelledby="plattform-datagrunnlag" className="mb-10">
          <SectionHeading id="plattform-datagrunnlag">{t(detail.datagrunnlag.heading, lang)}</SectionHeading>
          <p className={bodyTextClass}>{t(detail.datagrunnlag.body, lang)}</p>
        </section>
      )}

      {detail.governanceScenarios && (
        <GovernanceScenariosSection data={detail.governanceScenarios} lang={lang} />
      )}

      <section aria-labelledby="plattform-bygget" className="mb-10">
        <SectionHeading id="plattform-bygget">{t(detail.bygget.heading, lang)}</SectionHeading>
        {detail.bygget.body && <p className={`${bodyTextClass} mb-4`}>{t(detail.bygget.body, lang)}</p>}
        <ul className="space-y-2">
          {detail.bygget.items.map((item) => (
            <li key={item.no} className="flex items-start gap-2 text-sm text-slate-400 font-light leading-relaxed">
              <ChevronRight size={14} className="text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{t(item, lang)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="plattform-moduler" aria-labelledby="plattform-moduler-heading" className="mb-10 scroll-mt-24">
        <SectionHeading id="plattform-moduler-heading">{t(detail.moduler.heading, lang)}</SectionHeading>
        {detail.moduler.intro && <p className={`${bodyTextClass} mb-4`}>{t(detail.moduler.intro, lang)}</p>}
        <ProjectModuleGrid
          modules={detail.moduler.modules}
          lang={lang}
          category={projectV2?.category}
          slug={slug}
        />
      </section>

      <section aria-labelledby="plattform-hvordan" className="mb-10">
        <SectionHeading id="plattform-hvordan">{t(detail.hvordan.heading, lang)}</SectionHeading>
        {detail.hvordan.intro && <p className={`${bodyTextClass} mb-4`}>{t(detail.hvordan.intro, lang)}</p>}
        {detail.hvordan.detaljpunkter && detail.hvordan.detaljpunkter.length > 0 ? (
          <ul className="space-y-2">
            {detail.hvordan.detaljpunkter.map((punkt) => (
              <li key={punkt.no} className="flex items-start gap-2 text-sm text-slate-400 font-light leading-relaxed">
                <ChevronRight size={14} className="text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{t(punkt, lang)}</span>
              </li>
            ))}
          </ul>
        ) : detail.hvordan.steps && detail.hvordan.steps.length > 0 ? (
          <NumberedStepGrid steps={detail.hvordan.steps} lang={lang} />
        ) : null}
      </section>

      {detail.demoPortfolio && <DemoPortfolioSection data={detail.demoPortfolio} lang={lang} />}

      <section aria-labelledby="plattform-relevans" className="mb-10">
        <SectionHeading id="plattform-relevans">{t(detail.relevans.heading, lang)}</SectionHeading>
        {detail.relevans.sections && detail.relevans.sections.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {detail.relevans.sections.map((section) => (
              <div key={section.tittel.no} className="p-4 bg-slate-900/40 rounded-xl border border-slate-800 space-y-2 min-w-0">
                <h3 className={cardTitleClass}>{t(section.tittel, lang)}</h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">{t(section.tekst, lang)}</p>
              </div>
            ))}
          </div>
        ) : detail.relevans.body ? (
          <p className={bodyTextClass}>{t(detail.relevans.body, lang)}</p>
        ) : null}
      </section>

      {detail.effektomrader && (
        <section aria-labelledby="plattform-effektomrader" className="mb-10">
          <SectionHeading id="plattform-effektomrader">{t(detail.effektomrader.heading, lang)}</SectionHeading>
          <ul className="space-y-2">
            {detail.effektomrader.punkter.map((punkt) => (
              <li key={punkt.no} className="flex items-start gap-2 text-sm text-slate-400 font-light leading-relaxed">
                <ChevronRight size={14} className="text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{t(punkt, lang)}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {detail.anvendelsesformat && (
        <section aria-labelledby="plattform-anvendelsesformat" className="mb-10">
          <SectionHeading id="plattform-anvendelsesformat">{t(detail.anvendelsesformat.heading, lang)}</SectionHeading>
          <NumberedStepGrid steps={detail.anvendelsesformat.steg} lang={lang} />
        </section>
      )}

      {projectV2?.applicationGroups && (
        <ProjectApplicationGroups groups={projectV2.applicationGroups} lang={lang} />
      )}

      <section aria-labelledby="plattform-status" className="mb-10 p-6 bg-slate-900/40 rounded-2xl border border-slate-800">
        <h2 id="plattform-status" className={`${blockTitleClass} mb-3`}>
          {t(detail.status.heading, lang)}
        </h2>
        <MultilineBody text={t(detail.status.body, lang)} className={`text-sm ${bodyTextClass}`} />
      </section>

      <section aria-labelledby="plattform-skalerbarhet" className="mb-10 space-y-4">
        <SectionHeading id="plattform-skalerbarhet">{t(detail.skalerbarhet.heading, lang)}</SectionHeading>
        <ScalabilitySection data={detail.skalerbarhet} lang={lang} />
      </section>

      {detail.faq && (
        <ProjectFaqSection heading={detail.faq.heading} items={detail.faq.items} lang={lang} />
      )}

      {detail.utvikler && (
        <section aria-labelledby="plattform-utvikler" className="mb-10 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 space-y-2">
          <h2 id="plattform-utvikler" className={`${blockTitleClass} mb-1`}>
            {t(detail.utvikler.navn, lang)}
          </h2>
          <p className="text-sm text-indigo-300/90 font-medium italic">{t(detail.utvikler.rolle, lang)}</p>
          <p className={`text-sm ${bodyTextClass}`}>{t(detail.utvikler.beskrivelse, lang)}</p>
        </section>
      )}

      <section
        aria-labelledby="plattform-avslutning"
        className="p-8 bg-slate-900/40 rounded-2xl border border-indigo-500/20 shadow-xl space-y-4"
      >
        <h2 id="plattform-avslutning" className={sectionHeadingClass.replace("mb-4", "mb-2")}>
          {t(detail.avslutning.heading, lang)}
        </h2>
        <p className={`text-slate-300 ${bodyTextClass}`}>{t(detail.avslutning.body, lang)}</p>
        {projectV2 && detailCta ? (
          <ProjectCTAGroup
            lang={lang}
            config={{
              ...detailCta,
              secondary: {
                href: "/prosjekter",
                label: detail.avslutning.secondaryLabel ?? {
                  no: "Tilbake til AI-prosjekter",
                  en: "Back to AI projects",
                },
              },
            }}
          />
        ) : null}
      </section>

      <footer className="mt-10 pt-6 border-t border-slate-800/40 text-center">
        <p className="text-slate-600 text-[11px] font-bold tracking-wider">
          &copy; {new Date().getFullYear()} Marius Ottesen Consulting
        </p>
      </footer>

      {activeImage && (
        <ProjectImageModal
          src={activeImage.src}
          alt={activeImage.alt}
          lang={lang}
          onClose={() => setActiveImage(null)}
        />
      )}
    </div>
  );
}

export default function StrategicProjectDetailPage({ slug }: { slug: StrategicPlatformSlug }) {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-slate-950 text-slate-200 px-16 sm:px-24 md:px-32 lg:px-40 xl:px-48 2xl:px-56 py-4 md:py-8 relative overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <StrategicProjectDetailInner slug={slug} />
        </div>
      </main>
    </LanguageProvider>
  );
}
