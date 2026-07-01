import Link from "next/link";
import { PSC_APP_URL } from "../lib/psc-brand";
import { FLOW_SIGNAL_APP_URL } from "../lib/flowsignal-brand";
import { SMB_SALGSFLYT_APP_URL } from "../lib/smb-salgsflyt-brand";
import { AI_READINESS_SCAN_APP_URL } from "../lib/ai-readiness-scan-brand";
import type { Lang } from "../LanguageContext";

const linkBase =
  "text-sm font-light underline underline-offset-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const linkClass = `${linkBase} text-indigo-400 decoration-indigo-500/70 hover:text-indigo-200`;

const kontaktDialog = {
  no: "Ta gjerne kontakt dersom du ønsker faglig dialog om løsningen, vurderer relevant lederrolle, eller ønsker å forstå hvordan tilsvarende arbeidsflyter kan være relevante i en fremtidig sammenheng.",
  en: "Feel free to get in touch if you want professional dialogue about the solution, are considering a relevant leadership role, or want to understand how similar workflows may be relevant in a future context.",
};

const tilgangIntro = {
  no: "Løsningen er tilgangsstyrt og utviklet som porteføljeprosjekt / lukket testflate. Den beskrives her for å dokumentere funksjonalitet, læring og praktisk AI-kompetanse.",
  en: "The solution is access-controlled and developed as a portfolio project / closed test environment. It is described here to document functionality, learning and practical AI competence.",
};

const pscBlokk = {
  tekst: {
    no: "Status, modenhet og videre anvendelse: The Predictive Sales Coach er utviklet som en praktisk trenings- og analyseplattform for kundedialog, møteforberedelse og salgsledelse.",
    en: "Status, maturity and further application: The Predictive Sales Coach is developed as a practical training and analysis platform for customer dialogue, meeting preparation and sales leadership.",
  },
  pilotHref: "/psc",
  pilotCta: { no: "Se hvordan løsningen fungerer", en: "See how the solution works" },
  appCta: { no: "Åpne tilgangsstyrt løsning", en: "Open access-controlled solution" },
  tilgangNote: {
    no: `${tilgangIntro.no} ${kontaktDialog.no}`,
    en: `${tilgangIntro.en} ${kontaktDialog.en}`,
  },
  appUrl: PSC_APP_URL,
  accent: "psc" as const,
};

const flowSignalBlokk = {
  tekst: {
    no: "Status, modenhet og videre anvendelse: FlowSignal er utviklet som en praktisk arbeidsflate for teamutvikling, samhandling og lederoppfølging.",
    en: "Status, maturity and further application: FlowSignal is developed as a practical workspace for team development, collaboration and leadership follow-up.",
  },
  pilotHref: "/flowsignal",
  pilotCta: { no: "Se hvordan løsningen fungerer", en: "See how the solution works" },
  appCta: { no: "Åpne tilgangsstyrt løsning", en: "Open access-controlled solution" },
  tilgangNote: {
    no: `${tilgangIntro.no} ${kontaktDialog.no}`,
    en: `${tilgangIntro.en} ${kontaktDialog.en}`,
  },
  appUrl: FLOW_SIGNAL_APP_URL,
  accent: "flowsignal" as const,
};

const smbSalgsflytBlokk = {
  tekst: {
    no: "Status, modenhet og videre anvendelse: SMB Salgsflyt-sjekken er bygget som interaktiv diagnose med scoring, AI-analyse, rapport og adminkonsoll for kommersielle miljøer.",
    en: "Status, maturity and further application: SMB Sales Flow Check is built as an interactive diagnosis with scoring, AI analysis, reporting and admin console for commercial environments.",
  },
  pilotHref: "/salgsflyt-sjekken",
  pilotCta: { no: "Se hvordan løsningen fungerer", en: "See how the solution works" },
  appCta: { no: "Åpne lukket testflate", en: "Open closed test environment" },
  tilgangNote: {
    no: `${tilgangIntro.no} ${kontaktDialog.no}`,
    en: `${tilgangIntro.en} ${kontaktDialog.en}`,
  },
  appUrl: SMB_SALGSFLYT_APP_URL,
  accent: "default" as const,
};

const aiReadinessScanBlokk = {
  tekst: {
    no: "Status, modenhet og videre anvendelse: AI Readiness Scan viser hvordan AI-modenhet, prioriteringer og konkrete forbedringstiltak kan struktureres som grunnlag for videre arbeid.",
    en: "Status, maturity and further application: AI Readiness Scan shows how AI maturity, priorities and concrete improvement measures can be structured as a basis for further work.",
  },
  appCta: { no: "Åpne tilgangsstyrt løsning", en: "Open access-controlled solution" },
  tilgangNote: {
    no: `${tilgangIntro.no} ${kontaktDialog.no}`,
    en: `${tilgangIntro.en} ${kontaktDialog.en}`,
  },
  appUrl: AI_READINESS_SCAN_APP_URL,
  accent: "default" as const,
};

function getBlokk(prosjektId: string) {
  if (prosjektId === "predictive-sales-coach-2026") return pscBlokk;
  if (prosjektId === "flowsignal-2026-05") return flowSignalBlokk;
  if (prosjektId === "smb-salgsflyt-sjekken-2026") return smbSalgsflytBlokk;
  if (prosjektId === "ai-readiness-scan-2026-06") return aiReadinessScanBlokk;
  return null;
}

export default function ProsjektPilotBlokk({ prosjektId, lang }: { prosjektId: string; lang: Lang }) {
  const blokk = getBlokk(prosjektId);
  if (!blokk) return null;

  const appLinkClass =
    blokk.accent === "psc"
      ? `${linkBase} text-[#E30613] decoration-[#E30613]/70 hover:text-white`
      : blokk.accent === "flowsignal"
        ? `${linkBase} text-[#CDB47A] decoration-[#CDB47A]/70 hover:text-white`
        : linkClass;

  const harPilotformat = "pilotHref" in blokk && blokk.pilotHref;
  const harAppLenke = "appUrl" in blokk && blokk.appUrl && "appCta" in blokk && blokk.appCta;

  return (
    <div className="-mt-1.5 pt-1.5 border-t border-white/10 space-y-1">
      <p className="text-sm text-slate-300 font-light leading-tight">{blokk.tekst[lang]}</p>
      {(harPilotformat || harAppLenke) && (
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 items-baseline">
          {harPilotformat && (
            <Link href={blokk.pilotHref} className={linkClass}>
              {blokk.pilotCta![lang]} →
            </Link>
          )}
          {harAppLenke && (
            <a href={blokk.appUrl} target="_blank" rel="noopener noreferrer" className={appLinkClass}>
              {blokk.appCta![lang]} →
            </a>
          )}
        </div>
      )}
      <p className="text-xs text-slate-500 font-light leading-tight">{blokk.tilgangNote[lang]}</p>
    </div>
  );
}
