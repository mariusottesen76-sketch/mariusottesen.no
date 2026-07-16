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
    heroImage: "/images/ai-transformation-value-realization-hjemmeside-bak.png",
    aspectNote: "Horisontalt banner — egnet for 3:1 med cover",
    objectPosition: "center",
    fit: "cover",
    needsNewDetailHero: false,
    notes: "Produsert i bannerformat; kontrollert beskjæring OK.",
  },
  {
    route: "/psc",
    projectId: "predictive-sales-coach-2026",
    heroImage: "/images/predictive-sales-coach-hero.png",
    aspectNote: "Desktop-screenshot — midlertidig hero; produser 1800×600 px 3:1",
    objectPosition: "center top",
    fit: "contain",
    needsNewDetailHero: true,
    notes: "Midlertidig QA-screenshot. Anbefalt fil: predictive-sales-coach-hero.png i 3:1.",
  },
  {
    route: "/flowsignal",
    projectId: "flowsignal-2026-05",
    heroImage: "/images/flowsignal-hero.png",
    aspectNote: "Desktop-screenshot — midlertidig hero; produser 1800×600 px 3:1",
    objectPosition: "center top",
    fit: "contain",
    needsNewDetailHero: true,
    notes: "Midlertidig QA-screenshot. Anbefalt fil: flowsignal-hero.png i 3:1.",
  },
  {
    route: "/ai-readiness-scan",
    projectId: "ai-readiness-scan-2026-06",
    heroImage: "/images/ai-readiness-scan-hero.png",
    aspectNote: "Nettside-screenshot — midlertidig hero; produser 1800×600 px 3:1",
    objectPosition: "center",
    fit: "contain",
    needsNewDetailHero: true,
    notes: "Midlertidig asset. Anbefalt fil: ai-readiness-scan-hero.png i 3:1.",
  },
  {
    route: "/salgsflyt-sjekken",
    projectId: "smb-salgsflyt-sjekken-2026",
    heroImage: "/images/salgsflyt-sjekken-hero.png",
    aspectNote: "Nettside-screenshot — midlertidig hero; produser 1800×600 px 3:1",
    objectPosition: "center",
    fit: "contain",
    needsNewDetailHero: true,
    notes: "Midlertidig asset. Anbefalt fil: salgsflyt-sjekken-hero.png i 3:1.",
  },
];
