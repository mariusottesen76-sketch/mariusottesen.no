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

/** Statisk grunnrecord — updatedAt kan overstyres ved resolveProjectDates(). */
export type ProjectV2BaseRecord = {
  id: string;
  slug: string;
  category: ProjectCategory;
  layoutVersion: "project_v2";
  accessMode: AccessMode;
  detailLevel: DetailLevel;
  /** Første offentlige publisering på mariusottesen.no (ISO YYYY-MM-DD). */
  publishedAt: string;
  /** Statisk prosjektoppdatering, eller satt dynamisk av resolveProjectDates(). */
  updatedAt?: string;
  /** Valgfri kort oppsummering av siste vesentlige endring (ikke vist på oversiktskort). */
  updateSummary?: LocalizedString;
  /**
   * Manuell dato for vesentlige nettsideendringer som ikke avledes fra innholdsdata.
   * Kun for mariusottesen-no-2025.
   */
  manualSiteUpdatedAt?: string;
  /**
   * @deprecated Redaksjonell dato — ikke bruk som publiseringskilde for project_v2.
   * Beholdes midlertidig for legacy og redaksjonell tekst (f.eks. «Løpende oppdatert»).
   */
  date: string;
  /**
   * @deprecated Redaksjonell visningsdato — ikke bruk som publiseringskilde for project_v2.
   */
  displayDate: LocalizedString;
  title: LocalizedString;
  subtitle: LocalizedString;
  statusLabel: LocalizedString;
  maturityLevel?: LocalizedString;
  overviewIntroduction: LocalizedString;
  overview: ProjectOverviewContent;
  overviewImage: string;
  overviewImageBackground?: string;
  detailHeroImage: string;
  detailHeroBackground?: string;
  detailHeroObjectPosition?: string;
  detailHeroAspectRatio?: string;
  detailHeroMaxWidthPx?: number;
  detailHeroMaxHeightPx?: number;
  /** Ingen ramme/bakgrunn rundt hero — for bilder som skal fløte rett på siden. */
  detailHeroFrameless?: boolean;
  needsNewOverviewImage?: boolean;
  needsNewDetailHero?: boolean;
  detailHeroMissing?: boolean;
  altText: LocalizedString;
  overviewImageFormat: OverviewImageFormat;
  detailDestination: string;
  liveSolutionUrl?: string;
  /** Når false: vis «Publisering pågår» i stedet for ekstern plattformlenke. Standard true hvis liveSolutionUrl finnes. */
  isLive?: boolean;
  externalDestinationLabel?: LocalizedString;
  playbackVideo?: {
    src: string;
    poster: string;
  };
  ctaLabels?: {
    overviewPrimary?: LocalizedString;
    overviewSecondary?: LocalizedString;
    detailPrimary?: LocalizedString;
    detailSecondary?: LocalizedString;
  };
  seo: ProjectSeo;
  strategicPlatformSlug?: StrategicPlatformSlug;
  editorialReviewRequired?: (keyof ProjectOverviewContent | "overviewIntroduction")[];
  applicationGroups?: ProjectApplicationGroup[];
};

/** Resolved record etter dynamisk datoberegning — brukes i UI og metadata. */
export type ProjectV2Record = ProjectV2BaseRecord;

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
