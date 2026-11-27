import type { Lang } from "../../LanguageContext";
import { getProfilData } from "../../data/profil";
import { normalizeExcerptForAssistant } from "./excerpt-voice";

export function isBiTeachingQuestion(question: string): boolean {
  return (
    /\b(undervist\w*|underviser|foreleser\w*|forelesning|lectur|teach(es|ing)?|taught|teaching|faculty|professor|did\s+he\s+teach)\b/i.test(
      question
    ) && /\b(bi\b|handelshøyskolen|norwegian\s+business)/i.test(question)
  );
}

export function tryGroundedBiTeachingAnswer(
  question: string,
  lang: Lang
): { answer: string; sourceIds: string[] } | null {
  if (!isBiTeachingQuestion(question)) return null;
  const home = tabId(lang, "home");
  const cv = tabId(lang, "cv");
  const text =
    lang === "no"
      ? "Nei — nettsiden dokumenterer at Marius Ottesen har studert ved Handelshøyskolen BI, blant annet gjennom det fullførte masterkurset Generative AI for Business. Det står ikke at han har undervist eller vært foreleser der; det som er dokumentert er utdanning/kursdeltakelse og faglig arbeid knyttet til kurset og AI-satsingen."
      : "No — the site documents that Marius Ottesen studied at BI Norwegian Business School, including the completed master's course Generative AI for Business. It does not state that he taught or lectured there; what is documented is education/course participation and professional work linked to the course and his AI practice.";
  return { answer: say(text, lang), sourceIds: [home, cv, careerId(lang)] };
}

function tabId(lang: Lang, key: string): string {
  return `tab:${key}:${lang}`;
}

function careerId(lang: Lang): string {
  return lang === "no" ? "career:cv-registry:no" : "career:cv-registry:en";
}

function say(text: string, lang: Lang): string {
  return normalizeExcerptForAssistant(text.trim(), lang);
}

/** Generative AI for Business — kobling til dokumentert lederprofil (ikke ren utdanningsliste). */
export function isGenerativeAiCourseLeadershipLinkQuestion(question: string): boolean {
  const q = question.trim();
  if (!/\b(generative\s+ai(\s+for\s+business)?|ai\s+for\s+business)\b/i.test(q)) return false;
  if (!/\b(course|master|kurset|business\s+school|handelshøyskolen|\bbi\b)\b/i.test(q)) return false;
  return /\b(leadership|leader|leder\w*|link|koble\w*|connect\w*|relate\w*|sammenheng|relevance|henger)\b/i.test(
    q
  );
}

export function tryGroundedGenerativeAiCourseLeadershipLinkAnswer(
  question: string,
  lang: Lang
): { answer: string; sourceIds: string[] } | null {
  if (!isGenerativeAiCourseLeadershipLinkQuestion(question)) return null;
  const p = getProfilData(lang);
  const home = tabId(lang, "home");
  const cv = tabId(lang, "cv");
  const career = careerId(lang);
  const openApp = lang === "no" ? "document:open-application:no" : "document:open-application:en";
  const aiProject =
    lang === "no" ? "project:strategisk-ai-implementering:no" : "project:strategisk-ai-implementering:en";
  const strategyCard = p.lederprofil[2]?.text ?? "";
  const text =
    lang === "no"
      ? `Masterkurset Generative AI for Business ved Handelshøyskolen BI (fullført 2026, karakter A) er dokumentert på CV og profil som strategisk AI-kompetanse — ikke som erstatning for kommersiell lederprofil. Kurset kobles til ledelse gjennom å styrke beslutningsstøtte, arbeidsflyt og kommersiell gjennomføring: ${strategyCard} Profilen beskriver digital transformasjon og praktisk AI som ett fagfelt ved siden av kommersiell ledelse, salg og personalansvar. Erfaring og prosjektoppgave fra kurset er også knyttet til metode for ansvarlig AI-implementering.`
      : `The master's course Generative AI for Business at BI Norwegian Business School (completed 2026, grade A) is documented on the CV and profile as strategic AI competency — not as a replacement for the commercial leadership profile. It links to leadership by strengthening decision support, workflow and commercial execution: ${strategyCard} The profile describes digital transformation and practical AI as one competency area alongside commercial leadership, sales and people accountability. Experience and the master's project from the course are also tied to a methodology for responsible AI implementation.`;
  return { answer: say(text, lang), sourceIds: [home, cv, career, openApp, aiProject] };
}

/** Bruker spør om utdanning — ikke undervisningserfaring. */
export function isEducationLookupQuestion(question: string): boolean {
  const q = question.trim();
  if (!q) return false;
  if (isBiTeachingQuestion(q)) return false;
  if (isGenerativeAiCourseLeadershipLinkQuestion(q)) return false;
  if (/^\s*(utdanning|education)\s*\??\s*$/i.test(q)) return true;
  if (/^\s*(utdanning\s+){2,}/i.test(q)) return true;
  return (
    /\b(utdanning|education|kvalifikasjon|qualifications?|studert|studerte|studies|studied|studie|degree)\b/i.test(
      q
    ) && !/\b(undervist|underviser|foreleser|lectur|teaching\s+at|taught\s+at)\b/i.test(q)
  );
}

export function tryGroundedEducationAnswer(
  question: string,
  lang: Lang
): { answer: string; sourceIds: string[] } | null {
  if (!isEducationLookupQuestion(question)) return null;

  const list =
    lang === "no"
      ? `University of Utah (siviløkonom MSc, 1997–2001), Universitetet i Oslo (sosialøkonomi grunnfag og Ex. Philosophicum, 1995–1997), Handelshøyskolen BI (Executive Master of Management, 2011–2015) og masterkurset Generative AI for Business (2026, karakter A).`
      : `University of Utah (MSc Business Administration, 1997–2001), University of Oslo (economics foundation and Ex. Philosophicum, 1995–1997), BI Norwegian Business School (Executive Master of Management, 2011–2015) and the master's course Generative AI for Business (2026, grade A).`;

  const text =
    lang === "no"
      ? `Marius' dokumenterte utdanning (godkjent CV og profil) omfatter blant annet: ${list}`
      : `Marius' documented education (approved CV and profile) includes: ${list}`;

  return {
    answer: say(text, lang),
    sourceIds: [careerId(lang), tabId(lang, "home"), tabId(lang, "cv")],
  };
}