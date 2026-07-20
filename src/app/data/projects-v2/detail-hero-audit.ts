/**
 * Status for hero-/bannerbilder (3:1) på detaljsider.
 * Oppdateres ved migrering — ingen automatisk generering av nye bilder.
 */
export type DetailHeroAuditEntry = {
  route: string;
  projectId: string;
  heroImage: string;
  aspectNote: string;
  objectPosition: string;
  fit: "cover" | "contain";
  needsNewDetailHero: boolean;
  notes: string;
};

export const detailHeroAudit: DetailHeroAuditEntry[] = [
  {
    route: "/control-tower",
    projectId: "control-tower",
    heroImage: "/images/control-tower-hjemmeside-bak.png?v=20260720",
    aspectNote: "Horisontalt banner — 3:1 (1024×341 px) med cover",
    objectPosition: "center",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "Control Tower banner med prosessflyt og fyrtårn.",
  },
  {
    route: "/ai-transformation-value-realization",
    projectId: "ai-transformation-value-realization",
    heroImage: "/images/ai-transformation-value-realization-hero.png?v=20260721",
    aspectNote: "Horisontalt banner — transformasjonsreise og verdirealisering",
    objectPosition: "center",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "Oppdatert horisontalt hjemmesidebanner med AI-transformasjonsreisen og verdirealiseringsmodell.",
  },
  {
    route: "/psc",
    projectId: "predictive-sales-coach-2026",
    heroImage: "/images/predictive-sales-coach-hero.png?v=20260719b",
    aspectNote: "Horisontalt banner — 3:1 landscape for detaljside",
    objectPosition: "center",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "Produsert PSC-detaljbanner (1024×341 px, ca. 3:1).",
  },
  {
    route: "/flowsignal",
    projectId: "flowsignal-2026-05",
    heroImage: "/images/flowsignal-hero.png?v=20260719",
    aspectNote: "Horisontalt banner — 3:1 landscape for detaljside",
    objectPosition: "center",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "Produsert FlowSignal-detaljbanner i 3:1-format.",
  },
  {
    route: "/ai-readiness-scan",
    projectId: "ai-readiness-scan-2026-06",
    heroImage: "/images/ai-readiness-scan-hero.png?v=20260719",
    aspectNote: "Horisontalt banner — 3:1 landscape for detaljside",
    objectPosition: "center",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "Produsert AI Readiness Scan-detaljbanner (1024×341 px, ca. 3:1).",
  },
  {
    route: "/salgsflyt-sjekken",
    projectId: "smb-salgsflyt-sjekken-2026",
    heroImage: "/images/salgsflyt-sjekken-hero.png?v=20260720",
    aspectNote: "Horisontalt banner — 3:1 landscape for detaljside",
    objectPosition: "center",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "SMB Salgsflyt-sjekken detaljbanner (1024×341 px, ca. 3:1).",
  },
  {
    route: "/strategisk-ai-implementering",
    projectId: "prosjektoppgave-strategisk-implementering-2026",
    heroImage: "/images/strategisk-ai-implementering-hero.png?v=20260719",
    aspectNote: "Horisontalt banner — 3:1 landscape for detaljside",
    objectPosition: "center",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "Workshop-/presentasjonsbilde i 3:1-format (1024×341 px).",
  },
  {
    route: "/skoyenasen-tannklinikk",
    projectId: "skoyenasen-tannklinikk-2026",
    heroImage: "/images/skoyenasen-tannklinikk-hero.png?v=20260719",
    aspectNote: "Horisontalt banner — 3:1 landscape for detaljside",
    objectPosition: "center",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "Skøyenåsen Tannklinikk detaljbanner (1024×341 px). Oversikt på /prosjekter beholder vertikal forgrunn + landscape bak.",
  },
  {
    route: "/mariusottesen-nettside",
    projectId: "mariusottesen-no-2025",
    heroImage: "/images/mariusottesen-nettside-hero.png?v=20260719",
    aspectNote: "Horisontalt banner — 3:1 landscape for detaljside",
    objectPosition: "center",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "mariusottesen.no portefølje- og faginnleggbanner (ca. 3:1).",
  },
  {
    route: "/agentisk-arbeidsflyt",
    projectId: "ai-assistert-innsikts-og-opportunity-agent-2026",
    heroImage: "/images/agentisk-arbeidsflyt-hero.png?v=20260720",
    aspectNote: "Horisontalt banner — 3:1 landscape for detaljside",
    objectPosition: "center",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "Fra innsikt til handling — agentisk arbeidsflyt (1024×341 px, ca. 3:1).",
  },
  {
    route: "/ai-innsikts-og-innholdsmotor",
    projectId: "ai-assistert-innsikts-og-innholdsagent-2026",
    heroImage: "/images/ai-innsikts-og-innholdsmotor-hero.png?v=20260719",
    aspectNote: "Horisontalt banner — 3:1 landscape for detaljside",
    objectPosition: "center",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "Arbeidsflyt for kunnskap og innsikt (1024×341 px, ca. 3:1).",
  },
  {
    route: "/ai-arkitektur-beslutningsstotte",
    projectId: "ai-arkitektur-beslutningsstotte-2026",
    heroImage: "/images/ai-arkitektur-beslutningsstotte-hero.png?v=20260720",
    aspectNote: "Norsk kommersiell prioritering-dashboard — 2:1, frameless, max-h 600 px",
    objectPosition: "center",
    fit: "contain",
    needsNewDetailHero: true,
    notes: "1024×512 px. detailHeroMaxHeightPx 600 unngår topp-beskjæring ved full bredde.",
  },
  {
    route: "/ai-value-lab-oslo",
    projectId: "ai-value-lab-oslo-2026",
    heroImage: "/images/ai-value-lab-oslo-hero.png?v=20260720",
    aspectNote: "Logo + teamfoto — horisontalt banner i 3:1-ramme",
    objectPosition: "center",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "ai-value-lab-oslo-hero.png — logo venstre, teamfoto høyre.",
  },
];
