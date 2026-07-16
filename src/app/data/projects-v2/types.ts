import type { LocalizedString } from "../strategic-platform-projects/types";
import type { StrategicPlatformSlug } from "../strategic-platform-projects/types";

export type { LocalizedString };

export type ProjectCategory =
  | "strategic_platform"
  | "app_prototype"
  | "case_implementation"
  | "model_architecture"
  | "professional_initiative"
  | "video_communication";

export type AccessMode =
  | "public"
  | "access_code"
  | "closed_demo"
  | "concept"
  | "no_live_solution"
  | "external_destination";

export type LayoutVersion = "legacy" | "project_v2";

export type DetailLevel = "full" | "concise" | "external_destination";

export type OverviewImageFormat = "standard_1x3" | "legacy_other";

export type ProjectOverviewContent = {
  /** A. Hva prosjektet er */
  what: LocalizedString;
  /** B. Utfordringen */
  challenge: LocalizedString;
  /** C. Hva som er bygget eller utviklet */
  built: LocalizedString;
  /** D. Hvordan løsningen fungerer */
  how: LocalizedString;
  /** E. Relevans */
  relevance: LocalizedString;
  /** F. Status og modenhet */
  status: LocalizedString;
  /** G. Videreutvikling av løsningen */
  development: LocalizedString;
  /** H. Tilpasning til funksjoner og bransjer */
  adaptation: LocalizedString;
};

export type ProjectSeo = {
  title: LocalizedString;
  description: LocalizedString;
  ogImage: string;
  canonicalPath: string;
};

/** Demo-/anvendelseseksempler — fylles kun med godkjent prosjektspesifikt innhold senere. */
export type ProjectApplicationGroup = {
  heading: LocalizedString;
  items: LocalizedString[];
};

export type ProjectV2Record = {
  id: string;
  slug: string;
  category: ProjectCategory;
  layoutVersion: "project_v2";
  accessMode: AccessMode;
  detailLevel: DetailLevel;
  date: string;
  displayDate: LocalizedString;
  title: LocalizedString;
  subtitle: LocalizedString;
  statusLabel: LocalizedString;
  maturityLevel?: LocalizedString;
  overviewIntroduction: LocalizedString;
  overview: ProjectOverviewContent;
  overviewImage: string;
  /** Valgfritt bakgrunnsbilde bak hovedvisualiseringen (f.eks. 16:9 scene). */
  overviewImageBackground?: string;
  detailHeroImage: string;
  detailHeroBackground?: string;
  /** CSS object-position for hero-banner (f.eks. center, center top, 50% 35%). */
  detailHeroObjectPosition?: string;
  /** true = eksisterende bilde bør produseres på nytt i 1:3; vises med contain-fallback. */
  needsNewOverviewImage?: boolean;
  /** true = eksisterende bilde bør produseres på nytt i 3:1; vises med contain-fallback. */
  needsNewDetailHero?: boolean;
  /** Mangler dedikert 3:1 hero — bruker overview-bilde inntil nytt asset finnes. */
  detailHeroMissing?: boolean;
  altText: LocalizedString;
  overviewImageFormat: OverviewImageFormat;
  detailDestination: string;
  liveSolutionUrl?: string;
  externalDestinationLabel?: LocalizedString;
  seo: ProjectSeo;
  /** Detaljinnhold hentes fra strategic platform inntil egen v2-detail er migrert. */
  strategicPlatformSlug?: StrategicPlatformSlug;
  /** Felt som krever manuell redaksjonell gjennomgang før publisering. */
  editorialReviewRequired?: (keyof ProjectOverviewContent | "overviewIntroduction")[];
  /** Struktur for fremtidige demo-initiativer — tom = skjult seksjon. */
  applicationGroups?: ProjectApplicationGroup[];
};

export type ProjectMigrationEntry = {
  id: string;
  name: LocalizedString;
  category: ProjectCategory;
  layoutVersion: LayoutVersion;
  existingDetailPage?: string;
  recommendedDetailLevel: DetailLevel;
  accessMode: AccessMode;
  overviewImageFormat: OverviewImageFormat | "unknown";
  detailHeroMissing: boolean;
  missingOverviewFields: string[];
  editorialReviewRequired: boolean;
  recommendedMigrationOrder: number;
};
