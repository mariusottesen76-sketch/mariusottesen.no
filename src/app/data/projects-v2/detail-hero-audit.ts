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
    heroImage: "/images/control-tower-hjemmeside-bak.png",
    aspectNote: "Horisontalt banner — egnet for 3:1 med cover",
    objectPosition: "center",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "Produsert i bannerformat; kontrollert beskjæring OK.",
  },
  {
    route: "/ai-transformation-value-realization",
    projectId: "ai-transformation-value-realization",
    heroImage: "/images/ai-transformation-value-realization-hjemmeside.png",
    aspectNote: "Vertikalt 1:3 — ikke egnet for destruktiv 3:1-beskjæring",
    objectPosition: "center top",
    fit: "contain",
    needsNewDetailHero: true,
    notes: "Midlertidig contain-fallback. Produser nytt 1800×600 px 3:1 hero-bilde.",
  },
  {
    route: "/psc",
    projectId: "predictive-sales-coach-2026",
    heroImage: "—",
    aspectNote: "Ingen hero-bilde i PilotLanding i dag",
    objectPosition: "—",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "Ved hero-bilde: bruk ProjectHero + 3:1-standard.",
  },
  {
    route: "/flowsignal",
    projectId: "flowsignal-2026-05",
    heroImage: "—",
    aspectNote: "Ingen hero-bilde i PilotLanding i dag",
    objectPosition: "—",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "Ved hero-bilde: bruk ProjectHero + 3:1-standard.",
  },
  {
    route: "/salgsflyt-sjekken",
    projectId: "smb-salgsflyt-sjekken-2026",
    heroImage: "—",
    aspectNote: "Ingen hero-bilde i PilotLanding i dag",
    objectPosition: "—",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "Ved hero-bilde: bruk ProjectHero + 3:1-standard.",
  },
];
