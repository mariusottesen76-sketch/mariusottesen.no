import type { Lang } from "../../LanguageContext";
import { getCareerPositions } from "../../data/career-facts";

/** Allowlisted keys — must match career-facts employers. */
export const EMPLOYER_FOCUS_KEYS = [
  "moc",
  "meddrop",
  "franzefoss",
  "norengros",
  "nilfisk",
  "pelagia",
  "falck",
  "assessit",
  "mundipharma",
  "early",
] as const;

export type EmployerFocusKey = (typeof EMPLOYER_FOCUS_KEYS)[number];

export type AssistantClientContext = {
  employerKey?: string;
};

export type ConversationFocus = {
  employerKey?: EmployerFocusKey;
};

const MAX_CLIENT_CONTEXT_JSON_CHARS = 120;

const EMPLOYER_PATTERNS: { key: EmployerFocusKey; pattern: RegExp }[] = [
  { key: "franzefoss", pattern: /\bfranzefoss\b/i },
  { key: "norengros", pattern: /\bnorengros|johs\.?\s*olsen\b/i },
  { key: "mundipharma", pattern: /\bmundipharma\b/i },
  { key: "nilfisk", pattern: /\bnilfisk\b/i },
  { key: "pelagia", pattern: /\bpelagia\b/i },
  { key: "falck", pattern: /\bfalck\s*nutec|falck\b/i },
  { key: "assessit", pattern: /\bassessit\b/i },
  { key: "meddrop", pattern: /\bmeddrop\b/i },
  { key: "moc", pattern: /\b(moc|marius\s+ottesen\s+consulting)\b/i },
  { key: "early", pattern: /\b(hydro\s+texaco|stibolt|vb tk|t\.\s*t\.\s*shop)\b/i },
];

export function detectEmployerKeyInText(text: string): EmployerFocusKey | undefined {
  for (const { key, pattern } of EMPLOYER_PATTERNS) {
    if (pattern.test(text)) return key;
  }
  return undefined;
}

export function isEmployerSwitchPhrase(question: string): boolean {
  return /\b(hva\s+med|what\s+about|og\s+i|og\s+hos|how\s+about)\b/i.test(question.trim());
}

export function isFollowUpRequiringEmployerContext(question: string): boolean {
  const q = question.trim();
  if (detectEmployerKeyInText(q)) return false;
  const pronoun =
    /\b(han|der|det|there|his|den|dette)\b/i.test(q) ||
    /^(hvor\s+mange|hva\s+oppnådde|hvilke\s+resultater|når\s+jobbet|hvilken\s+rolle|what\s+did\s+he|how\s+many)\b/i.test(
      q
    );
  return pronoun && q.length < 220;
}

export function isConversationTopicReset(question: string): boolean {
  return (
    /\b(kontakt|contact\s+form|pizza|været|weather|navigasjon|navigation)\b/i.test(question) &&
    !detectEmployerKeyInText(question)
  );
}

export function sanitizeClientContext(
  raw: unknown
): AssistantClientContext | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const employerKey = "employerKey" in raw ? String((raw as AssistantClientContext).employerKey ?? "") : "";
  const trimmed = employerKey.trim().slice(0, 32);
  if (!trimmed) return undefined;
  if (!EMPLOYER_FOCUS_KEYS.includes(trimmed as EmployerFocusKey)) return undefined;
  const blob = JSON.stringify({ employerKey: trimmed });
  if (blob.length > MAX_CLIENT_CONTEXT_JSON_CHARS) return undefined;
  return { employerKey: trimmed };
}

export function resolveConversationFocus(
  question: string,
  client?: AssistantClientContext
): ConversationFocus | undefined {
  if (isConversationTopicReset(question)) return undefined;

  const explicit = detectEmployerKeyInText(question);
  if (explicit) return { employerKey: explicit };

  if (isEmployerSwitchPhrase(question)) {
    const switched = detectEmployerKeyInText(question.replace(/\b(hva\s+med|what\s+about|og\s+i|og\s+hos)\b/gi, ""));
    if (switched) return { employerKey: switched };
  }

  const clientKey = client?.employerKey;
  if (clientKey && EMPLOYER_FOCUS_KEYS.includes(clientKey as EmployerFocusKey)) {
    if (isFollowUpRequiringEmployerContext(question) || isEmployerSwitchPhrase(question)) {
      return { employerKey: clientKey as EmployerFocusKey };
    }
  }

  return explicit ? { employerKey: explicit } : undefined;
}

function positionMatchesKey(
  employer: string,
  key: EmployerFocusKey
): boolean {
  const e = employer.toLowerCase();
  switch (key) {
    case "franzefoss":
      return e.includes("franzefoss");
    case "norengros":
      return e.includes("norengros");
    case "mundipharma":
      return e.includes("mundipharma");
    case "nilfisk":
      return e.includes("nilfisk");
    case "pelagia":
      return e.includes("pelagia");
    case "falck":
      return e.includes("falck");
    case "assessit":
      return e.includes("assessit");
    case "meddrop":
      return e.includes("meddrop");
    case "moc":
      return e.includes("consulting");
    case "early":
      return e.includes("hydro") || e.includes("stibolt") || e.includes("vbtk");
    default:
      return false;
  }
}

export function getCareerEntryForFocus(key: EmployerFocusKey, lang: Lang) {
  return getCareerPositions(lang).find((p) => positionMatchesKey(p.employer, key));
}

export function employerDisplayName(key: EmployerFocusKey, lang: Lang): string {
  const entry = getCareerEntryForFocus(key, lang);
  return entry?.employer ?? key;
}

/** Kun for kildevalg/modell — overskriver ikke fakta. */
export function augmentQuestionForRetrieval(
  question: string,
  focus: ConversationFocus | undefined,
  lang: Lang,
  maxChars: number
): string {
  if (!focus?.employerKey) return question;
  const name = employerDisplayName(focus.employerKey, lang);
  const hint =
    lang === "no"
      ? `${question}\n(Fokus: ${name})`
      : `${question}\n(Focus: ${name})`;
  return hint.length <= maxChars ? hint : question;
}

export function sessionHintForModel(
  focus: ConversationFocus | undefined,
  lang: Lang
): string | undefined {
  if (!focus?.employerKey) return undefined;
  const name = employerDisplayName(focus.employerKey, lang);
  return lang === "no"
    ? `Brukeren fortsetter om arbeidsgiveren ${name}. Svar om denne sammenhengen dersom spørsmålet er kort eller bruker pronomen.`
    : `The user continues about employer ${name}. Answer in that context when the question is short or uses pronouns.`;
}