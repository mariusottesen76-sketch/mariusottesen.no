import type { Lang } from "../LanguageContext";

/** Kilde for strukturert karriere — godkjent CV PDF (nov. 2026), ikke nettsidens utvalg på /erfaring. */
export const CAREER_FACTS_SOURCE_ID = "approved-cv-2026-11-04";

export type CareerPosition = {
  employer: string;
  title: string;
  /** Dokumentert progresjon i samme virksomhet, når relevant. */
  titleProgression?: string;
  periodDisplay: string;
  start: string;
  end: string;
  geographicScope?: string;
  peopleManagement?: string;
  plBudgetResult?: boolean;
  responsibilities: string[];
  documentedResults?: string[];
  /** Når stillingen ikke er gjensidig utelukkende med andre (f.eks. gründer + ansettelse). */
  parallelNote?: string;
};

const positionsNo: CareerPosition[] = [
  {
    employer: "Marius Ottesen Consulting (MOC)",
    title: "Kommersiell rådgiver og gründer",
    periodDisplay: "01.2026 – nå",
    start: "2026-01",
    end: "present",
    responsibilities: [
      "Kundeoppdrag innen salgsutvikling, coaching og lederforankring",
      "Kommersiell utvikling: salgsflyt, CRM, kundeoppfølging og arbeidsprosesser",
      "AI og beslutningsstøtte (bl.a. Salgsflyt-sjekken, AI Readiness Scan, Sales Coach, Control Tower)",
      "Nettsider, digitale kundereiser og faglig posisjonering på mariusottesen.no",
    ],
    documentedResults: [
      "Etablert rådgivningsvirksomhet med kundeoppdrag og egne løsninger innen salg, AI og transformasjon",
    ],
  },
  {
    employer: "MedDrop",
    title: "Gründer & utvikler",
    periodDisplay: "01.2018 – 06.2026",
    start: "2018-01",
    end: "2026-06",
    geographicScope: "Oslo",
    parallelNote:
      "Gründerrolle pågikk parallelt med faste lederstillinger (f.eks. Franzefoss 2024–2025, Norengros 2019–2023) — ikke gjensidig utelukkende ansettelser.",
    responsibilities: [
      "IoT-basert medisindispenser; utvikling fra idé til prototype",
      "Finansiering, IP-/patentvurderinger og teknisk arkitektur",
    ],
  },
  {
    employer: "Franzefoss Gjenvinning",
    title: "Nasjonal salgssjef",
    periodDisplay: "01.2024 – 12.2025",
    start: "2024-01",
    end: "2025-12",
    geographicScope: "Nasjonal",
    peopleManagement: "Leder- og personalansvar for salgsavdelingen med ca. 20 salgsrådgivere og markedsansvarlige",
    plBudgetResult: true,
    responsibilities: [
      "Nasjonal salgsstrategi, CRM, dashboards, digitale kundereiser",
      "Budsjetter, KPI-er og samhandling med 18 driftssteder",
    ],
    documentedResults: [
      "Bedret kapasitetsutnyttelse, tydeligere styringsmodell, resultatdrevne KPI-er og økte marginer",
    ],
  },
  {
    employer: "Norengros Johs. Olsen",
    title: "Salgssjef – forbruksvarer",
    periodDisplay: "01.2019 – 12.2023",
    start: "2019-01",
    end: "2023-12",
    geographicScope: "Regional (Oslo/Innlandet)",
    peopleManagement: "HR-ansvar for ca. 14 selgere (2019–2021) og ca. 9 (2022–2023)",
    plBudgetResult: true,
    responsibilities: [
      "Salg, budsjetter og KPI for selskapets største avdeling",
      "Initiativ «Forbruk Oslo 2.0», CRM-superbruker, endring i bemanning/IT/logistikk",
    ],
    documentedResults: ["67 % salgsvekst i perioden 2019–2023", "Bidrag mot NOK 1 mrd.-omsetningsmål"],
  },
  {
    employer: "Nilfisk",
    title: "Salgssjef",
    periodDisplay: "08.2017 – 12.2018",
    start: "2017-08",
    end: "2018-12",
    geographicScope: "Nasjonal",
    peopleManagement: "Ledet ca. 10 selgere inkl. rekruttering og opplæring",
    plBudgetResult: true,
    responsibilities: [
      "Lanseringer av nye produkter og operativt KAM for største kunde",
      "Forhandling av nasjonale anbud og rammeavtaler",
    ],
    documentedResults: ["Snudde negativ trend til vekst; overgikk mål"],
  },
  {
    employer: "Pelagia",
    title: "Senior Sales Manager",
    periodDisplay: "01.2016 – 09.2017",
    start: "2016-01",
    end: "2017-09",
    geographicScope: "Europa, USA og Asia",
    responsibilities: ["Pelagisk eksport, salg, markedsføring, logistikk og partnerskap"],
  },
  {
    employer: "Falck Nutec",
    title: "Key Account Manager & senior rådgiver",
    periodDisplay: "10.2013 – 12.2015",
    start: "2013-10",
    end: "2015-12",
    geographicScope: "Norge og Norden",
    responsibilities: ["Kontrakter, anbud og rammeavtaler for store kunder; nye produkttilbud"],
  },
  {
    employer: "Assessit",
    title: "Senior HR-konsulent / senior rådgiver",
    periodDisplay: "02.2012 – 11.2013",
    start: "2012-02",
    end: "2013-11",
    geographicScope: "Regional",
    responsibilities: ["Executive search, rekruttering og leder-/organisasjonsutvikling"],
  },
  {
    employer: "Mundipharma",
    title: "Business Unit Manager / Brand Manager (senior rolle)",
    titleProgression: "Distriktssjef → Product Manager → Business Unit Manager / Brand Manager",
    periodDisplay: "11.2001 – 03.2012",
    start: "2001-11",
    end: "2012-03",
    geographicScope: "Nasjonal",
    peopleManagement: "Nasjonalt salgsteam med fullt HR-ansvar",
    plBudgetResult: true,
    responsibilities: [
      "Nasjonal salg og markedsstrategi",
      "Internasjonale leder- og produktgrupper",
      "Lansering og kommersialisering",
    ],
    documentedResults: [
      "Lanserte 4 strategisk viktige produkter",
      "Høyest global vekst og omsetning i konsernet i perioden",
      "EU PR-pris; nominert «Årets unge leder»",
    ],
  },
  {
    employer: "Hydro Texaco, Stibolt-Norge, T. T. Shop og VBTK",
    title: "Salgsrepresentant / assisterende butikksjef / tennistrener",
    periodDisplay: "1993 – 2000",
    start: "1993",
    end: "2000",
    responsibilities: ["Salg og markedsføring; leder- og treningserfaring"],
  },
];

const positionsEn: CareerPosition[] = positionsNo.map((p) => ({
  ...p,
  parallelNote: p.parallelNote
    ? "Founder role ran in parallel with permanent leadership positions (e.g. Franzefoss 2024–2025, Norengros 2019–2023) — not mutually exclusive full-time employments."
    : undefined,
}));

/** B — erfaringstyper (ikke formelle stillingstitler). */
export const CAREER_EXPERIENCE_TYPES: Record<Lang, string[]> = {
  no: [
    "Nasjonal salgsledelse",
    "Regional salgsledelse",
    "Kommersiell ledelse og P/L-ansvar",
    "Personal- og HR-ansvar i salgsorganisasjoner",
    "Forretningsutvikling og transformasjon",
    "Internasjonalt salg (Europa, USA, Asia)",
    "Key account og rammeavtaler",
    "Executive search og lederutvikling (rådgivning)",
    "Kommersiell rådgivning, AI og digitale kundereiser",
    "Gründer og produktutvikling (medtech)",
  ],
  en: [
    "National sales leadership",
    "Regional sales leadership",
    "Commercial leadership and P&L accountability",
    "People and HR responsibility in sales organisations",
    "Business development and transformation",
    "International sales (Europe, USA, Asia)",
    "Key account and framework agreements",
    "Executive search and leadership development (advisory)",
    "Commercial advisory, AI and digital customer journeys",
    "Founder and product development (medtech)",
  ],
};

export const CAREER_EDUCATION: Record<Lang, string[]> = {
  no: [
    "Handelshøyskolen BI: Generative AI for Business (masterkurs, 2026, karakter A)",
    "Handelshøyskolen BI: Executive Master of Management (2011–2015), fordypning strategi/kommunikasjon",
    "University of Utah: Master of Science in Business Administration / Siviløkonom (1997–2001)",
    "University of Oslo: Sosialøkonomi grunnfag og Ex. Philosophicum (1995–1997)",
  ],
  en: [
    "BI Norwegian Business School: Generative AI for Business (master's course, 2026, grade A)",
    "BI Norwegian Business School: Executive Master of Management (2011–2015)",
    "University of Utah: Master of Science in Business Administration (1997–2001)",
    "University of Oslo: foundation courses in economics and Ex. Philosophicum (1995–1997)",
  ],
};

export function getCareerPositions(lang: Lang): CareerPosition[] {
  return lang === "en" ? positionsEn : positionsNo;
}

export function getDistinctEmployers(lang: Lang): string[] {
  return getCareerPositions(lang).map((p) => p.employer);
}

export function formatCareerInventoryPlain(lang: Lang): string {
  const positions = getCareerPositions(lang);
  const lines = positions.map((p) => {
    const title = p.titleProgression ? `${p.titleProgression} (${p.title})` : p.title;
    return `${p.employer}: ${title}, ${p.periodDisplay}`;
  });
  const overlap =
    lang === "no"
      ? "Merk: MedDrop og MOC kan overlappe med andre roller; se karriereoppføring for parallell-perioder."
      : "Note: MedDrop and MOC may overlap other roles; see career entries for parallel periods.";
  const types = CAREER_EXPERIENCE_TYPES[lang].join("; ");
  return [...lines, overlap, lang === "no" ? `Erfaringstyper (utvalg): ${types}` : `Experience types (selection): ${types}`].join(
    "\n"
  );
}