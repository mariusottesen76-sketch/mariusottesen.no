import type { AccessMode } from "../../data/projects-v2/types";
import type { ProjectV2Record } from "../../data/projects-v2/types";
import type { Lang } from "../../LanguageContext";
import { getStrategicPlatformByProsjektId } from "../../data/strategic-platform-projects";

/**
 * access_code / closed_demo / concept / no_live_solution: public landing pages stay in
 * the manifest, but excerpt scope is limited to approved overview fields (no operational how-to).
 */
const LIMITED_EXCERPT_ACCESS: ReadonlySet<AccessMode> = new Set([
  "access_code",
  "closed_demo",
  "concept",
  "no_live_solution",
]);

const OWNERSHIP_SUPPLEMENT: Record<string, { no: string; en: string }> = {
  "predictive-sales-coach-2026": {
    no: "Eierskap: utviklet av Marius Ottesen gjennom Marius Ottesen Consulting (MOC). Kan inngå i Row Solutions-rådgivning. Ikke et CRM-system, salgsprognoseverktøy eller autonom salgsagent — AI-basert salgstrening, kundesimulering og møteforberedelse.",
    en: "Ownership: developed by Marius Ottesen through Marius Ottesen Consulting (MOC). May form part of Row Solutions advisory work. Not a CRM system, sales forecasting tool or autonomous sales agent — AI-based sales training, customer simulation and meeting preparation.",
  },
  "smb-salgsflyt-sjekken-2026": {
    no: "Eierskap: utviklet og eid av Marius Ottesen Consulting (MOC). Kan benyttes i relevant Row-rådgivning uten at Row Solutions eier verktøyet.",
    en: "Ownership: developed and owned by Marius Ottesen Consulting (MOC). May be used in relevant Row Solutions advisory work without Row Solutions owning the tool.",
  },
  "ai-readiness-scan-2026-06": {
    no: "Eierskap: utviklet som del av Marius Ottesens egne prosjekter (Marius Ottesen Consulting). Kan tilbys via Row Solutions uten eierskapsoverføring.",
    en: "Ownership: developed as part of Marius Ottesen's own projects (Marius Ottesen Consulting). May be offered via Row Solutions without transferring ownership.",
  },
  "ai-discovery-2026-11": {
    no: "Utvikler/eier: analysemetode og verktøy utviklet av Thomas Holm — tilbudt gjennom Row Solutions. Ikke utviklet eller eid av Marius Ottesen Consulting.",
    en: "Developer/owner: analysis method and tool developed by Thomas Holm — offered through Row Solutions. Not developed or owned by Marius Ottesen Consulting.",
  },
};

export function usesLimitedProjectExcerpt(accessMode: AccessMode): boolean {
  return LIMITED_EXCERPT_ACCESS.has(accessMode);
}

function pushChunk(chunks: string[], text: string | undefined) {
  const trimmed = text?.trim();
  if (trimmed) chunks.push(trimmed);
}

function buildStrategicPlatformSupplement(project: ProjectV2Record, lang: Lang): string[] {
  if (project.strategicPlatformSlug !== "row-solutions") return [];
  const platform = getStrategicPlatformByProsjektId(project.id);
  if (!platform?.detail) return [];

  const lines: string[] = [];
  pushChunk(lines, platform.detail.kortFortalt?.body[lang]);

  const sections = platform.detail.contentSections ?? [];
  const team = sections.find((s) => s.heading[lang] === "Row-teamet" || s.heading.en === "The Row team");
  pushChunk(lines, team?.body[lang]);

  const aiLaget = sections.find((s) => s.heading[lang] === "AI-laget" || s.heading.en === "AI-laget");
  const aiLagetBody = aiLaget?.body[lang]?.trim();
  if (aiLagetBody) pushChunk(lines, `AI-laget: ${aiLagetBody}`);

  pushChunk(
    lines,
    "Kilde: mariusottesen.no/row-solutions (porteføljedokumentasjon). Offentlig tjenesteinnhold: rowsolutions.no."
  );
  return lines;
}

export function buildPublicProjectExcerptChunks(project: ProjectV2Record, lang: Lang): string[] {
  const chunks: string[] = [];
  pushChunk(chunks, project.seo.description[lang]);
  pushChunk(chunks, project.overviewIntroduction?.[lang]);
  pushChunk(chunks, project.overview.what[lang]);

  if (usesLimitedProjectExcerpt(project.accessMode)) {
    pushChunk(chunks, project.overview.challenge[lang]);
    pushChunk(chunks, project.overview.built[lang]);
    pushChunk(chunks, project.overview.relevance[lang]);
    pushChunk(chunks, project.overview.status[lang]);
  } else {
    pushChunk(chunks, project.overview.challenge[lang]);
    pushChunk(chunks, project.overview.built[lang]);
    pushChunk(chunks, project.overview.how[lang]);
    pushChunk(chunks, project.overview.relevance[lang]);
    pushChunk(chunks, project.overview.status[lang]);
    pushChunk(chunks, project.overview.development?.[lang]);
  }

  const ownership = OWNERSHIP_SUPPLEMENT[project.id];
  if (ownership) pushChunk(chunks, ownership[lang]);

  for (const line of buildStrategicPlatformSupplement(project, lang)) {
    pushChunk(chunks, line);
  }

  return chunks;
}