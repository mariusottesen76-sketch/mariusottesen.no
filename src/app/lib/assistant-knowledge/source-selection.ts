import type { Lang } from "../../LanguageContext";
import type { KnowledgeCategory } from "./types";
import { inferSelectionIntent, projectSlugMatches } from "./selection-intent";
import { listKnowledgeManifestEntries } from "./manifest";

const STOP = new Set([
  "og",
  "i",
  "på",
  "for",
  "som",
  "det",
  "er",
  "en",
  "et",
  "the",
  "and",
  "for",
  "with",
  "what",
  "how",
  "who",
  "marius",
  "ottesen",
]);

const CATEGORY_KEYWORDS: Record<string, KnowledgeCategory[]> = {
  erfaring: ["experience", "cv"],
  experience: ["experience", "cv"],
  norengros: ["experience", "results", "cv"],
  franzefoss: ["experience", "results"],
  resultat: ["results", "experience"],
  results: ["results"],
  consulting: ["consulting"],
  moc: ["consulting", "project"],
  kontakt: ["contact", "consulting"],
  kontakter: ["contact", "consulting"],
  contact: ["contact", "consulting"],
  cv: ["cv"],
  bok: ["book"],
  book: ["book", "book"],
  verdiskiftet: ["book"],
  faginnlegg: ["article", "hub"],
  article: ["article", "hub"],
  prosjekt: ["project", "hub"],
  project: ["project", "hub"],
  rådgiv: ["consulting"],
  advisory: ["consulting"],
  workshop: ["consulting"],
  crm: ["consulting", "article"],
  utdanning: ["cv", "experience"],
  education: ["cv", "experience"],
  referanse: ["references"],
  references: ["references"],
  profil: ["profile"],
  profile: ["profile"],
  stilling: ["cv", "profile"],
  roller: ["cv"],
  roles: ["cv"],
  kommersiell: ["profile", "consulting", "cv"],
  commercial: ["profile", "consulting", "cv"],
  prosjekter: ["project", "hub"],
  projects: ["project", "hub"],
  predictive: ["project"],
  sales: ["project", "consulting"],
  coach: ["project", "book"],
  flowsigan: ["project"],
  flowsignal: ["project"],
  bilags: ["project"],
  salgsflyt: ["project"],
  linkedin: ["contact", "profile"],
  kontaktskjema: ["contact"],
  proof: ["results", "profile"],
  points: ["results"],
  leadership: ["profile", "experience", "cv"],
  psc: ["project"],
  atvr: ["project"],
  row: ["project", "external_reference"],
  rowsolutions: ["external_reference", "project"],
  tjenester: ["external_reference"],
  metoder: ["external_reference", "project"],
  innsikt: ["book", "external_reference", "project"],
  ai: ["project", "article", "results"],
  leder: ["profile", "experience", "cv"],
  rekrutt: ["cv", "profile", "contact"],
  personalansvar: ["profile", "cv", "experience", "results"],
  mundipharma: ["experience", "cv", "results"],
  bransje: ["experience", "cv"],
  bransjer: ["experience", "cv"],
  industries: ["experience", "cv"],
  gjenvinning: ["experience", "results"],
  avfall: ["experience"],
  undervist: ["profile", "cv"],
  underviser: ["profile", "cv"],
  handelshøyskolen: ["profile", "cv"],
};

function tokenize(question: string): string[] {
  return question
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .split(/\s+/)
    .filter((t) => t.length >= 3 && !STOP.has(t));
}

export function selectRelevantSourceIds(
  question: string,
  lang: Lang,
  limit = 3
): string[] {
  const tokens = tokenize(question);
  const qLower = question.toLowerCase();
  const intent = inferSelectionIntent(question);
  const entries = listKnowledgeManifestEntries().filter((e) => e.lang === lang);

  const scored = entries
    .map((entry) => {
      let score = 0;
      const hay = `${entry.title} ${entry.description} ${entry.id}`.toLowerCase();
      for (const token of tokens) {
        if (hay.includes(token)) score += 3;
        const cats = CATEGORY_KEYWORDS[token];
        if (cats?.includes(entry.category)) score += 4;
      }
      if (intent.preferredCategories.includes(entry.category)) {
        score += 5;
      }
      if (entry.category === "project") {
        const slugRaw = entry.id.replace(/^project:/, "").replace(/:(no|en)$/, "");
        const slug = slugRaw.replace(/-/g, " ");
        for (const token of tokens) {
          if (slug.includes(token)) score += 6;
        }
        if (projectSlugMatches(slugRaw, intent.projectSlugHints)) {
          score += 22;
        }
      }
      if (intent.bookOrHub === "book" && entry.id.startsWith("book:")) {
        score += 20;
      }
      if (intent.bookOrHub === "hub:articles" && entry.id === `hub:articles:${lang}`) {
        score += 16;
      }
      if (intent.bookOrHub === "hub:projects" && entry.id === `hub:projects:${lang}`) {
        score += intent.portfolioListing ? 34 : 16;
      }
      if (intent.portfolioListing) {
        if (entry.id.startsWith("tab:")) score -= 16;
        if (entry.category === "project") score += 6;
      }
      if (entry.id === `hub:articles:${lang}` && /\b(faginnlegg|articles?|artikkel)\b/i.test(qLower)) {
        score += 12;
      }
      if (entry.id === `hub:projects:${lang}` && /\b(prosjekter|projects|portefølje|portfolio)\b/i.test(qLower)) {
        score += 12;
      }
      if (entry.id.startsWith("tab:")) {
        for (const hint of intent.tabHints) {
          if (entry.id.includes(`:${hint}:`)) score += 16;
        }
        if (entry.id.includes(":experience:") && /\b(erfaring|experience|franzefoss|norengros)\b/i.test(qLower)) {
          score += 16;
        }
        if (entry.id.includes(":results:") && /\bresultat\w*/i.test(qLower)) {
          score += 16;
        }
        if (entry.id.includes(":consulting:") && /\b(hjelpe|hjelper|bidra|bistå|virksomhet|bedrift|consulting)\b/i.test(qLower)) {
          score += 18;
        }
        if (entry.id.includes(":home:") && /\b(hvem\s+er|who\s+is|kommersiell\s+leder)\b/i.test(qLower)) {
          score += 12;
        }
      }
      if (
        entry.category === "project" &&
        intent.tabHints.some((h) => h === "consulting" || h === "home" || h === "results") &&
        intent.projectSlugHints.length === 0 &&
        !/\b(prosjekter|projects|portefølje|portfolio|ai[-\s]?prosjekt)\b/i.test(qLower)
      ) {
        score -= 10;
      }
      if (
        entry.category === "article" &&
        intent.tabHints.length > 0 &&
        intent.bookOrHub !== "hub:articles"
      ) {
        score -= 6;
      }
      if (entry.category === "external_reference" && entry.id.startsWith("external:rowsolutions:")) {
        if (/\brow\s+solutions|rowsolutions\b/i.test(qLower)) score += 12;
        if (/\bfra\s+innsikt|innsikt\s+til\s+resultat|from\s+insight\s+to\s+results/i.test(qLower)) {
          if (entry.id.includes("fra-innsikt-til-resultater")) score += 22;
        }
        if (/\btjenester\b/i.test(qLower) && entry.id.includes(":tjenester:")) score += 18;
        if (/\bmetoder\b/i.test(qLower) && entry.id.includes(":metoder:")) score += 16;
        if (/\bai\s+discovery\b/i.test(qLower) && entry.id.includes("ai-discovery")) score += 20;
        if (/\bsalgsflyt/i.test(qLower) && entry.id.includes("smb-salgsflyt")) score += 18;
        if (/\breadiness\b/i.test(qLower) && entry.id.includes("ai-readiness")) score += 18;
        if (/\bpredictive\s+sales|\bpsc\b/i.test(qLower) && entry.id.includes("predictive-sales")) score += 18;
      }
      if (entry.category === "hub") score -= 2;
      if (entry.category === "legal") score -= 1;
      return { id: entry.id, score, category: entry.category };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));

  const ids = scored.slice(0, limit).map((s) => s.id);

  if (ids.length > 0) return ids;

  const fallbacks: Record<string, string> = {
    no: "tab:home:no",
    en: "tab:home:en",
  };
  if (/\b(kontakt\w*|contact\w*|dialog)\b/i.test(question)) {
    return [lang === "no" ? "tab:contact:no" : "tab:contact:en"];
  }
  if (/\b(consulting|moc|rådgiv)\b/i.test(question)) {
    return [lang === "no" ? "tab:consulting:no" : "tab:consulting:en"];
  }
  return [fallbacks[lang]];
}