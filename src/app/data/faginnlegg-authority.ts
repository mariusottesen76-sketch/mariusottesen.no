import { CONTROL_TOWER_PROSJEKT_PATH } from "../lib/control-tower-brand";
import { faginnleggDetailPath } from "../lib/faginnlegg-types";
import type { RelevantVidereLink } from "../lib/faginnlegg-relevant-videre";
import { SMB_SALGSFLYT_PILOT_PATH } from "../lib/smb-salgsflyt-brand";

/** Intern cluster-inndeling for Core Authority Set v1.0 — vises aldri i UI. */
export type FaginnleggAuthorityCluster =
  | "kommersiell-salg"
  | "ledelse-mennesker"
  | "strategi-endring"
  | "crm-data"
  | "ai-implementering";

export type FaginnleggAuthorityRole = "cornerstone" | "core-support" | "secondary-support";

export interface FaginnleggAuthorityEntry {
  slug: string;
  cluster: FaginnleggAuthorityCluster;
  role: FaginnleggAuthorityRole;
  /** Primære søke-/svarintents artikkelen eier (intern planlegging). */
  ownedIntents: string[];
  coreSupportSlugs?: string[];
  secondarySupportSlugs?: string[];
  relevantVidere?: RelevantVidereLink[];
}

function articleLink(slug: string, label: { no: string; en: string }): RelevantVidereLink {
  return { href: faginnleggDetailPath(slug), label };
}

/** Sentralt authority-kart — Core Authority Set v1.0 + støtteartikler (data only i fase 4B.1). */
export const FAGINNLEGG_AUTHORITY: Record<string, FaginnleggAuthorityEntry> = {
  "salgsledelse-i-praksis-2026-08": {
    slug: "salgsledelse-i-praksis-2026-08",
    cluster: "kommersiell-salg",
    role: "cornerstone",
    ownedIntents: [
      "god salgsledelse",
      "salgsledelse i praksis",
      "KPI i salgsledelse",
      "pipeline vs coaching",
      "prioritere kunder",
      "kommersiell dømmekraft",
      "datadrevet salgsledelse",
    ],
    coreSupportSlugs: [
      "trykk-prestasjon-kommersiell-ledelse-2026-05",
      "verdier-kultur-kommersiell-ledelse-2026-06",
      "crm-mer-enn-et-systemprosjekt-2026-09",
    ],
    secondarySupportSlugs: [
      "control-tower-verdikjede-ledelse-2026-08",
      "frastotende-salg-2026-01",
      "fornoyd-kunde-lojal-kunde-2026-09",
    ],
    relevantVidere: [
      articleLink("fornoyd-kunde-lojal-kunde-2026-09", {
        no: "Les også: En fornøyd kunde er ikke nødvendigvis en lojal kunde",
        en: "Read also: A satisfied customer is not necessarily a loyal customer",
      }),
      articleLink("fra-data-til-beslutning-2026-09", {
        no: "Les også: Fra data til beslutning",
        en: "Read also: From data to decision",
      }),
      articleLink("crm-mer-enn-et-systemprosjekt-2026-09", {
        no: "Les også: CRM er mer enn et systemprosjekt",
        en: "Read also: CRM is more than a system project",
      }),
      { href: "/erfaring", label: { no: "Se erfaring", en: "See experience" } },
      { href: "/psc", label: { no: "Se prosjektet: The Predictive Sales Coach", en: "See project: The Predictive Sales Coach" } },
    ],
  },
  "control-tower-verdikjede-ledelse-2026-08": {
    slug: "control-tower-verdikjede-ledelse-2026-08",
    cluster: "kommersiell-salg",
    role: "cornerstone",
    ownedIntents: [
      "leder uten linjeansvar",
      "styring på tvers",
      "verdikjedeledelse",
      "signal til handling",
      "kommersiell og operasjonell ledelse",
    ],
    coreSupportSlugs: [
      "control-tower-operasjon-kommers-2026-07",
      "salgsledelse-i-praksis-2026-08",
      "crm-mer-enn-et-systemprosjekt-2026-09",
    ],
    secondarySupportSlugs: ["fra-strategi-til-gjennomforing-2026-09"],
    relevantVidere: [
      articleLink("fra-data-til-beslutning-2026-09", {
        no: "Les også: Fra data til beslutning",
        en: "Read also: From data to decision",
      }),
      articleLink("fra-strategi-til-gjennomforing-2026-09", {
        no: "Les også: Fra strategi til gjennomføring",
        en: "Read also: From strategy to execution",
      }),
      { href: "/resultater", label: { no: "Se dokumenterte resultater", en: "See documented results" } },
      { href: CONTROL_TOWER_PROSJEKT_PATH, label: { no: "Se prosjektet: Control Tower", en: "See project: Control Tower" } },
    ],
  },
  "psykologisk-trygghet-krav-2026-01": {
    slug: "psykologisk-trygghet-krav-2026-01",
    cluster: "ledelse-mennesker",
    role: "cornerstone",
    ownedIntents: [
      "psykologisk trygghet i ledelse",
      "trygghet og krav",
      "prestasjonskultur",
      "høye forventninger og respekt",
    ],
    coreSupportSlugs: [
      "kjeft-psykologisk-trygghet-01",
      "du-arver-laget-landslag-2026-07",
      "verdier-kultur-kommersiell-ledelse-2026-06",
    ],
    secondarySupportSlugs: ["trykk-prestasjon-kommersiell-ledelse-2026-05"],
    relevantVidere: [
      articleLink("du-arver-laget-landslag-2026-07", {
        no: "Les også: Du arver laget. Du eier utviklingen.",
        en: "Read also: You inherit the team. You own the development.",
      }),
      { href: "/referanser", label: { no: "Se referanser", en: "See references" } },
      { href: "/consulting", label: { no: "Se Consulting", en: "See consulting" } },
    ],
  },
  "du-arver-laget-landslag-2026-07": {
    slug: "du-arver-laget-landslag-2026-07",
    cluster: "ledelse-mennesker",
    role: "cornerstone",
    ownedIntents: [
      "arve team som leder",
      "teamutvikling",
      "leder eier utvikling",
      "idrett og arbeidsliv",
    ],
    coreSupportSlugs: [
      "psykologisk-trygghet-krav-2026-01",
      "verdensklasse-bygges-sammen-cnn-2026-07",
      "pappa-forst-trener-etterpa-2026-01",
    ],
    secondarySupportSlugs: ["kong-harald-startnummer-en-2026-08"],
    relevantVidere: [
      articleLink("psykologisk-trygghet-krav-2026-01", {
        no: "Les også: Psykologisk trygghet er ikke fravær av krav",
        en: "Read also: Psychological safety is not the absence of demands",
      }),
      { href: "/erfaring", label: { no: "Se erfaring", en: "See experience" } },
      { href: "/consulting", label: { no: "Se Consulting", en: "See consulting" } },
    ],
  },
  "fra-strategi-til-gjennomforing-2026-09": {
    slug: "fra-strategi-til-gjennomforing-2026-09",
    cluster: "strategi-endring",
    role: "cornerstone",
    ownedIntents: [
      "strategiimplementering",
      "fra strategi til handling",
      "gjennomføringsevne",
      "ledergruppens rolle",
      "lederrytme",
      "intensjons-atferdsgap organisasjon",
    ],
    coreSupportSlugs: [
      "alle-enige-ingen-gjor-noe-01",
      "gronne-exceltall-transformasjon-2026-05",
      "tillit-endring-gjennomforing-2025-01",
      "fra-data-til-beslutning-2026-09",
    ],
    secondarySupportSlugs: ["ai-mottaker-endringsledelse-2026-08"],
    relevantVidere: [
      articleLink("fra-data-til-beslutning-2026-09", {
        no: "Les også: Fra data til beslutning",
        en: "Read also: From data to decision",
      }),
      articleLink("alle-enige-ingen-gjor-noe-01", {
        no: "Les også: Alle er enige. Ingen gjør noe.",
        en: "Read also: Everyone agrees. No one acts.",
      }),
      { href: "/erfaring", label: { no: "Se erfaring", en: "See experience" } },
    ],
  },
  "fra-data-til-beslutning-2026-09": {
    slug: "fra-data-til-beslutning-2026-09",
    cluster: "strategi-endring",
    role: "cornerstone",
    ownedIntents: [
      "datadrevet ledelse",
      "fra data til beslutning",
      "beslutningsstøtte",
      "signal til handling",
      "KPI og prioritering",
      "beslutningsrytme ledergruppe",
    ],
    coreSupportSlugs: [
      "fra-strategi-til-gjennomforing-2026-09",
      "crm-mer-enn-et-systemprosjekt-2026-09",
      "salgsledelse-i-praksis-2026-08",
      "bedre-data-beslutninger-tech-frokost-2026-08",
    ],
    secondarySupportSlugs: ["control-tower-verdikjede-ledelse-2026-08", "fornoyd-kunde-lojal-kunde-2026-09"],
    relevantVidere: [
      articleLink("fra-strategi-til-gjennomforing-2026-09", {
        no: "Fra strategi til gjennomføring",
        en: "From strategy to execution",
      }),
      articleLink("crm-mer-enn-et-systemprosjekt-2026-09", {
        no: "CRM er mer enn et systemprosjekt",
        en: "CRM is more than a system project",
      }),
      articleLink("fornoyd-kunde-lojal-kunde-2026-09", {
        no: "En fornøyd kunde er ikke nødvendigvis en lojal kunde",
        en: "A satisfied customer is not necessarily a loyal customer",
      }),
      articleLink("salgsledelse-i-praksis-2026-08", {
        no: "Salgsledelse i praksis",
        en: "Sales leadership in practice",
      }),
      { href: "/control-tower", label: { no: "Control Tower – Decision & Execution Intelligence", en: "Control Tower – Decision & Execution Intelligence" } },
      articleLink("bedre-data-beslutninger-tech-frokost-2026-08", {
        no: "Bedre data. Bedre beslutninger.",
        en: "Better data. Better decisions.",
      }),
    ],
  },
  "tillit-endring-gjennomforing-2025-01": {
    slug: "tillit-endring-gjennomforing-2025-01",
    cluster: "strategi-endring",
    role: "cornerstone",
    ownedIntents: [
      "endringsmotstand",
      "folk motsetter seg endring",
      "tillit i endring",
      "kommunisere endring",
      "endringsledelse praksis",
    ],
    coreSupportSlugs: ["fra-strategi-til-gjennomforing-2026-09", "ai-mottaker-endringsledelse-2026-08"],
    secondarySupportSlugs: ["alle-enige-ingen-gjor-noe-01"],
    relevantVidere: [
      articleLink("fra-strategi-til-gjennomforing-2026-09", {
        no: "Les også: Fra strategi til gjennomføring",
        en: "Read also: From strategy to execution",
      }),
      { href: "/erfaring", label: { no: "Se erfaring", en: "See experience" } },
      { href: "/consulting", label: { no: "Se Consulting", en: "See consulting" } },
    ],
  },
  "crm-mer-enn-et-systemprosjekt-2026-09": {
    slug: "crm-mer-enn-et-systemprosjekt-2026-09",
    cluster: "crm-data",
    role: "cornerstone",
    ownedIntents: [
      "CRM-adopsjon",
      "CRM som lederoppgave",
      "CRM arbeidsflyt",
      "felles kundebilde",
      "CRM datakvalitet",
    ],
    coreSupportSlugs: [
      "crm-genai-medspiller-knowit-2026-06",
      "salgsledelse-i-praksis-2026-08",
      "bedre-data-beslutninger-tech-frokost-2026-08",
    ],
    secondarySupportSlugs: ["data-kontekst-rag-01"],
    relevantVidere: [
      articleLink("fornoyd-kunde-lojal-kunde-2026-09", {
        no: "Les også: En fornøyd kunde er ikke nødvendigvis en lojal kunde",
        en: "Read also: A satisfied customer is not necessarily a loyal customer",
      }),
      articleLink("fra-data-til-beslutning-2026-09", {
        no: "Les også: Fra data til beslutning",
        en: "Read also: From data to decision",
      }),
      articleLink("salgsledelse-i-praksis-2026-08", {
        no: "Les også: Salgsledelse i praksis",
        en: "Read also: Sales leadership in practice",
      }),
      { href: "/erfaring", label: { no: "Se erfaring", en: "See experience" } },
      { href: SMB_SALGSFLYT_PILOT_PATH, label: { no: "Se prosjektet: SMB Salgsflyt-sjekken", en: "See project: SMB Sales Flow Check" } },
    ],
  },
  "ai-needs-first-tannklinikk-case-01": {
    slug: "ai-needs-first-tannklinikk-case-01",
    cluster: "ai-implementering",
    role: "cornerstone",
    ownedIntents: [
      "starte med AI",
      "AI needs-first",
      "AI forretningsproblem",
      "AI prioritering",
      "feil rekkefølge AI-prosjekt",
    ],
    coreSupportSlugs: [
      "ai-prosjekt-forretningsproblem-tegneserie-2026-05",
      "ai-ready-virksomhet-01",
      "econa-ai-kundereise-arbeidsflyt-01",
    ],
    secondarySupportSlugs: ["fra-pilot-til-skalering-01", "praktisk-oppskrift-skalering-01"],
    relevantVidere: [
      articleLink("praktisk-oppskrift-skalering-01", {
        no: "Les også: Fra pilot til skalering – en praktisk oppskrift for ledere",
        en: "Read also: From pilot to scale – a practical recipe for leaders",
      }),
      { href: "/resultater", label: { no: "Se dokumenterte resultater", en: "See documented results" } },
      { href: "/ai-value-lab-oslo", label: { no: "Se AI Value Lab Oslo", en: "See AI Value Lab Oslo" } },
    ],
  },
  "praktisk-oppskrift-skalering-01": {
    slug: "praktisk-oppskrift-skalering-01",
    cluster: "ai-implementering",
    role: "cornerstone",
    ownedIntents: [
      "skalere AI",
      "fra pilot til produksjon",
      "AI eierskap",
      "prosessendring AI",
      "AI governance før skalering",
    ],
    coreSupportSlugs: ["fra-pilot-til-skalering-01", "ai-ready-virksomhet-01", "ai-governance-i-praksis-01"],
    secondarySupportSlugs: ["fra-verktoy-til-system-01"],
    relevantVidere: [
      articleLink("ai-governance-i-praksis-01", {
        no: "Les også: AI-governance i praksis",
        en: "Read also: AI governance in practice",
      }),
      { href: "/prosjekter", label: { no: "Se AI-prosjekter", en: "See AI projects" } },
      { href: "/consulting", label: { no: "Se Consulting", en: "See consulting" } },
    ],
  },
  /** CORE SUPPORT — registrert for senere lenking, ikke synlig som rolle. */
  "alle-enige-ingen-gjor-noe-01": {
    slug: "alle-enige-ingen-gjor-noe-01",
    cluster: "strategi-endring",
    role: "core-support",
    ownedIntents: ["enighet er ikke handling", "intensjons-atferdsgap"],
    coreSupportSlugs: [],
  },
  "ai-governance-i-praksis-01": {
    slug: "ai-governance-i-praksis-01",
    cluster: "ai-implementering",
    role: "core-support",
    ownedIntents: ["AI governance praksis", "human in the loop", "beslutningsrom AI"],
    coreSupportSlugs: [],
  },
  "bedre-data-beslutninger-tech-frokost-2026-08": {
    slug: "bedre-data-beslutninger-tech-frokost-2026-08",
    cluster: "crm-data",
    role: "secondary-support",
    ownedIntents: ["bedre data bedre beslutninger", "data drevet virksomhet"],
    coreSupportSlugs: [],
    relevantVidere: [
      articleLink("fra-data-til-beslutning-2026-09", {
        no: "Fra data til beslutning",
        en: "From data to decision",
      }),
      { href: "/prosjekter", label: { no: "AI-prosjekter", en: "AI projects" } },
      { href: "/consulting", label: { no: "Consulting", en: "Consulting" } },
    ],
  },
  "obf-2026-oppsummering-2026-09": {
    slug: "obf-2026-oppsummering-2026-09",
    cluster: "strategi-endring",
    role: "secondary-support",
    ownedIntents: [
      "OBF 2026 oppsummering",
      "The Human Edge oppsummering",
      "dømmekraft prioritering AI",
      "OBF 2027 Clarity",
    ],
    coreSupportSlugs: ["obf-2026-dag-2-2026-09", "obf-2026-dag-1-2026-09", "obf-2026-human-edge-2026-09"],
    relevantVidere: [
      articleLink("fornoyd-kunde-lojal-kunde-2026-09", {
        no: "Les også: En fornøyd kunde er ikke nødvendigvis en lojal kunde",
        en: "Read also: A satisfied customer is not necessarily a loyal customer",
      }),
      articleLink("obf-2026-dag-2-2026-09", {
        no: "Les også: Refleksjoner fra dag 2 på OBF 2026",
        en: "Read also: Reflections from day 2 at OBF 2026",
      }),
      articleLink("obf-2026-dag-1-2026-09", {
        no: "Les også: Refleksjoner fra dag 1 på OBF 2026",
        en: "Read also: Reflections from day 1 at OBF 2026",
      }),
      { href: "https://www.obforum.com/", label: { no: "Oslo Business Forum", en: "Oslo Business Forum" } },
    ],
  },
  "obf-2026-dag-2-2026-09": {
    slug: "obf-2026-dag-2-2026-09",
    cluster: "strategi-endring",
    role: "secondary-support",
    ownedIntents: [
      "OBF 2026 dag 2",
      "dømmekraft og kapasitet",
      "Ståle Solbakken lagprestasjon",
      "AI og beslutninger",
      "OBF 2027 Clarity",
    ],
    coreSupportSlugs: ["obf-2026-oppsummering-2026-09", "obf-2026-dag-1-2026-09", "obf-2026-human-edge-2026-09"],
    relevantVidere: [
      articleLink("obf-2026-oppsummering-2026-09", {
        no: "Les også: Når scenelyset slukkes – oppsummering OBF 2026",
        en: "Read also: When the stage lights go out – OBF 2026 summary",
      }),
      articleLink("obf-2026-dag-1-2026-09", {
        no: "Les også: Refleksjoner fra dag 1 på OBF 2026",
        en: "Read also: Reflections from day 1 at OBF 2026",
      }),
      articleLink("fra-strategi-til-gjennomforing-2026-09", {
        no: "Les også: Fra strategi til gjennomføring",
        en: "Read also: From strategy to execution",
      }),
      { href: "/consulting", label: { no: "Se consulting-tilbud", en: "See consulting offerings" } },
    ],
  },
  "obf-2026-dag-1-2026-09": {
    slug: "obf-2026-dag-1-2026-09",
    cluster: "strategi-endring",
    role: "secondary-support",
    ownedIntents: [
      "OBF 2026 dag 1",
      "Gary Hamel ledelse",
      "human beings as resourceful",
      "teknologi og ledelse",
      "transformasjon og AI",
    ],
    coreSupportSlugs: ["obf-2026-oppsummering-2026-09", "obf-2026-dag-2-2026-09", "obf-2026-human-edge-2026-09", "fra-strategi-til-gjennomforing-2026-09"],
    relevantVidere: [
      articleLink("obf-2026-oppsummering-2026-09", {
        no: "Les også: Når scenelyset slukkes – oppsummering OBF 2026",
        en: "Read also: When the stage lights go out – OBF 2026 summary",
      }),
      articleLink("obf-2026-dag-2-2026-09", {
        no: "Les også: Refleksjoner fra dag 2 på OBF 2026",
        en: "Read also: Reflections from day 2 at OBF 2026",
      }),
      articleLink("obf-2026-human-edge-2026-09", {
        no: "Les også: OBF 2026 – The Human Edge (forventninger)",
        en: "Read also: OBF 2026 – The Human Edge (expectations)",
      }),
      articleLink("fra-strategi-til-gjennomforing-2026-09", {
        no: "Les også: Fra strategi til gjennomføring",
        en: "Read also: From strategy to execution",
      }),
      { href: "/consulting", label: { no: "Se consulting-tilbud", en: "See consulting offerings" } },
    ],
  },
  "obf-2026-human-edge-2026-09": {
    slug: "obf-2026-human-edge-2026-09",
    cluster: "strategi-endring",
    role: "secondary-support",
    ownedIntents: [
      "Oslo Business Forum 2026",
      "The Human Edge",
      "AI hype til forretningsverdi",
      "lederrolle og AI",
    ],
    coreSupportSlugs: ["obf-2026-oppsummering-2026-09", "obf-2026-dag-2-2026-09", "obf-2026-dag-1-2026-09", "fra-strategi-til-gjennomforing-2026-09", "obf-2025-big-shift-01"],
    relevantVidere: [
      articleLink("obf-2026-oppsummering-2026-09", {
        no: "Les også: Når scenelyset slukkes – oppsummering OBF 2026",
        en: "Read also: When the stage lights go out – OBF 2026 summary",
      }),
      articleLink("obf-2026-dag-2-2026-09", {
        no: "Les også: Refleksjoner fra dag 2 på OBF 2026",
        en: "Read also: Reflections from day 2 at OBF 2026",
      }),
      articleLink("obf-2026-dag-1-2026-09", {
        no: "Les også: Refleksjoner fra dag 1 på OBF 2026",
        en: "Read also: Reflections from day 1 at OBF 2026",
      }),
      articleLink("obf-2025-big-shift-01", {
        no: "Les også: OBF 2025 – The Big Shift",
        en: "Read also: OBF 2025 – The Big Shift",
      }),
      articleLink("fra-strategi-til-gjennomforing-2026-09", {
        no: "Les også: Fra strategi til gjennomføring",
        en: "Read also: From strategy to execution",
      }),
      { href: "/consulting", label: { no: "Se consulting-tilbud", en: "See consulting offerings" } },
    ],
  },
  "fornoyd-kunde-lojal-kunde-2026-09": {
    slug: "fornoyd-kunde-lojal-kunde-2026-09",
    cluster: "kommersiell-salg",
    role: "secondary-support",
    ownedIntents: [
      "kundelojalitet",
      "kundeopplevelse",
      "tilfredshet vs lojalitet",
      "B2B kunderelasjon",
      "CRM og kundeopplevelse",
    ],
    coreSupportSlugs: [
      "crm-mer-enn-et-systemprosjekt-2026-09",
      "salgsledelse-i-praksis-2026-08",
      "obf-2026-oppsummering-2026-09",
    ],
    secondarySupportSlugs: ["de-beste-kommersielle-grepene-2026-09", "fra-data-til-beslutning-2026-09"],
    relevantVidere: [
      articleLink("crm-mer-enn-et-systemprosjekt-2026-09", {
        no: "Les også: CRM er mer enn et systemprosjekt",
        en: "Read also: CRM is more than a system project",
      }),
      articleLink("salgsledelse-i-praksis-2026-08", {
        no: "Les også: Salgsledelse i praksis",
        en: "Read also: Sales leadership in practice",
      }),
      articleLink("de-beste-kommersielle-grepene-2026-09", {
        no: "Les også: De beste kommersielle grepene",
        en: "Read also: The best commercial moves",
      }),
      articleLink("obf-2026-oppsummering-2026-09", {
        no: "Les også: Når scenelyset slukkes – oppsummering OBF 2026",
        en: "Read also: When the stage lights go out – OBF 2026 summary",
      }),
      articleLink("fra-data-til-beslutning-2026-09", {
        no: "Les også: Fra data til beslutning",
        en: "Read also: From data to decision",
      }),
      { href: "/consulting", label: { no: "Se consulting-tilbud", en: "See consulting offerings" } },
      { href: "/resultater", label: { no: "Se resultater", en: "See results" } },
      { href: "/erfaring", label: { no: "Se erfaring", en: "See experience" } },
    ],
  },
  "de-beste-kommersielle-grepene-2026-09": {
    slug: "de-beste-kommersielle-grepene-2026-09",
    cluster: "kommersiell-salg",
    role: "secondary-support",
    ownedIntents: [
      "salgsutvikling coaching",
      "proaktiv kundeutvikling",
      "feltcoaching salg",
      "AI salgstrening",
      "kommersiell transformasjon",
    ],
    coreSupportSlugs: ["salgsledelse-i-praksis-2026-08"],
    secondarySupportSlugs: ["predictive-sales-coach-01", "fornoyd-kunde-lojal-kunde-2026-09"],
    relevantVidere: [
      articleLink("salgsledelse-i-praksis-2026-08", {
        no: "Les også: Salgsledelse i praksis",
        en: "Read also: Sales leadership in practice",
      }),
      articleLink("fornoyd-kunde-lojal-kunde-2026-09", {
        no: "Les også: En fornøyd kunde er ikke nødvendigvis en lojal kunde",
        en: "Read also: A satisfied customer is not necessarily a loyal customer",
      }),
      { href: "https://pscv6-744893320985.europe-west2.run.app/", label: { no: "The Predictive Sales Coach (PSC)", en: "The Predictive Sales Coach (PSC)" } },
      { href: "/consulting", label: { no: "Se consulting-tilbud", en: "See consulting offerings" } },
    ],
  },
};

export const CORNERSTONE_SLUGS: readonly string[] = Object.values(FAGINNLEGG_AUTHORITY)
  .filter((entry) => entry.role === "cornerstone")
  .map((entry) => entry.slug);

const CORNERSTONE_SLUG_SET = new Set<string>(CORNERSTONE_SLUGS);

export function isFaginnleggCornerstone(slug: string): boolean {
  return CORNERSTONE_SLUG_SET.has(slug);
}

export function getFaginnleggAuthorityEntry(slug: string): FaginnleggAuthorityEntry | undefined {
  return FAGINNLEGG_AUTHORITY[slug];
}

export function getFaginnleggRelevantVidereOverride(slug: string): RelevantVidereLink[] | undefined {
  const links = FAGINNLEGG_AUTHORITY[slug]?.relevantVidere;
  if (!links?.length) return undefined;
  return links.filter((link) => {
    if (!link.href.startsWith("/faginnlegg/")) return true;
    return link.href.slice("/faginnlegg/".length) !== slug;
  });
}

/** Anbefalte artikler per lesesti (slug-id). */
export const LESESTI_ARTICLE_IDS = {
  rekrutterere: [
    "salgsledelse-i-praksis-2026-08",
    "fra-strategi-til-gjennomforing-2026-09",
    "psykologisk-trygghet-krav-2026-01",
    "ai-needs-first-tannklinikk-case-01",
  ],
  ledereKommersielle: [
    "fornoyd-kunde-lojal-kunde-2026-09",
    "de-beste-kommersielle-grepene-2026-09",
    "fra-data-til-beslutning-2026-09",
    "salgsledelse-i-praksis-2026-08",
    "crm-mer-enn-et-systemprosjekt-2026-09",
    "fra-strategi-til-gjennomforing-2026-09",
    "control-tower-verdikjede-ledelse-2026-08",
  ],
  aiInteresserte: [
    "ai-needs-first-tannklinikk-case-01",
    "praktisk-oppskrift-skalering-01",
    "ai-governance-i-praksis-01",
    "crm-mer-enn-et-systemprosjekt-2026-09",
  ],
} as const;
