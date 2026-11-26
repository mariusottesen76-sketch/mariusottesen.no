import { getAllProjectV2Records } from "../../data/projects-v2/registry";
import type { Lang } from "../../LanguageContext";
import type { AccessMode, ProjectV2Record } from "../../data/projects-v2/types";

const MOC_OWNED_IDS = new Set([
  "predictive-sales-coach-2026",
  "smb-salgsflyt-sjekken-2026",
  "ai-readiness-scan-2026-06",
]);

const OTHER_DEVELOPER: Record<string, { no: string; en: string }> = {
  "ai-discovery-2026-11": {
    no: "Utviklet av Thomas Holm (tilbudt via Row Solutions) — ikke Marius/MOC.",
    en: "Developed by Thomas Holm (offered via Row Solutions) — not Marius/MOC.",
  },
};

function manifestProjects(): ProjectV2Record[] {
  return getAllProjectV2Records().filter(
    (p) =>
      p.seo.canonicalPath &&
      !p.seo.canonicalPath.startsWith("/prosjekter") &&
      p.seo.canonicalPath !== "/faginnlegg"
  );
}

function accessLabel(mode: AccessMode, lang: Lang): string {
  const labels: Record<AccessMode, { no: string; en: string }> = {
    public: { no: "publisert/live", en: "published/live" },
    access_code: { no: "demo med tilgangskode", en: "access-code demo" },
    closed_demo: { no: "lukket demo", en: "closed demo" },
    concept: { no: "konsept/prototype", en: "concept/prototype" },
    no_live_solution: { no: "ikke live løsning", en: "no live solution" },
    external_destination: { no: "ekstern destinasjon", en: "external destination" },
  };
  return labels[mode][lang];
}

function shortTitle(project: ProjectV2Record, lang: Lang): string {
  return project.seo.title[lang].split("|")[0]?.trim() ?? project.slug;
}

function sortProjects(projects: ProjectV2Record[]): ProjectV2Record[] {
  const rank = (id: string): number => {
    if (MOC_OWNED_IDS.has(id)) return 0;
    if (OTHER_DEVELOPER[id]) return 2;
    return 1;
  };
  return [...projects].sort((a, b) => {
    const dr = rank(a.id) - rank(b.id);
    if (dr !== 0) return dr;
    return shortTitle(a, "no").localeCompare(shortTitle(b, "no"));
  });
}

/** Godkjent, strukturert prosjektoversikt for chatbot — ikke en hardkodet svarblokk. */
export function buildPortfolioHubExcerpt(lang: Lang): string {
  const projects = sortProjects(manifestProjects());
  const mocLines: string[] = [];
  const mariusLines: string[] = [];
  const otherLines: string[] = [];

  for (const p of projects) {
    const title = shortTitle(p, lang);
    const maturity = accessLabel(p.accessMode, lang);
    const line = `${title} (${maturity})`;
    const other = OTHER_DEVELOPER[p.id]?.[lang];
    if (other) {
      otherLines.push(`• ${line} — ${other}`);
    } else if (MOC_OWNED_IDS.has(p.id)) {
      mocLines.push(`• ${line} — utviklet/eid via Marius Ottesen Consulting (MOC).`);
    } else {
      mariusLines.push(`• ${line} — dokumentert på mariusottesen.no.`);
    }
  }

  if (lang === "no") {
    return [
      "Godkjent oversikt over AI-prosjekter, apper, plattformer og arbeidsflyter på mariusottesen.no. Dette er ikke en uttømmende hardkodet liste i chatboten — detaljer finnes på hver prosjektside.",
      "",
      "Verktøy utviklet som del av Marius Ottesens egne prosjekter (MOC):",
      ...mocLines,
      "",
      "Øvrige dokumenterte prosjekter og plattformer (Marius / portefølje):",
      ...mariusLines,
      "",
      "Utviklet av andre (tilknyttet porteføljen/Row):",
      ...otherLines,
    ].join("\n");
  }

  return [
    "Approved overview of AI projects, apps, platforms and workflows on mariusottesen.no. Not an exhaustive hardcoded chatbot list — see each project page for detail.",
    "",
    "Tools developed as part of Marius Ottesen's own projects (MOC):",
    ...mocLines.map((l) => l.replace("utviklet/eid via", "developed/owned via")),
    "",
    "Other documented projects and platforms (Marius / portfolio):",
    ...mariusLines.map((l) => l.replace("dokumentert på", "documented on")),
    "",
    "Developed by others (linked portfolio/Row):",
    ...otherLines,
  ].join("\n");
}