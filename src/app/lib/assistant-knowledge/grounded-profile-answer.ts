import type { Lang } from "../../LanguageContext";
import { getProfilData } from "../../data/profil";
import { MOTIVATION_AND_FIT } from "../../data/open-application-knowledge";
import { normalizeExcerptForAssistant } from "./excerpt-voice";
import {
  isCoreCompetencyQuestion,
  isLeadershipContributionQuestion,
  isPersonalStrengthsQuestion,
} from "./profile-theme-intent";

export {
  isCoreCompetencyQuestion,
  isLeadershipContributionQuestion,
  isPersonalStrengthsQuestion,
} from "./profile-theme-intent";

function tabId(lang: Lang, key: string): string {
  return `tab:${key}:${lang}`;
}

function say(text: string, lang: Lang): string {
  return normalizeExcerptForAssistant(text.trim(), lang);
}

/** Hvordan Marius bruker AI som leder — anvendelse, ikke porteføljeliste alene. */
export function isPracticalAiLeadershipQuestion(question: string): boolean {
  const q = question.trim();
  if (!q) return false;
  if (/\b(bygg\w*|utvikl\w*|lage\w*|develop\w*|build\w*)\b/i.test(q) && /\b(ai|ki)\b/i.test(q)) {
    return false;
  }
  if (/\b(praktisk\s+ai|practical\s+ai)\b/i.test(q) && /\b(leder|leader|ledelse|leadership|verktøy|tool)\b/i.test(q)) {
    return true;
  }
  if (!/\b(ai|ki|kunstig\s+intelligens)\b/i.test(q)) return false;
  if (!/\b(leder\w*|leader\w*|ledelse|leadership)\b/i.test(q)) return false;
  return /\b(bruk\w*|bruger|use[sd]?\b|som\s+leder|as\s+a\s+leader|lederverktøy|leadership\s+tool)\b/i.test(q);
}

export function isCommercialLeadershipWithAiQuestion(question: string): boolean {
  const q = question.trim();
  if (!/\b(ai|ki|praktisk\s+ai|practical\s+ai)\b/i.test(q)) return false;
  if (!/\b(kommersiell\w*|commercial|salgsledelse|sales\s+leadership)\b/i.test(q)) return false;
  return /\b(sammenheng|kombin\w*|combine\w*|heng\w*|together|profil|bilde)\b/i.test(q);
}

export function tryGroundedProfileAnswer(
  question: string,
  lang: Lang
): { answer: string; sourceIds: string[] } | null {
  const q = question.trim();
  if (!q) return null;

  const home = tabId(lang, "home");
  const cv = tabId(lang, "cv");
  const projects = tabId(lang, "projects");
  const openApp = lang === "no" ? "document:open-application:no" : "document:open-application:en";

  const p = getProfilData(lang);

  if (isPersonalStrengthsQuestion(q)) {
    const list = p.styrker.join(", ");
    const text =
      lang === "no"
        ? `Marius' personlige superstyrker på profilsiden er: ${list}. De beskriver hvordan han leder og skaper fremdrift — supplert av kommersiell erfaring og dokumenterte resultater andre steder på nettstedet.`
        : `Marius' personal strengths on the profile page are: ${list}. They describe how he leads and creates momentum — alongside commercial experience and documented results elsewhere on the site.`;
    return { answer: say(text, lang), sourceIds: [home, cv] };
  }

  if (isCoreCompetencyQuestion(q)) {
    const list = p.kompetanse.join("; ");
    const text =
      lang === "no"
        ? `Marius' kjernekompetanse (profil) er: ${list}. Profilen prioriterer kommersiell og salgsledelse, resultatansvar og gjennomføring; digital transformasjon og praktisk AI inngår som ett fagområde blant flere — ikke som hele bildet.`
        : `Marius' core competencies (profile) are: ${list}. The profile prioritises commercial and sales leadership, accountability and execution; digital transformation and practical AI are one competency area among several — not the whole picture.`;
    return { answer: say(text, lang), sourceIds: [home, cv] };
  }

  if (isLeadershipContributionQuestion(q)) {
    const komp = p.kompetanse.slice(0, 4).join("; ");
    const text =
      lang === "no"
        ? `I en ledergruppe kan Marius bidra med kommersiell og salgsledelse, resultatansvar og gjennomføring på tvers av strategi, salg og drift — dokumentert i profil og åpen søknad. Kjernekompetanse inkluderer blant annet: ${komp}. ${MOTIVATION_AND_FIT.no.bestFit}`
        : `In a leadership team, Marius can contribute commercial and sales leadership, accountability and execution across strategy, sales and operations — documented on the profile and open application. Core competencies include: ${komp}. ${MOTIVATION_AND_FIT.en.bestFit}`;
    return { answer: say(text, lang), sourceIds: [home, openApp, cv] };
  }

  if (isPracticalAiLeadershipQuestion(q) || isCommercialLeadershipWithAiQuestion(q)) {
    const uses =
      lang === "no"
        ? "beslutningsstøtte, innsikt og analyse, arbeidsflyt og effektivisering, salgstrening og møteforberedelse, samt kommersiell og operativ gjennomføring"
        : "decision support, insight and analysis, workflow and efficiency, sales training and meeting preparation, and commercial and operational execution";
    const examples =
      lang === "no"
        ? "På siden dokumenteres dette blant annet gjennom AI Transformation & Value Realization og Control Tower (løsningsrettede arbeidsflyter), Event Planner (prototype) og Bilagsassistent (konsept/prototype) — i tillegg til salgs- og operasjonsverktøy som Predictive Sales Coach."
        : "The site documents this through AI Transformation & Value Realization and Control Tower (solution-oriented workflows), Event Planner (prototype) and Receipt Assistant (concept/prototype) — plus sales and operations tools such as Predictive Sales Coach.";
    const lead = `${p.aiSeksjon.split(".")[0]}.`;
    const text =
      lang === "no"
        ? `${lead} Som leder bruker han AI til ${uses}. ${examples}`
        : `${lead} As a leader he uses AI for ${uses}. ${examples}`;
    return { answer: say(text, lang), sourceIds: [home, projects, cv] };
  }

  return null;
}