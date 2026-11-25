import type { KnowledgeCategory } from "./types";

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

export function inferSelectionIntent(question: string): SelectionIntent {
  const q = question.toLowerCase();
  const preferredCategories: KnowledgeCategory[] = [];
  const tabHints: string[] = [];
  let bookOrHub: SelectionIntent["bookOrHub"];
  const projectSlugHints: string[] = [];

  if (/\b(erfaring|experience|franzefoss|norengros|arbeidsgiver|employer|lede\w*|leder\w*|p\/l|teamutvikling)\b/i.test(q)) {
    preferredCategories.push("experience", "cv", "results");
    tabHints.push("experience", "results", "cv");
  }
  if (/\b(resultat|results|proof\s+point|salgsvekst|growth)\b/i.test(q)) {
    preferredCategories.push("results", "experience");
    tabHints.push("results");
  }
  if (/\b(consulting|moc|rådgiv|advisory|coaching|workshop|crm|salgscoaching|konsulenttjenester|tjenester)\b/i.test(q)) {
    preferredCategories.push("consulting");
    tabHints.push("consulting");
  }
  if (/\b(kontakt|contact|skjema|collaboration|samarbeid|nå\s+marius)\b/i.test(q)) {
    preferredCategories.push("contact", "consulting");
    tabHints.push("contact");
  }
  if (/\b(cv|stilling|roller|rekrutt|education|utdanning|c-level|ceo\s+role)\b/i.test(q)) {
    preferredCategories.push("cv", "experience");
    tabHints.push("cv");
  }
  if (/\b(referanse|references|testimonial)\b/i.test(q)) {
    preferredCategories.push("references");
    tabHints.push("references");
  }
  if (/\b(bok|book|verdiskiftet)\b/i.test(q)) {
    preferredCategories.push("book");
    bookOrHub = "book";
  }
  if (/\b(faginnlegg|articles?\b|artikkel\b.*\b(om|about)|governance)\b/i.test(q) && !/\bprosjekt/i.test(q)) {
    preferredCategories.push("article", "hub");
    bookOrHub = "hub:articles";
  }
  if (/\b(prosjekt|projects|portefølje|portfolio|prosjekter)\b/i.test(q) && !/\b(strategi\s+og\s+gjennomføring)/i.test(q)) {
    preferredCategories.push("project", "hub");
    bookOrHub = bookOrHub ?? "hub:projects";
  }
  if (/\b(marius|hvem\s+er|who\s+is|kommersiell\s+leder|commercial\s+leadership)\b/i.test(q) && tabHints.length === 0) {
    preferredCategories.push("profile", "experience", "cv");
    tabHints.push("home");
  }
  if (/\b(strategi\s+og\s+gjennomføring)\b/i.test(q) && !/\bprosjektoppgave/i.test(q)) {
    preferredCategories.push("consulting", "profile");
    tabHints.push("consulting", "home");
  }

  for (const rule of PROJECT_SLUG_PHRASES) {
    if (rule.pattern.test(question)) {
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