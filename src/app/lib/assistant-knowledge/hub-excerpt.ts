import type { Lang } from "../../LanguageContext";
import { getAlleFaginnlegg, LEDELSE_KATEGORIER, AI_KATEGORI } from "../faginnlegg-data";
import { getTranslation } from "../../data/translations";
import { getIndexableProjectRecords } from "../project-locale-routes";
import { joinParagraphs } from "./text-utils";

/** Thematic overview for the Innsikt / articles hub — not full article bodies. */
export function buildArticlesHubOverviewText(lang: Lang): string {
  const intro = [getTranslation("fag.intro.1", lang), getTranslation("fag.bok.subtitle", lang)].filter(Boolean);
  const alle = getAlleFaginnlegg();
  const categoryCounts = new Map<string, number>();
  for (const a of alle) {
    const cat = a.kategori ?? (lang === "no" ? "Annet" : "Other");
    categoryCounts.set(cat, (categoryCounts.get(cat) ?? 0) + 1);
  }
  const themeParts: string[] = [];
  for (const c of [...LEDELSE_KATEGORIER]) {
    const n = categoryCounts.get(c);
    if (n) themeParts.push(lang === "no" ? `${c} (${n} artikler)` : `${c} (${n} articles)`);
  }
  const aiN = categoryCounts.get(AI_KATEGORI);
  if (aiN) themeParts.push(lang === "no" ? `${AI_KATEGORI} (${aiN} artikler)` : `${AI_KATEGORI} (${aiN} articles)`);

  const samples = alle
    .slice(0, 4)
    .map((a) => a.tittel[lang] ?? a.tittel.no)
    .filter(Boolean);

  return joinParagraphs(
    [
      ...intro,
      lang === "no"
        ? `Fanen «Innsikt» på /faginnlegg samler fagartikler og lesestier. Publiserte artikler på nettsiden: ${alle.length}. Hovedtemaer: ${themeParts.slice(0, 5).join("; ")}.`
        : `The Insights section at /en/articles collects articles and reading paths. Published articles on the site: ${alle.length}. Main themes: ${themeParts.slice(0, 5).join("; ")}.`,
      lang === "no"
        ? `Eksempler: ${samples.join("; ")}. Innholdet henger sammen med bokprosjektet VerdisKIftet.`
        : `Examples: ${samples.join("; ")}. The material connects to the VerdisKIftet book project.`,
    ],
    2_400
  );
}

/** Overview for AI & prosjekter hub. */
export function buildProjectsHubOverviewText(lang: Lang): string {
  const intro1 = getTranslation("prosjekter.intro.1", lang);
  const introGrid = getTranslation("prosjekter.intro.gridLead", lang);
  const indexable = getIndexableProjectRecords();
  const names = indexable
    .slice(0, 8)
    .map((p) => p.title[lang] ?? p.title.no ?? p.id)
    .filter(Boolean);

  return joinParagraphs(
    [
      intro1,
      introGrid,
      lang === "no"
        ? `Fanen «AI & prosjekter» på /prosjekter er en porteføljeoversikt med lenker til enkeltprosjekter (apper, plattformer, arbeidsflyter). ${indexable.length} prosjekter har offentlige sider. Eksempler: ${names.join("; ")}.`
        : `The AI & Projects tab at /en/projects is a portfolio overview linking to individual projects (apps, platforms, workflows). ${indexable.length} projects have public pages. Examples: ${names.join("; ")}.`,
    ],
    2_400
  );
}