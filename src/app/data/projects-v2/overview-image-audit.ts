/**
 * Status for overview-bilder (1:3) på /prosjekter.
 * Oppdateres ved migrering — ingen automatisk generering av nye bilder.
 */
export type OverviewImageAuditEntry = {
  projectId: string;
  overviewImage: string;
  aspectNote: string;
  fit: "contain";
  needsNewOverviewImage: boolean;
  recommendedFilename: string;
  recommendedDimensions: string;
  notes: string;
};

export const overviewImageAudit: OverviewImageAuditEntry[] = [
  {
    projectId: "prosjektoppgave-strategisk-implementering-2026",
    overviewImage: "/images/prosjektoppgave-strategisk-implementering.png",
    aspectNote: "Horisontalt prosjektbilde — fyller ikke 1:3-flaten (232×696 px)",
    fit: "contain",
    needsNewOverviewImage: true,
    recommendedFilename: "strategisk-ai-implementering-hjemmeside.png",
    recommendedDimensions: "1200×3600 px",
    notes: "Midlertidig fallback med object-fit: contain. Lever vertikalt 1:3-bilde for ferdig løsning.",
  },
  {
    projectId: "skoyenasen-tannklinikk-2026",
    overviewImage: "/images/skoyenasen-tk.gif",
    aspectNote: "Liggende GIF — fyller ikke vertikal 1:3-flate; skaper stort tomrom over/under",
    fit: "contain",
    needsNewOverviewImage: true,
    recommendedFilename: "skoyenasen-tannklinikk-hjemmeside.png",
    recommendedDimensions: "1200×3600 px",
    notes:
      "IKKE ferdig løsning. Dagens bilde beholdes midlertidig uten destruktiv beskjæring eller strekk. Nytt vertikalt prosjektbilde må leveres manuelt.",
  },
  {
    projectId: "mariusottesen-no-2025",
    overviewImage: "/images/profil.jpg",
    aspectNote: "Portrettfoto — ikke 1:3; mye tomrom i vertikal ramme",
    fit: "contain",
    needsNewOverviewImage: true,
    recommendedFilename: "mariusottesen-nettside-hjemmeside.png",
    recommendedDimensions: "1200×3600 px",
    notes: "Midlertidig fallback med object-fit: contain. Lever vertikalt 1:3-bilde for ferdig løsning.",
  },
];
