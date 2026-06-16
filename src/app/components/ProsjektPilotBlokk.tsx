import Link from "next/link";
import { PSC_APP_URL } from "../lib/psc-brand";
import { FLOW_SIGNAL_APP_URL } from "../lib/flowsignal-brand";
import { SMB_SALGSFLYT_APP_URL } from "../lib/smb-salgsflyt-brand";
import type { Lang } from "../LanguageContext";

const linkBase =
  "text-sm font-light underline underline-offset-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const linkClass = `${linkBase} text-indigo-400 decoration-indigo-500/70 hover:text-indigo-200`;

const pscBlokk = {
  tekst: {
    no: "Fra prosjekt til pilot: The Predictive Sales Coach kan testes som Sales Meeting Performance Pilot for salgsorganisasjoner som vil styrke møteforberedelse, kundedialog, salgslederinnsikt og læring.",
    en: "From project to pilot: The Predictive Sales Coach can be tested as a Sales Meeting Performance Pilot for sales organisations that want to strengthen meeting preparation, customer dialogue, sales leadership insight and learning.",
  },
  pilotHref: "/psc",
  pilotCta: { no: "Se pilotformat", en: "See pilot format" },
  appCta: { no: "Åpne PSCv6 pilotflate", en: "Open PSCv6 pilot environment" },
  tilgangNote: {
    no: "Pilotflaten er tilgangsstyrt og brukes i avtalte testløp. Ta kontakt dersom du ønsker tilgang eller vil diskutere en mulig pilot.",
    en: "The pilot environment is access-controlled and used in agreed test runs. Get in touch if you want access or to discuss a possible pilot.",
  },
  appUrl: PSC_APP_URL,
  accent: "psc" as const,
};

const flowSignalBlokk = {
  tekst: {
    no: "Fra prosjekt til pilot: FlowSignal kan testes som Team Performance & Samhandling Pilot for team som ønsker bedre dialog, samspill, energi, prioritering og lederoppfølging.",
    en: "From project to pilot: FlowSignal can be tested as a Team Performance & Collaboration Pilot for teams that want better dialogue, collaboration, energy, prioritisation and leadership follow-up.",
  },
  pilotHref: "/flowsignal",
  pilotCta: { no: "Se pilotformat", en: "See pilot format" },
  appCta: { no: "Åpne FlowSignal pilotflate", en: "Open FlowSignal pilot environment" },
  tilgangNote: {
    no: "Pilotflaten er tilgangsstyrt og brukes i avtalte testløp. Ta kontakt dersom du ønsker tilgang eller vil diskutere en mulig pilot.",
    en: "The pilot environment is access-controlled and used in agreed test runs. Get in touch if you want access or to discuss a possible pilot.",
  },
  appUrl: FLOW_SIGNAL_APP_URL,
  accent: "flowsignal" as const,
};

const smbSalgsflytBlokk = {
  tekst: {
    no: "Fra prosjekt til pilot: SMB Salgsflyt-sjekken kan brukes som diagnose- og kvalifiseringskomponent i Verdilekkasje Sprint og CRM & Sales Follow-up Sprint.",
    en: "From project to pilot: SMB Sales Flow Check can be used as a diagnosis and qualification component in Value Leak Sprint and CRM & Sales Follow-up Sprint.",
  },
  pilotHref: "/salgsflyt-sjekken",
  pilotCta: { no: "Se pilotformat", en: "See pilot format" },
  appCta: { no: "Åpne spørreundersøkelsen", en: "Open the survey" },
  tilgangNote: {
    no: "Spørreundersøkelsen er tilgangsstyrt og krever avtalt tilgangskode. Ta kontakt dersom du ønsker tilgang eller vil diskutere en mulig pilot.",
    en: "The survey is access-controlled and requires an agreed access code. Get in touch if you want access or to discuss a possible pilot.",
  },
  appUrl: SMB_SALGSFLYT_APP_URL,
  accent: "default" as const,
};

function getBlokk(prosjektId: string) {
  if (prosjektId === "predictive-sales-coach-2026") return pscBlokk;
  if (prosjektId === "flowsignal-2026-05") return flowSignalBlokk;
  if (prosjektId === "smb-salgsflyt-sjekken-2026") return smbSalgsflytBlokk;
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

  return (
    <div className="-mt-1.5 pt-1.5 border-t border-white/10 space-y-1">
      <p className="text-sm text-slate-300 font-light leading-tight">{blokk.tekst[lang]}</p>
      <div className="flex flex-wrap gap-x-3 gap-y-0.5 items-baseline">
        {harPilotformat && (
          <Link href={blokk.pilotHref} className={linkClass}>
            {blokk.pilotCta![lang]} →
          </Link>
        )}
        <a href={blokk.appUrl} target="_blank" rel="noopener noreferrer" className={appLinkClass}>
          {blokk.appCta[lang]} →
        </a>
      </div>
      <p className="text-xs text-slate-500 font-light leading-tight">{blokk.tilgangNote[lang]}</p>
    </div>
  );
}
