import type { Lang } from "../../LanguageContext";
import type { AccessMode } from "../../data/projects-v2/types";
import type { SitePageKey } from "../locale-routes";

/** ISO date YYYY-MM-DD when known from content registers. */
export type KnowledgeIsoDate = string;

export type KnowledgeLang = Lang;

export type KnowledgeCategory =
  | "profile"
  | "experience"
  | "results"
  | "references"
  | "consulting"
  | "cv"
  | "contact"
  | "book"
  | "article"
  | "project"
  | "hub"
  | "legal";

export type KnowledgeExcerptLevel = "full" | "partial" | "metadata_only";

/** Stable pointer to structured data — never derived from user input. */
export type KnowledgeContentRef =
  | { kind: "site-page"; page: SitePageKey }
  | { kind: "references-hub" }
  | { kind: "book" }
  | { kind: "hub"; hub: "projects" | "articles" }
  | { kind: "legal-privacy" }
  | { kind: "article"; slug: string }
  | { kind: "project"; projectId: string };

export interface KnowledgeManifestEntry {
  /** Stable, unique id — used for lookup (`tab:home:no`, `article:{slug}:en`, …). */
  id: string;
  title: string;
  /** Absolute public URL on www.mariusottesen.no */
  url: string;
  lang: KnowledgeLang;
  description: string;
  category: KnowledgeCategory;
  publishedAt?: KnowledgeIsoDate;
  updatedAt?: KnowledgeIsoDate;
  canonicalUrl: string;
  /** Groups NO/EN pairs when both exist (`pair:tab:experience`). */
  localePairId?: string;
  /** Manifest id of the parallel language version, when indexed. */
  alternateSourceId?: string;
  /** When EN is missing, `enArticleStatus` explains article gaps. */
  enArticleStatus?: "full" | "unavailable";
  contentRef: KnowledgeContentRef;
  excerptLevel: KnowledgeExcerptLevel;
  /** Set for project sources — drives excerpt scope, not manifest inclusion. */
  projectAccessMode?: AccessMode;
}

export interface KnowledgeManifest {
  generatedAt: string;
  site: string;
  entries: KnowledgeManifestEntry[];
}

export interface KnowledgeExcerpt {
  sourceId: string;
  lang: KnowledgeLang;
  level: KnowledgeExcerptLevel;
  text: string;
}

export type KnowledgeGrounding = import("./grounding").KnowledgeGrounding;

export type KnowledgeGroundingAssessment = import("./grounding").KnowledgeGroundingAssessment;

export type KnowledgeLookupSuccess = {
  ok: true;
  entry: KnowledgeManifestEntry;
  excerpt: KnowledgeExcerpt;
  grounding: KnowledgeGroundingAssessment;
};

export type KnowledgeLookupFailure = {
  ok: false;
  code: "unknown_id" | "lang_unavailable";
  message: string;
};

export type KnowledgeLookupResult = KnowledgeLookupSuccess | KnowledgeLookupFailure;