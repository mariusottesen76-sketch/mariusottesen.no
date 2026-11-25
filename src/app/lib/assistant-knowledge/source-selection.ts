import type { Lang } from "../../LanguageContext";
import type { KnowledgeCategory } from "./types";
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
  moc: ["consulting"],
  kontakt: ["contact", "consulting"],
  contact: ["contact", "consulting"],
  cv: ["cv"],
  bok: ["book"],
  book: ["book", "book"],
  verdiskiftet: ["book"],
  faginnlegg: ["article", "hub"],
  article: ["article", "hub"],
  prosjekt: ["project", "hub"],
  project: ["project", "hub"],
  ai: ["project", "article", "results"],
  leder: ["profile", "experience", "cv"],
  rekrutt: ["cv", "profile", "contact"],
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
  if (/\b(kontakt|contact|dialog)\b/i.test(question)) {
    return [lang === "no" ? "tab:contact:no" : "tab:contact:en"];
  }
  if (/\b(consulting|moc|rådgiv)\b/i.test(question)) {
    return [lang === "no" ? "tab:consulting:no" : "tab:consulting:en"];
  }
  return [fallbacks[lang]];
}