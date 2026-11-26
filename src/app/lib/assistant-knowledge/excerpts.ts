import type { Lang } from "../../LanguageContext";
import { getProfilData } from "../../data/profil";
import { getErfaringData } from "../../data/erfaringInnhold";
import { getMocResultaterPunkter } from "../../data/moc-consulting-resultater";
import { getHovedpakker } from "../../data/consulting";
import { getDokumentasjonData } from "../../data/dokumentasjon";
import { getTranslation } from "../../data/translations";
import { BOK_PROSJEKT_COPY } from "../../data/bok-prosjekt-innhold";
import { getPrivacyPageContent } from "../../data/privacy-content";
import { referanserData } from "../../data/referanser";
import { getFaginnleggBySlug } from "../faginnlegg-data";
import { classifyFaginnleggEnBody } from "../faginnlegg-en-audit";
import { getProjectV2ById } from "../../data/projects-v2/registry";
import type { ProjectV2Record } from "../../data/projects-v2/types";
import type {
  KnowledgeContentRef,
  KnowledgeExcerpt,
  KnowledgeExcerptLevel,
  KnowledgeLang,
} from "./types";
import { ARTICLE_SUBSTANTIVE_MIN_CHARS } from "./grounding";
import { buildPublicProjectExcerptChunks } from "./project-excerpt-policy";
import { getRowExternalSourceByKey } from "./row-external-knowledge";
import { buildPortfolioHubExcerpt } from "./portfolio-hub-excerpt";
import { joinParagraphs, scrubSensitiveExcerptText, stripHtmlToPlainText, truncatePlainText } from "./text-utils";

const EXCERPT_MAX = 2_400;

function excerpt(
  sourceId: string,
  lang: KnowledgeLang,
  level: KnowledgeExcerptLevel,
  text: string
): KnowledgeExcerpt {
  return {
    sourceId,
    lang,
    level,
    text: scrubSensitiveExcerptText(truncatePlainText(text, EXCERPT_MAX)),
  };
}

function sitePageExcerpt(ref: Extract<KnowledgeContentRef, { kind: "site-page" }>, lang: Lang, sourceId: string): KnowledgeExcerpt {
  switch (ref.page) {
    case "home": {
      const p = getProfilData(lang);
      return excerpt(
        sourceId,
        lang,
        "partial",
        joinParagraphs(
          [
            p.ingress,
            p.intro,
            ...p.proofPoints.map((pt) => `Dokumentert resultat: ${pt}`),
            `Aktuelle lederroller (utvalg): ${p.roller.slice(0, 6).join(", ")}`,
            `Utdanning og videreutdanning: ${stripHtmlToPlainText(p.utdanning)}`,
            ...p.lederprofil.map((c) => `${c.title}: ${c.text}`),
            p.aiSeksjon,
          ],
          EXCERPT_MAX
        )
      );
    }
    case "experience": {
      const e = getErfaringData(lang);
      const employerIndex = e.jobs.map((j) => `${j.company} (${j.period})`).join("; ");
      const jobSnippets = e.jobs.slice(0, 4).map((j) => {
        const mandate = "mandate" in j && typeof j.mandate === "string" ? j.mandate : "";
        const results = "results" in j && typeof j.results === "string" ? j.results : "";
        return `${j.title} (${j.company}, ${j.period}): ${stripHtmlToPlainText(mandate)} ${stripHtmlToPlainText(results)}`.trim();
      });
      const tailJobs = e.jobs.slice(4).map((j) => `${j.title} (${j.company}, ${j.period})`);
      const otherSnippets = e.others.map((o) => `${o.area}: ${o.desc}`);
      return excerpt(
        sourceId,
        lang,
        "partial",
        joinParagraphs(
          [e.intro, `Arbeidsgivere: ${employerIndex}`, ...jobSnippets, ...tailJobs, ...otherSnippets],
          EXCERPT_MAX
        )
      );
    }
    case "results": {
      const punkter = getMocResultaterPunkter(lang).slice(0, 8).map((p) =>
        typeof p === "string" ? stripHtmlToPlainText(p) : stripHtmlToPlainText(p.tekst)
      );
      return excerpt(sourceId, lang, "partial", joinParagraphs(punkter, EXCERPT_MAX));
    }
    case "consulting": {
      const intro = [getTranslation("cons.intro.1", lang), getTranslation("cons.intro.2", lang)].join(" ");
      const mocRow = getTranslation("profil.selskap.desc", lang);
      const pakker = getHovedpakker(lang)
        .slice(0, 4)
        .map((p) => `${p.tittel}: ${p.leveranseKort}`);
      return excerpt(sourceId, lang, "partial", joinParagraphs([intro, mocRow, ...pakker], EXCERPT_MAX));
    }
    case "cv": {
      const d = getDokumentasjonData(lang);
      return excerpt(
        sourceId,
        lang,
        "partial",
        joinParagraphs([d.intro, ...d.resultater, ...d.kompetanse.slice(0, 6)], EXCERPT_MAX)
      );
    }
    case "contact": {
      return excerpt(sourceId, lang, "partial", getTranslation("kontakt.intro", lang));
    }
    default:
      return excerpt(sourceId, lang, "metadata_only", "");
  }
}

export function buildExcerptForContentRef(
  contentRef: KnowledgeContentRef,
  lang: KnowledgeLang,
  sourceId: string,
  fallbackDescription: string
): KnowledgeExcerpt {
  if (contentRef.kind === "site-page") {
    return sitePageExcerpt(contentRef, lang, sourceId);
  }

  if (contentRef.kind === "references-hub") {
    const intro = getTranslation("ref.intro", lang);
    const sample = referanserData
      .slice(0, 2)
      .map((r) => `${r.navn} (${r.tittel}): ${r.tekst.slice(0, 280)}…`);
    return excerpt(sourceId, lang, "partial", joinParagraphs([intro, ...sample], EXCERPT_MAX));
  }

  if (contentRef.kind === "book") {
    const copy = BOK_PROSJEKT_COPY[lang];
    const rowFramework =
      `${copy.rowFrameworkBeforeLink}${copy.rowFrameworkLink}${copy.rowFrameworkAfterLink}`;
    return excerpt(
      sourceId,
      lang,
      "partial",
      joinParagraphs(
        [
          copy.heroAuthorLine,
          copy.statusDateNote,
          copy.tagline,
          copy.heroIngress,
          copy.aboutParagraphs[0] ?? "",
          rowFramework,
        ],
        EXCERPT_MAX
      )
    );
  }

  if (contentRef.kind === "external-row") {
    const def = getRowExternalSourceByKey(contentRef.sourceKey);
    if (!def) {
      return excerpt(sourceId, lang, "metadata_only", fallbackDescription);
    }
    return excerpt(
      sourceId,
      lang,
      "partial",
      joinParagraphs(
        [
          def.excerpt[lang],
          lang === "no"
            ? "Ekstern kilde (rowsolutions.no) — komplementær til prosjektdata på mariusottesen.no."
            : "External source (rowsolutions.no) — complementary to project data on mariusottesen.no.",
        ],
        EXCERPT_MAX
      )
    );
  }

  if (contentRef.kind === "legal-privacy") {
    const page = getPrivacyPageContent(lang);
    return excerpt(sourceId, lang, "partial", joinParagraphs([page.intro, ...page.sections[0]?.paragraphs ?? []], EXCERPT_MAX));
  }

  if (contentRef.kind === "hub") {
    if (contentRef.hub === "projects") {
      return excerpt(sourceId, lang, "partial", buildPortfolioHubExcerpt(lang));
    }
    const text =
      lang === "no"
        ? "Faginnlegg og innsikt om kommersiell ledelse, salg, transformasjon og praktisk AI."
        : "Articles and insights on commercial leadership, sales, transformation and practical AI.";
    return excerpt(sourceId, lang, "metadata_only", text);
  }

  if (contentRef.kind === "article") {
    const innlegg = getFaginnleggBySlug(contentRef.slug);
    if (!innlegg) {
      return excerpt(sourceId, lang, "metadata_only", fallbackDescription);
    }
    const rawBody =
      lang === "en" && classifyFaginnleggEnBody(innlegg) === "FULL_EN_BODY"
        ? innlegg.innhold?.en
        : innlegg.innhold?.[lang];
    const bodyPlain = rawBody?.trim() ? stripHtmlToPlainText(rawBody) : "";
    const hasSubstantiveBody = bodyPlain.length >= ARTICLE_SUBSTANTIVE_MIN_CHARS;
    const teaserPlain = stripHtmlToPlainText(innlegg.teaser[lang] ?? fallbackDescription);
    const text = hasSubstantiveBody ? bodyPlain : teaserPlain;
    const level: KnowledgeExcerptLevel = hasSubstantiveBody ? "partial" : "metadata_only";
    return excerpt(sourceId, lang, level, text);
  }

  if (contentRef.kind === "project") {
    const project = getProjectV2ById(contentRef.projectId) as ProjectV2Record | undefined;
    if (!project) {
      return excerpt(sourceId, lang, "metadata_only", fallbackDescription);
    }
    const chunks = buildPublicProjectExcerptChunks(project, lang);
    const manifestPartial = chunks.length >= 2;
    return excerpt(
      sourceId,
      lang,
      manifestPartial ? "partial" : "metadata_only",
      joinParagraphs(chunks, EXCERPT_MAX)
    );
  }

  return excerpt(sourceId, lang, "metadata_only", fallbackDescription);
}