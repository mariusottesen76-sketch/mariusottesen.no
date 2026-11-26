import type { KnowledgeCategory } from "./types";
import { resolveSiteTabIntent, siteTabKeyToSelectionHint, type SiteTabKey } from "./site-tab-intent";
import type { Lang } from "../../LanguageContext";
import {
  isAuthorshipQuestion,
  isExplicitArticleTopicQuestion,
  isHiringQuestion,
  isValueCreationQuestion,
} from "./information-needs";

export type SelectionIntent = {
  preferredCategories: KnowledgeCategory[];
  /** Extra score for tab ids containing these segments, e.g. "experience", "results". */
  tabHints: string[];
  /** Substrings to match in project slugs (without id prefix). */
  projectSlugHints: string[];
  /** If set, boost exact manifest id prefix match. */
  bookOrHub?: "book" | "hub:articles" | "hub:projects";
};

const PROJECT_SLUG_PHRASES: Array<{ pattern: RegExp; slugParts: string[] }> = [
  { pattern: /\bpredictive\s+sales\s+coach\b/i, slugParts: ["predictive", "sales", "coach"] },
  { pattern: /\b(smb\s*)?salgsflyt/i, slugParts: ["smb", "salgsflyt"] },
  { pattern: /\bflowsignal\b/i, slugParts: ["flowsignal"] },
  { pattern: /\bbilagsassistent\b/i, slugParts: ["bilagsassistent"] },
  { pattern: /\bcontrol\s+tower\b/i, slugParts: ["control", "tower"] },
  { pattern: /\brow\s+solutions\b/i, slugParts: ["row", "solutions"] },
  { pattern: /\bai\s+readiness\b/i, slugParts: ["ai", "readiness"] },
  { pattern: /\bai\s+laget\b/i, slugParts: ["ai", "laget"] },
  { pattern: /\bverdiskiftet\b/i, slugParts: [] },
  { pattern: /\b(ai\s+transformation|atvr|value\s+realization)\b/i, slugParts: ["ai", "transformation", "value"] },
  { pattern: /\b(event\s+planner)\b/i, slugParts: ["event", "planner"] },
  { pattern: /\bai\s+discovery\b/i, slugParts: ["ai", "discovery"] },
  { pattern: /\b(value\s+lab|oslo)\b/i, slugParts: ["ai", "value", "lab"] },
  { pattern: /\b(bilags|arkitektur\s+beslutnings)/i, slugParts: ["arkitektur", "beslutningsstotte"] },
  { pattern: /\bmariusottesen\.?no|website\s+project\b/i, slugParts: ["mariusottesen"] },
  { pattern: /\b(dental|tannklinikk|skøyen)/i, slugParts: ["skoyenasen", "tannklinikk"] },
  { pattern: /\b(innsiktsagent|opportunity\s+agent)\b/i, slugParts: ["innsikts", "opportunity"] },
];

export function inferSelectionIntent(question: string, lang: Lang = "no"): SelectionIntent {
  const q = question.toLowerCase();
  const preferredCategories: KnowledgeCategory[] = [];
  const tabHints: string[] = [];
  let bookOrHub: SelectionIntent["bookOrHub"];
  const projectSlugHints: string[] = [];

  const siteTab = resolveSiteTabIntent(question, lang);
  if (siteTab) {
    tabHints.push(siteTabKeyToSelectionHint(siteTab.key));
    if (siteTab.key === "articles") {
      preferredCategories.push("hub", "article");
      bookOrHub = "hub:articles";
    } else if (siteTab.key === "projects") {
      preferredCategories.push("hub", "project");
      bookOrHub = "hub:projects";
    } else if (siteTab.key === "book") {
      preferredCategories.push("book");
      bookOrHub = "book";
    } else if (siteTab.key === "references") {
      preferredCategories.push("references");
    } else if (siteTab.key === "cv") {
      preferredCategories.push("cv");
    } else {
      const tabLike: SiteTabKey[] = [
        "home",
        "experience",
        "results",
        "consulting",
        "contact",
      ];
      if (tabLike.includes(siteTab.key)) {
        preferredCategories.push(siteTab.key === "home" ? "profile" : (siteTab.key as KnowledgeCategory));
      }
    }
  }

  if (/\b(erfaring|experience|franzefoss|norengros|arbeidsgiver|employer|lede\w*|leder\w*|p\/l|teamutvikling)\b/i.test(q)) {
    preferredCategories.push("experience", "cv", "results");
    tabHints.push("experience", "results", "cv");
  }
  if (/\b(resultat\w*|results?|proof\s+point|salgsvekst|growth)\b/i.test(q)) {
    preferredCategories.push("results", "experience");
    tabHints.push("results");
  }
  if (/\b(lederroller|roller|roles|stilling|stillinger)\b/i.test(q)) {
    preferredCategories.push("cv", "profile", "experience");
    tabHints.push("cv", "home");
  }
  if (
    /\b(personalansvar|personal\s+ansvar|people\s+(management|leadership|responsibility)|personal-\s*og\s+resultatansvar)\b/i.test(
      q
    )
  ) {
    preferredCategories.push("profile", "cv", "experience");
    tabHints.push("home", "cv", "experience");
  }
  if (isValueCreationQuestion(question)) {
    preferredCategories.push("profile", "results", "consulting", "experience");
    tabHints.push("home", "results", "consulting", "experience");
  }
  if (isHiringQuestion(question)) {
    preferredCategories.push("profile", "cv", "experience", "results", "references");
    tabHints.push("home", "cv", "experience", "references");
  }
  if (isAuthorshipQuestion(question)) {
    preferredCategories.push("hub", "article", "book");
    tabHints.push("articles");
    bookOrHub = "hub:articles";
    if (/\bverdiskaping|verdiskiftet|value\s+creation\b/i.test(q)) {
      preferredCategories.unshift("book");
    }
  }
  if (isExplicitArticleTopicQuestion(question)) {
    preferredCategories.push("hub", "article");
    tabHints.push("articles");
    bookOrHub = "hub:articles";
  }
  if (
    /\b(hjelpe|hjelper|bidra|bistå|help)\b.*\b(virksomhet|bedrift|business|selskap|organisasjon|company|us)\b/i.test(
      q
    ) ||
    /\bhow\s+can\s+marius\s+help\b/i.test(q)
  ) {
    preferredCategories.push("consulting", "profile");
    tabHints.push("consulting", "home");
  }
  if (/\b(consulting|moc|rådgiv|advisory|coaching|workshop|crm|salgscoaching|konsulenttjenester|tjenester)\b/i.test(q)) {
    preferredCategories.push("consulting");
    tabHints.push("consulting");
  }
  if (
    /\b(praktiske?\s+ai|ai-løsninger|ai\s+solutions|practical\s+ai)\b/i.test(q) &&
    /\b(utvikle|bygge|kan\s+marius|develop|build|lage)\b/i.test(q)
  ) {
    preferredCategories.push("consulting", "results", "project");
    tabHints.push("consulting", "results", "projects");
  }
  if (/\b(kontakt\w*|contact\w*|skjema|collaboration|samarbeid|nå\s+marius|henvendelse|get\s+in\s+touch)\b/i.test(q)) {
    preferredCategories.push("contact", "consulting");
    tabHints.push("contact");
  }
  if (/\b(cv[\s-]?en|cven|cv\b|stilling|rekrutt|education|utdanning|c-level|ceo\s+role|curriculum|resume)\b/i.test(q)) {
    preferredCategories.push("cv", "experience");
    tabHints.push("cv");
  }
  if (/\b(referanser|referanse(r|ne)?|references?|testimonials?|anbefaling(er)?|endorsements?)\b/i.test(q)) {
    preferredCategories.push("references");
    tabHints.push("references");
  }
  if (/\b(bok|book|verdiskiftet)\b/i.test(q)) {
    preferredCategories.push("book");
    bookOrHub = "book";
  }
  if (
    (/\b(faginnlegg|innsikt|insights|articles?\b|artikkel\b.*\b(om|about)|governance)\b/i.test(q) &&
      !/\bprosjekt/i.test(q)) ||
    tabHints.includes("articles")
  ) {
    preferredCategories.push("article", "hub");
    bookOrHub = "hub:articles";
  }
  if (/\b(prosjekt|projects|portefølje|portfolio|prosjekter)\b/i.test(q) && !/\b(strategi\s+og\s+gjennomføring)/i.test(q)) {
    preferredCategories.push("project", "hub");
    bookOrHub = bookOrHub ?? "hub:projects";
  }
  if (
    /\b(hvilke|which|what)\b/i.test(q) &&
    /\b(ai|verktøy|tools|apper|apps|prosjekter|projects)\b/i.test(q) &&
    /\b(utviklet|developed|bygget|built|laget|har\s+marius)\b/i.test(q)
  ) {
    preferredCategories.push("hub", "project");
    tabHints.push("projects");
    bookOrHub = bookOrHub ?? "hub:projects";
  }
  if (
    /\b(marius|hvem\s+er|who\s+is|kommersiell\s+leder|commercial\s+leadership)\b/i.test(q) &&
    tabHints.length === 0 &&
  !/\b(hvilke|which)\b.*\b(ai|prosjekt|project|verktøy|tools)\b/i.test(q)
  ) {
    preferredCategories.push("profile", "experience", "cv");
    tabHints.push("home");
  }
  if (/\b(strategi\s+og\s+gjennomføring)\b/i.test(q) && !/\bprosjektoppgave/i.test(q)) {
    preferredCategories.push("consulting", "profile");
    tabHints.push("consulting", "home");
  }

  for (const rule of PROJECT_SLUG_PHRASES) {
    if (rule.pattern.test(question)) {
      if (tabHints.includes("articles") && rule.slugParts.some((p) => /innsikt/i.test(p))) continue;
      preferredCategories.push("project");
      projectSlugHints.push(...rule.slugParts);
      if (/\bverdiskiftet\b/i.test(question)) bookOrHub = "book";
    }
  }

  return {
    preferredCategories: [...new Set(preferredCategories)],
    tabHints,
    projectSlugHints,
    bookOrHub,
  };
}

export function projectSlugMatches(slug: string, hints: string[]): boolean {
  if (hints.length === 0) return false;
  const norm = slug.toLowerCase();
  return hints.every((h) => norm.includes(h.toLowerCase()));
}