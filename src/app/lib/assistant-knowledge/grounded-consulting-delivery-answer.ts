import type { Lang } from "../../LanguageContext";
import { getConsultingForedragData } from "../../data/consulting-foredrag";
import { mentionsRowBrand } from "../../data/row-solutions-knowledge";
import { rowExternalManifestId } from "./row-external-knowledge";
import { isQuestionAboutMarius } from "./site-assistant-subject";
import { normalizeExcerptForAssistant } from "./excerpt-voice";

const DELIVERY_FORMATS =
  /\b(kurs|foredrag|workshop|webinar|fagdag|talks?|presentation|speaking|paneldebatt|panel\s+discussion)\b/i;

/** Dokumentert historikk — ikke «kan han». */
export function isDocumentedDeliveryHistoryQuestion(question: string): boolean {
  const q = question.trim();
  const format =
    DELIVERY_FORMATS.test(q) ||
    /\b(foredragsoppdrag|speaking\s+engagements?|course\s+assignments)\b/i.test(q);
  if (!format) return false;
  if (!isQuestionAboutMarius(q) && !/\bmarius\b/i.test(q)) return false;
  return (
    /\b(har\s+(han|marius)|has\s+(he|marius)|holdt\s+(han|marius)|gitt\s+(han|marius)|dokumentert|documented|dokumenterte|past\s+(talks?|speaking)|tidligere\s+(foredrag|kurs))\b/i.test(
      q
    ) || /\b(dokumenterte?\s+(foredrag|kurs|oppdrag)|documented\s+(talks?|speaking|engagements?))\b/i.test(q)
  );
}

/** Mulighet / kapasitet — «kan han holde …». */
export function isDeliveryCapabilityQuestion(question: string): boolean {
  const q = question.trim();
  if (/\b(kontakt|contact|how\s+do\s+(i|we)\s+(contact|reach)|get\s+in\s+touch|nå\s+marius|henvendelse)\b/i.test(q)) {
    return false;
  }
  if (!DELIVERY_FORMATS.test(q)) return false;
  if (isDocumentedDeliveryHistoryQuestion(q)) return false;
  if (mentionsRowBrand(q) && !/\b(marius|moc|han|he)\b/i.test(q)) return false;
  if (/\b(marius|moc\b|han\b|he\b|hans\b|his\b)\b/i.test(q)) return true;
  return isQuestionAboutMarius(q);
}

export function isMocDeliveryOfferingQuestion(question: string): boolean {
  const q = question.trim();
  if (!DELIVERY_FORMATS.test(q)) return false;
  if (isDocumentedDeliveryHistoryQuestion(q)) return false;
  return /\b(moc\b|marius\s+ottesen\s+consulting)\b/i.test(q) && /\b(tilbyr|offer|workshop|kurs|foredrag)\b/i.test(q);
}

export function isRowDeliveryOfferingQuestion(question: string): boolean {
  const q = question.trim();
  if (!DELIVERY_FORMATS.test(q)) return false;
  if (isDocumentedDeliveryHistoryQuestion(q)) return false;
  return mentionsRowBrand(q) && !/\b(marius|moc|han\b|he\b)\b/i.test(q);
}

function say(text: string, lang: Lang): string {
  return normalizeExcerptForAssistant(text, lang);
}

function tabId(lang: Lang, key: string): string {
  return `tab:${key}:${lang}`;
}

/** Kurs, foredrag, workshops — MOC vs dokumentert historikk vs Row. */
export function tryGroundedConsultingDeliveryAnswer(
  question: string,
  lang: Lang
): { answer: string; sourceIds: string[] } | null {
  const q = question.trim();
  if (!q) return null;

  if (isRowDeliveryOfferingQuestion(q)) {
    const text =
      lang === "no"
        ? "Row Solutions leverer blant annet kartlegging, workshops, ledersparring, kurs, webinarer og praktisk AI-trening — i tråd med tjenestestrukturen på rowsolutions.no. Dette er Row-samarbeidet (Marius Ottesen, Thomas Holm og Gunnar Gundersen), ikke det samme som MOC."
        : "Row Solutions delivers mapping, workshops, leadership sparring, courses, webinars and practical AI training — aligned with the service structure on rowsolutions.no. This is the Row collaboration (Marius Ottesen, Thomas Holm and Gunnar Gundersen), not the same as MOC.";
    const projectId = lang === "no" ? "project:row-solutions:no" : "project:row-solutions:en";
    return {
      answer: say(text, lang),
      sourceIds: [rowExternalManifestId("tjenester", lang), projectId, rowExternalManifestId("home", lang)],
    };
  }

  const capability = isDeliveryCapabilityQuestion(q) || isMocDeliveryOfferingQuestion(q);
  const history = isDocumentedDeliveryHistoryQuestion(q);

  if (!capability && !history) return null;

  const fd = getConsultingForedragData(lang);
  const consulting = tabId(lang, "consulting");
  const contact = tabId(lang, "contact");

  if (history) {
    const text =
      lang === "no"
        ? `${fd.bidrag.text} Nettsiden beskriver temaer og faglige bidrag Marius kan bidra med — ikke en fullstendig liste over enkeltstående foredrag eller kursoppdrag. På consulting-siden står det at temaene bygger på dokumentert ledererfaring og kan være relevante i ledergrupper og faglige samtaler når det oppstår en passende anledning. For dialog om konkret leveranse, bruk kontaktsiden.`
        : `${fd.bidrag.text} The site describes themes and professional contributions Marius can contribute on — not a complete list of individual speaking or course engagements. The consulting page states that themes build on documented leadership experience and may be relevant in leadership groups and professional conversations when a suitable opportunity arises. Use the contact page for dialogue about a specific delivery.`;
    return { answer: say(text, lang), sourceIds: [consulting, contact, tabId(lang, "results")] };
  }

  const themes = fd.kort
    .slice(0, 3)
    .map((k) => k.title)
    .join("; ");
  const text =
    lang === "no"
      ? `Ja — innenfor det som er dokumentert på nettsiden kan Marius bidra med faglige sammenhenger som kurs, workshops og foredrag knyttet til kommersiell ledelse, salg, transformasjon og praktisk AI. ${fd.ingress} Eksempler på temaer: ${themes}. MOC leverer primært rådgivnings- og metodeoppdrag; foredrag og workshops vurderes når de passer problemstillingen — ta kontakt for dialog. Row Solutions tilbyr egne kurs og workshops for SMB via rowsolutions.no (adskilt fra MOC).`
      : `Yes — within what is documented on the site, Marius can contribute in professional settings such as courses, workshops and talks on commercial leadership, sales, transformation and practical AI. ${fd.ingress} Example themes: ${themes}. MOC primarily delivers advisory and methodology engagements; talks and workshops are considered when they fit the challenge — get in touch to discuss. Row Solutions offers its own courses and workshops for SMEs via rowsolutions.no (separate from MOC).`;

  return { answer: say(text, lang), sourceIds: [consulting, contact, tabId(lang, "home")] };
}