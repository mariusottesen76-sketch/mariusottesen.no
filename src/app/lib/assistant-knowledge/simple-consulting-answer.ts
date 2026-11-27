import type { Lang } from "../../LanguageContext";
import { getHovedpakker } from "../../data/consulting";
import { getTranslation } from "../../data/translations";
import { lookupKnowledgeSource } from "./lookup";
import { isQuestionAboutMarius } from "./site-assistant-subject";

/** Korte spørsmål om om Marius tilbyr consulting / MOC — uten full engasjementsmal. */
export function isSimpleConsultingOfferingQuestion(question: string): boolean {
  const q = question.trim();
  if (!isQuestionAboutMarius(q)) return false;
  if (
    /\b(consulting|moc\b|rådgivning|advisory)\b/i.test(q) &&
    /\b(tilbyr|offer|tilbud|packages?|tjenester|services|gjennom)\b/i.test(q)
  ) {
    return true;
  }
  return /\b(gjør\s+(han|marius)\s+consulting|does\s+(he|marius)\s+(do\s+)?consulting|tilbyr\s+(han|hans|marius)(\s+ottesen)?(\s+consulting)?|what\s+does\s+(he|marius)\s+ottesen\s+consulting|hva\s+tilbyr\s+marius\s+ottesen\s+consulting)\b/i.test(
    q
  );
}

export function trySimpleConsultingOfferingAnswer(lang: Lang): { sourceId: string; answer: string } | null {
  const sourceId = lang === "no" ? "tab:consulting:no" : "tab:consulting:en";
  const res = lookupKnowledgeSource(sourceId, lang);
  if (!res.ok) return null;

  const intro = [getTranslation("cons.intro.1", lang), getTranslation("cons.intro.2", lang)].join(" ");
  const packages = getHovedpakker(lang)
    .slice(0, 4)
    .map((p) => `${p.tittel}: ${p.leveranseKort}`)
    .join(" ");
  const path = new URL(res.entry.canonicalUrl).pathname;
  const contactPath = lang === "no" ? "/kontakt" : "/en/contact";

  const brand = lang === "no" ? "Marius Ottesen Consulting (MOC)" : "Marius Ottesen Consulting (MOC)";
  const text =
    lang === "no"
      ? `${brand}: ${intro} MOC hjelper B2B-virksomheter med blant annet: ${packages} Leveransene kombinerer analyse, prioritering og praktisk gjennomføring innen salg, CRM, kundedialog, teamutvikling og målrettet AI der det gir verdi. Se ${path} for pakker og metoder, og ${contactPath} for dialog. Row Solutions er et eget kommersielt samarbeid (rowsolutions.no), ikke det samme som MOC.`
      : `${brand}: ${intro} MOC helps B2B organisations with areas including: ${packages} Engagements combine analysis, prioritisation and practical execution in sales, CRM, customer dialogue, team development and targeted AI where it creates value. See ${path} for packages and methods, and ${contactPath} to get in touch. Row Solutions is a separate commercial collaboration (rowsolutions.no), not the same as MOC.`;

  return { sourceId, answer: text.trim() };
}