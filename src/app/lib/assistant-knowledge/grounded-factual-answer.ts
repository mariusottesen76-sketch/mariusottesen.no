import type { Lang } from "../../LanguageContext";
import { getProfilData } from "../../data/profil";
import { getErfaringData } from "../../data/erfaringInnhold";
import { getDokumentasjonData } from "../../data/dokumentasjon";
import { normalizeExcerptForAssistant } from "./excerpt-voice";
import { isBiTeachingQuestion, tryGroundedBiTeachingAnswer, tryGroundedEducationAnswer } from "./grounded-education-answer";
import { stripHtmlToPlainText, truncatePlainText } from "./text-utils";

function tabId(lang: Lang, key: string): string {
  return `tab:${key}:${lang}`;
}

function say(text: string, lang: Lang): string {
  return normalizeExcerptForAssistant(text.trim(), lang);
}

export { isBiTeachingQuestion } from "./grounded-education-answer";

export function isDocumentedHeadcountQuestion(question: string): boolean {
  const q = question.trim();
  if (!/\b(hvor\s+mange\s+ansatte|antall\s+ansatte|hvor\s+stort\s+team|how\s+many\s+(people|employees)|team\s+size)\b/i.test(q)) {
    return false;
  }
  return /\b(marius|han|ledet|lede\w*|team|salgsorganisasjon)\b/i.test(q);
}

type FactualIntent =
  | "personnel"
  | "sales_leadership"
  | "crm"
  | "results_causation"
  | "industry_list"
  | "transferability"
  | "education"
  | "ai_portfolio"
  | "row"
  | "leadership_experience"
  | "synthesis";

function detectFactualIntents(question: string): Set<FactualIntent> {
  const q = question.trim();
  const intents = new Set<FactualIntent>();

  if (/\b(personalansvar|personal\s+ansvar|people\s+(management|leadership|responsibility)|personal-\s*og\s+resultatansvar)\b/i.test(q)) {
    intents.add("personnel");
  }
  if (/\b(salgsledelse|sales\s+leadership|salgsorganisasjon|leder\s+salg)\b/i.test(q)) {
    intents.add("sales_leadership");
  }
  if (/\bcrm\b/i.test(q)) {
    intents.add("crm");
  }
  if (
    /\b(skape\s+resultat|skape\s+resultater|drive\s+results|create\s+results)\b/i.test(q) ||
    (/\bresultat\w*/i.test(q) && /\b(hvordan|how|brukte?|brukt|used)\b/i.test(q))
  ) {
    intents.add("results_causation");
  }
  if (/\b(hvilke\s+bransjer|bransjer\s+har|bransjeerfaring|which\s+industr|industry\s+experience)\b/i.test(q)) {
    intents.add("industry_list");
  }
  if (/\b(overfør\w*|overføres|overføring|andre\s+bransjer|transferable|transfer\s+to\s+other)\b/i.test(q)) {
    intents.add("transferability");
  }
  if (/\b(utdanning|education|kvalifikasjon|qualification|studert)\b/i.test(q)) {
    intents.add("education");
  }
  if (/\b(ai-prosjekt\w*|ai\s+prosjekter|praktisk\s+ai|ai-portefølje)\b/i.test(q)) {
    intents.add("ai_portfolio");
  }
  if (/\brow\s+solutions\b/i.test(q)) {
    intents.add("row");
  }
  if (/\b(ledererfaring|leadership\s+experience|leder\s+erfaring)\b/i.test(q)) {
    intents.add("leadership_experience");
  }
  if (
    /\b(hvordan\s+henger|sammenheng|koble\w*|kombinere|forklar\w*)\b/i.test(q) ||
    /\b(hvordan|how)\s+har\s+\w+\s+brukt\b/i.test(q)
  ) {
    intents.add("synthesis");
  }

  return intents;
}

/**
 * Sammensatte spørsmål skal til kildevalg + modell — ikke deterministiske CV-klipp.
 * «Og» alene er ikke trigger; vi teller selvstendige informasjonsbehov og syntese-intent.
 */
export function isCompositeFactualQuestion(question: string): boolean {
  const intents = detectFactualIntents(question);
  const hasSynthesis = intents.has("synthesis");

  if (intents.has("industry_list") && intents.has("transferability")) {
    return true;
  }

  const ops: FactualIntent[] = ["personnel", "sales_leadership", "crm"];
  const opsHit = ops.filter((k) => intents.has(k)).length;
  if (hasSynthesis && opsHit >= 2) return true;
  if (hasSynthesis && opsHit >= 1 && intents.has("results_causation")) return true;

  if (hasSynthesis && intents.has("leadership_experience") && intents.has("ai_portfolio")) {
    return true;
  }
  if (hasSynthesis && intents.has("leadership_experience") && intents.has("ai_portfolio") && intents.has("row")) {
    return true;
  }
  if (/\bhenger\b/i.test(question) && intents.has("leadership_experience") && (intents.has("ai_portfolio") || intents.has("row"))) {
    return true;
  }

  const blendable: FactualIntent[] = [
    "personnel",
    "sales_leadership",
    "crm",
    "results_causation",
    "industry_list",
    "transferability",
    "ai_portfolio",
    "row",
    "leadership_experience",
  ];
  const blendCount = blendable.filter((k) => intents.has(k)).length;
  if (blendCount >= 3) return true;
  if (blendCount >= 2 && hasSynthesis) return true;

  return false;
}

/** Deterministic ANSWER for core CV facts documented on the site — no LLM. */
export function tryGroundedFactualAnswer(
  question: string,
  lang: Lang
): { answer: string; sourceIds: string[] } | null {
  const q = question.trim();
  if (!q) return null;
  if (isCompositeFactualQuestion(q)) return null;

  const home = tabId(lang, "home");
  const cv = tabId(lang, "cv");
  const experience = tabId(lang, "experience");
  const results = tabId(lang, "results");

  const education = tryGroundedEducationAnswer(q, lang);
  if (education) return education;

  const biTeach = tryGroundedBiTeachingAnswer(q, lang);
  if (biTeach) return biTeach;

  if (
    /\b(can|could)\b/i.test(q) &&
    /\b(do\s+sales|sell)\b/i.test(q) &&
    /\b(marius|he)\b/i.test(q)
  ) {
    const p = getProfilData(lang);
    const text =
      lang === "no"
        ? `Ja — nettsiden dokumenterer bred salgs- og kommersiell ledelseserfaring. ${p.intro} Profilen beskriver blant annet salgsledelse, salgsstrategi og P/L-ansvar i komplekse B2B-miljøer.`
        : `Yes — the site documents broad sales and commercial leadership experience. ${p.intro} The profile describes sales leadership, sales strategy and P&L accountability in complex B2B settings.`;
    return { answer: say(text, lang), sourceIds: [home, cv, experience] };
  }

  if (/\b(personalansvar|personal\s+ansvar|people\s+(management|leadership|responsibility)|managed\s+employees)\b/i.test(q)) {
    const p = getProfilData(lang);
    const d = getDokumentasjonData(lang);
    const proof = p.proofPoints.find((x) => /personalansvar|people leadership/i.test(x)) ?? p.proofPoints[1] ?? "";
    const komp = d.kompetanse.find((k) => /personalansvar|people leadership/i.test(k)) ?? "";
    const text =
      lang === "no"
        ? `Ja — det er dokumentert at Marius har hatt personalansvar. Profilen nevner personal- og resultatansvar i komplekse B2B-miljøer. ${proof} CV-siden fremhever også ${komp}.`
        : `Yes — it is documented that Marius has held people management responsibility. The profile mentions people and P&L accountability in complex B2B settings. ${proof} The CV page also highlights ${komp}.`;
    return { answer: say(text, lang), sourceIds: [home, cv, experience] };
  }

  if (isDocumentedHeadcountQuestion(q)) {
    const p = getProfilData(lang);
    const teamLine = p.proofPoints.find((x) => /10\s*-\s*20|10–20/i.test(x)) ?? "";
    const e = getErfaringData(lang);
    const franz = e.jobs.find((j) => /franzefoss/i.test(j.company));
    const franzNote =
      franz && "strategy" in franz && typeof franz.strategy === "string"
        ? truncatePlainText(stripHtmlToPlainText(franz.strategy), 120)
        : "";
    const text =
      lang === "no"
        ? `Nettsiden dokumenterer at Marius har ledet nasjonale salgsorganisasjoner med omtrent 10–20 ansatte. ${teamLine}${
            franzNote ? ` Hos Franzefoss Gjenvinning omtales salgsavdelingen som om lag 20 årsverk.` : ""
          }`
        : `The site documents that Marius has led national sales organisations with around 10–20 people. ${teamLine}${
            franzNote ? ` At Franzefoss Gjenvinning the sales department is described as around 20 full-time equivalents.` : ""
          }`;
    return { answer: say(text, lang), sourceIds: [home, experience, cv] };
  }

  if (/\bmundipharma\b/i.test(q)) {
    const d = getDokumentasjonData(lang);
    const resultLine = d.resultater.find((r) => /mundipharma/i.test(r)) ?? "";
    const job = getErfaringData(lang).jobs.find((j) => /mundipharma/i.test(j.company));
    const period = job ? `${job.title} (${job.period})` : "";
    const text =
      lang === "no"
        ? `Ja — Marius har arbeidserfaring fra Mundipharma. ${period ? `Rollen er dokumentert som ${period}. ` : ""}${resultLine}`
        : `Yes — Marius has work experience from Mundipharma. ${period ? `The role is documented as ${period}. ` : ""}${resultLine}`;
    return { answer: say(text, lang), sourceIds: [experience, cv, results] };
  }

  if (/\b(hvilke\s+bransjer|which\s+industr|bransjeerfaring|industry\s+experience|bransjer\s+har)\b/i.test(q)) {
    const e = getErfaringData(lang);
    const employers = e.jobs
      .slice(0, 6)
      .map((j) => `${j.company} (${j.period})`)
      .join("; ");
    const text =
      lang === "no"
        ? `Bransje- og markedsbredde er dokumentert slik: ${truncatePlainText(stripHtmlToPlainText(e.intro), 380)} Utvalgte arbeidsgivere inkluderer ${employers}.`
        : `Industry and market breadth is documented as follows: ${truncatePlainText(stripHtmlToPlainText(e.intro), 380)} Selected employers include ${employers}.`;
    return { answer: say(text, lang), sourceIds: [experience, cv] };
  }

  if (
    /\b(aktuell\w*\s+for\s+roller|roller\s+.*\s+passer|which\s+roles\s+is\s+he\s+(suitable|fit)|hvilke\s+roller\s+er\s+han\s+aktuell)\b/i.test(
      q
    ) &&
    !/\b(kjennetegner|kjennetegn|lederstil|leadership\s+style)\b/i.test(q)
  ) {
    const p = getProfilData(lang);
    const roles = p.roller.join(", ");
    const text =
      lang === "no"
        ? `Marius er aktuell for faste lederroller som dokumentert på profilen, blant annet: ${roles}.`
        : `Marius is positioned for permanent leadership roles documented on the profile, including: ${roles}.`;
    return { answer: say(text, lang), sourceIds: [home, cv] };
  }

  if (/\b(hvilke\s+resultater|what\s+results)\b/i.test(q) && /\b(marius|oppnådd|levert|delivered|dokumentert)\b/i.test(q)) {
    const p = getProfilData(lang);
    const d = getDokumentasjonData(lang);
    const bullets = [...p.proofPoints.slice(0, 4), ...d.resultater.slice(0, 4)].join(" ");
    const text =
      lang === "no"
        ? `Dokumenterte resultater på nettstedet inkluderer blant annet: ${bullets}`
        : `Documented results on the site include, among others: ${bullets}`;
    return { answer: say(text, lang), sourceIds: [home, results, cv] };
  }

  if (
    /\b(kommersiell\s+leder|commercial\s+leader)\b/i.test(q) &&
    /\b(bidra|bidr|contribute|verdi|value)\b/i.test(q)
  ) {
    const p = getProfilData(lang);
    const text =
      lang === "no"
        ? `${p.intro} CV og profilen dokumenterer kommersiell ledelse, salgsledelse, P/L-ansvar, transformasjon og praktisk AI — med fokus på gjennomføring på tvers av strategi, salg, drift og teknologi.`
        : `${p.intro} The CV and profile document commercial leadership, sales leadership, P&L accountability, transformation and practical AI — with emphasis on execution across strategy, sales, operations and technology.`;
    return { answer: say(text, lang), sourceIds: [home, cv, results] };
  }

  return null;
}