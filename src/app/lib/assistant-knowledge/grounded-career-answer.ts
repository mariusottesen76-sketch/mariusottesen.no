import type { Lang } from "../../LanguageContext";
import {
  CAREER_EDUCATION,
  CAREER_EXPERIENCE_TYPES,
  getCareerPositions,
  getDistinctEmployers,
} from "../../data/career-facts";
import {
  LEADERSHIP_PHILOSOPHY,
  LEADERSHIP_STYLE,
  MOTIVATION_AND_FIT,
  OPEN_APPLICATION_TARGET_ROLES,
  VALUE_CREATION_THEMES,
} from "../../data/open-application-knowledge";
import {
  formatAiDiscoveryAttribution,
  formatRowSolutionsMariusContext,
  formatRowSolutionsWho,
} from "../../data/row-solutions-knowledge";
import { isValueCreationQuestion } from "./information-needs";
import { normalizeExcerptForAssistant } from "./excerpt-voice";
import { rowExternalManifestId } from "./row-external-knowledge";

function tabId(lang: Lang, key: string): string {
  return `tab:${key}:${lang}`;
}

function careerId(lang: Lang): string {
  return lang === "no" ? "career:cv-registry:no" : "career:cv-registry:en";
}

function openAppId(lang: Lang): string {
  return lang === "no" ? "document:open-application:no" : "document:open-application:en";
}

function say(text: string, lang: Lang): string {
  return normalizeExcerptForAssistant(text.trim(), lang);
}

export function isEmployerListQuestion(question: string): boolean {
  const q = question.trim();
  return (
    /\b(alle\s+)?(arbeidsgiver\w*|employer\w*|jobbet\s+for|worked\s+for|jobbhistorikk|employment\s+history)\b/i.test(
      q
    ) && /\b(marius|han|ottesen|hvem|which|list|hvilke)\b/i.test(q)
  );
}

export function isPositionsHeldQuestion(question: string): boolean {
  const q = question.trim();
  if (/\b(aktuell|relevant|passer|fit\s+for|vurdere\s+som)\b/i.test(q)) return false;
  return (
    /\b(stilling\w*|job\s+titles?|roles?\s+(has|had)|hatt\s+som|positions?\s+held|tidligere\s+roller)\b/i.test(
      q
    ) && /\b(marius|han|hvilke|which|what)\b/i.test(q)
  );
}

export function isExperienceTypesQuestion(question: string): boolean {
  const q = question.trim();
  return (
    /\b(erfaringstyper|typer\s+erfaring|type\s+stilling|stillingstyper|kategorier\s+av\s+erfaring|experience\s+types|kinds?\s+of\s+roles)\b/i.test(
      q
    ) && !/\b(hatt|had|tidligere\s+stilling)\b/i.test(q)
  );
}

export function isTargetRolesQuestion(question: string): boolean {
  const q = question.trim();
  return (
    /\b(aktuell\w*\s+(for\s+)?roller|roller\s+(er\s+)?(han|marius)\s+aktuell|passer\s+for|passer\s+(han|marius)|relevant\s+for|which\s+roles\s+is\s+he|roles\s+.*\s+(suit|fit)|hvilke\s+lederroller\s+er\s+han)\b/i.test(
      q
    ) ||
    (/\blederroller\b/i.test(q) && /\bpasser|fit|suitable|til\?\s*$/i.test(q)) ||
    (/\b(aktuell|target|suitable|going\s+forward)\b/i.test(q) && /\b(rolle|role|roles)\b/i.test(q))
  );
}

export function isLeadershipPhilosophyQuestion(question: string): boolean {
  return /\b(lederfilosofi|leadership\s+philosophy|hvordan\s+tenker\s+(han|marius)\s+som\s+leder|how\s+does\s+he\s+think\s+as\s+a\s+leader)\b/i.test(
    question
  );
}

export function isLeadershipStyleQuestion(question: string): boolean {
  const q = question.trim();
  if (isTargetRolesQuestion(q)) return false;
  return (
    /\b(kjennetegner|kjennetegn|lederstil|leder\s*mennesker|hvordan\s+leder|leads\s+people|leadership\s+style|how\s+does\s+he\s+lead)\b/i.test(
      q
    ) && /\b(leder|lead|mennesker|people|rolle|roller|lederroller)\b/i.test(q)
  );
}

export function isMocVsRowQuestion(question: string): boolean {
  return (
    /\b(moc|marius\s+ottesen\s+consulting)\b/i.test(question) &&
    /\brow\s+solutions\b/i.test(question)
  );
}

export function isRowWhoBehindQuestion(question: string): boolean {
  const q = question.trim();
  return (
    /\brow\s+solutions\b/i.test(q) &&
    /\b(hvem\s+står\s+bak|hvem\s+er\s+med|who\s+is\s+behind|who\s+are\s+the\s+(people|partners)|hvilke\s+personer|samarbeidspartnere)\b/i.test(
      q
    )
  );
}

export function isAiDiscoveryQuestion(question: string): boolean {
  return /\bai\s*discovery\b/i.test(question.trim());
}

export function isRowRoleQuestion(question: string): boolean {
  const q = question.trim();
  if (/\b(sammenheng|henger|hvordan\s+henger|how\s+does.*fit|koble\w*)\b/i.test(q)) return false;
  if (isRowWhoBehindQuestion(q) || isAiDiscoveryQuestion(q)) return false;
  if (/^\s*hva\s+er\s+row\s+solutions/i.test(q) || /^\s*what\s+is\s+row\s+solutions/i.test(q)) return true;
  return (
    /\brow\s+solutions\b/i.test(q) &&
    /\b(marius|bidrag|rolle|forskjell|difference)\b/i.test(q)
  );
}

export function isMotivationQuestion(question: string): boolean {
  return /\b(motivasjon|motiverer|why\s+(hire|consider)|hvorfor\b.*vurdere|bør\s+vi\s+ansette|hva\s+motiverer)\b/i.test(
    question
  );
}

/** Deterministic career / open-application answers — no LLM. */
export function tryGroundedCareerAnswer(
  question: string,
  lang: Lang
): { answer: string; sourceIds: string[] } | null {
  const q = question.trim();
  if (!q) return null;

  const career = careerId(lang);
  const openApp = openAppId(lang);
  const cv = tabId(lang, "cv");
  const home = tabId(lang, "home");
  const experience = tabId(lang, "experience");

  if (isEmployerListQuestion(q)) {
    const employers = getDistinctEmployers(lang);
    const inventory = getCareerPositions(lang)
      .map((p) => `${p.employer} (${p.periodDisplay})`)
      .join("; ");
    const text =
      lang === "no"
        ? `Marius' dokumenterte arbeidsgivere og perioder (godkjent CV, nov. 2026) er: ${inventory}. Dette er den autoritative listen — siden /erfaring viser kun utvalgte karrierehøydepunkter. Noen perioder overlappet (f.eks. MedDrop parallelt med faste lederstillinger).`
        : `Marius' documented employers and periods (approved CV, Nov 2026) are: ${inventory}. This is the authoritative list — /experience shows selected highlights only. Some periods overlapped (e.g. MedDrop in parallel with permanent leadership roles).`;
    void employers;
    return { answer: say(text, lang), sourceIds: [career, cv, experience] };
  }

  if (isPositionsHeldQuestion(q)) {
    const lines = getCareerPositions(lang).map((p) => {
      const title = p.titleProgression ? p.titleProgression : p.title;
      return `${title} hos ${p.employer} (${p.periodDisplay})`;
    });
    const text =
      lang === "no"
        ? `Dette er dokumenterte stillinger Marius har hatt (kategori A — faktiske stillinger, fra godkjent CV): ${lines.join("; ")}.`
        : `These are documented positions Marius has held (category A — actual roles, from the approved CV): ${lines.join("; ")}.`;
    return { answer: say(text, lang), sourceIds: [career, cv] };
  }

  if (isExperienceTypesQuestion(q)) {
    const types = CAREER_EXPERIENCE_TYPES[lang].join(", ");
    const text =
      lang === "no"
        ? `Erfaringstyper Marius har dokumentert bakgrunn for (kategori B — ikke samme som formelle stillingstitler): ${types}. For konkrete titler og perioder, se faktiske stillinger i CV-registret.`
        : `Experience types Marius has documented background in (category B — not the same as formal job titles): ${types}. For specific titles and dates, see actual positions in the CV registry.`;
    return { answer: say(text, lang), sourceIds: [career, cv] };
  }

  if (isTargetRolesQuestion(q)) {
    const roles = OPEN_APPLICATION_TARGET_ROLES[lang].join(", ");
    const text =
      lang === "no"
        ? `Marius er aktuell for følgende lederroller fremover (kategori C — fra åpen søknad og profil, ikke tidligere stillinger): ${roles}.`
        : `Marius is relevant for the following leadership roles going forward (category C — from the open application and profile, not past positions): ${roles}.`;
    return { answer: say(text, lang), sourceIds: [openApp, home, cv] };
  }

  if (isLeadershipPhilosophyQuestion(q)) {
    const bullets = LEADERSHIP_PHILOSOPHY[lang].join(" ");
    const text =
      lang === "no"
        ? `Marius' lederfilosofi (åpen søknad) kan oppsummeres slik: ${bullets}`
        : `Marius' leadership philosophy (open application) can be summarised as: ${bullets}`;
    return { answer: say(text, lang), sourceIds: [openApp, cv] };
  }

  if (isLeadershipStyleQuestion(q)) {
    const bullets = LEADERSHIP_STYLE[lang].join(" ");
    const text =
      lang === "no"
        ? `Marius' lederstil er dokumentert som: ${bullets}`
        : `Marius' leadership style is documented as: ${bullets}`;
    return { answer: say(text, lang), sourceIds: [openApp, home, cv] };
  }

  if (isValueCreationQuestion(q)) {
    const themes = VALUE_CREATION_THEMES[lang].slice(0, 4).join(" ");
    const text =
      lang === "no"
        ? `Marius skaper verdi gjennom å omsette strategi til konkrete kommersielle resultater. Åpen søknad og dokumentert erfaring beskriver blant annet: ${themes} ${MOTIVATION_AND_FIT[lang].bestFit}`
        : `Marius creates value by turning strategy into tangible commercial results. The open application and documented experience describe, among other things: ${themes} ${MOTIVATION_AND_FIT[lang].bestFit}`;
    return { answer: say(text, lang), sourceIds: [openApp, career, tabId(lang, "results")] };
  }

  if (isMotivationQuestion(q)) {
    const text =
      lang === "no"
        ? `Hvorfor vurdere Marius som kommersiell leder: ${MOTIVATION_AND_FIT[lang].motivation} Han passer særlig der ${MOTIVATION_AND_FIT[lang].bestFit}`
        : `Why consider Marius as a commercial leader: ${MOTIVATION_AND_FIT[lang].motivation} He is especially relevant where ${MOTIVATION_AND_FIT[lang].bestFit}`;
    return { answer: say(text, lang), sourceIds: [openApp, home, cv] };
  }

  if (isAiDiscoveryQuestion(q)) {
    const text = formatAiDiscoveryAttribution(lang);
    const extId = rowExternalManifestId("ai-discovery", lang);
    return {
      answer: say(text, lang),
      sourceIds: [extId, rowExternalManifestId("home", lang), tabId(lang, "consulting")],
    };
  }

  if (isRowWhoBehindQuestion(q)) {
    const text = formatRowSolutionsWho(lang);
    const rowHome = rowExternalManifestId("home", lang);
    const projectId = lang === "no" ? "project:row-solutions:no" : "project:row-solutions:en";
    return {
      answer: say(text, lang),
      sourceIds: [rowHome, projectId],
    };
  }

  if (isMocVsRowQuestion(q)) {
    const text =
      lang === "no"
        ? `MOC (Marius Ottesen Consulting) er Marius' egen rådgivnings- og metodeplattform med kundeoppdrag og verktøyutvikling. ${formatRowSolutionsMariusContext(lang)}`
        : `MOC (Marius Ottesen Consulting) is Marius' own advisory and methodology platform with client work and tool development. ${formatRowSolutionsMariusContext(lang)}`;
    const rowHome = rowExternalManifestId("home", lang);
    return {
      answer: say(text, lang),
      sourceIds: [tabId(lang, "consulting"), career, rowHome],
    };
  }

  if (isRowRoleQuestion(q) && !isMocVsRowQuestion(q)) {
    const text =
      lang === "no"
        ? formatRowSolutionsMariusContext(lang)
        : formatRowSolutionsMariusContext(lang);
    const rowHome = rowExternalManifestId("home", lang);
    const projectId = lang === "no" ? "project:row-solutions:no" : "project:row-solutions:en";
    return {
      answer: say(text, lang),
      sourceIds: [rowHome, projectId, openApp],
    };
  }

  if (/\b(franzefoss)\b/i.test(q) && /\b(når|periode|period|årstall|dates?)\b/i.test(q)) {
    const job = getCareerPositions(lang).find((p) => /franzefoss/i.test(p.employer));
    if (job) {
      const text =
        lang === "no"
          ? `Marius var nasjonal salgssjef hos Franzefoss Gjenvinning i perioden ${job.periodDisplay} (godkjent CV).`
          : `Marius was National Sales Director at Franzefoss Gjenvinning in the period ${job.periodDisplay} (approved CV).`;
      return { answer: say(text, lang), sourceIds: [career, experience, cv] };
    }
  }

  if (/\b(mundipharma)\b/i.test(q) && /\b(progresjon|progression|titler|titles|distriktssjef|product\s+manager)\b/i.test(q)) {
    const job = getCareerPositions(lang).find((p) => /mundipharma/i.test(p.employer));
    if (job?.titleProgression) {
      const text =
        lang === "no"
          ? `Hos Mundipharma dokumenterer CV-en følgende progresjon (${job.periodDisplay}): ${job.titleProgression}.`
          : `At Mundipharma the CV documents the following progression (${job.periodDisplay}): ${job.titleProgression}.`;
      return { answer: say(text, lang), sourceIds: [career, experience, cv] };
    }
  }

  if (
    /\b(strategi.*gjennomføring|strategy.*execution|omsette\s+strategi)\b/i.test(q) &&
    /\b(marius|hvordan|how)\b/i.test(q)
  ) {
    const phil = LEADERSHIP_PHILOSOPHY[lang].slice(2, 5).join(" ");
    const text =
      lang === "no"
        ? `Marius arbeider med strategi og gjennomføring ved å gjøre retning forståelig og operativ: ${phil}`
        : `Marius works with strategy and execution by making direction understandable and operational: ${phil}`;
    return { answer: say(text, lang), sourceIds: [openApp, career] };
  }

  if (/\b(utdanning|education)\b/i.test(q) && /\b(marius|hvilken|what|full)\b/i.test(q)) {
    const edu = CAREER_EDUCATION[lang].join(" ");
    const text =
      lang === "no"
        ? `Dokumentert utdanning og videreutdanning (godkjent CV): ${edu}`
        : `Documented education and continuing study (approved CV): ${edu}`;
    return { answer: say(text, lang), sourceIds: [career, home, cv] };
  }

  return null;
}