import type { Lang } from "../../LanguageContext";
import {
  PUBLIC_CONTACT_EMAIL,
  PUBLIC_CONTACT_PAGE,
  PUBLIC_CONTACT_PHONE_DISPLAY,
  PUBLIC_LINKEDIN_URL,
} from "../../data/public-contact-knowledge";
import { normalizeExcerptForAssistant } from "./excerpt-voice";
import { isContactGuidanceQuestion } from "./question-policy";

function tabId(lang: Lang, key: string): string {
  return `tab:${key}:${lang}`;
}

function say(text: string, lang: Lang): string {
  return normalizeExcerptForAssistant(text.trim(), lang);
}

export function isPublicContactDetailsQuestion(question: string): boolean {
  const q = question.trim();
  if (isContactGuidanceQuestion(q)) return true;
  return (
    /\b(telefon|phone|mobil|nummer|e-?post|email|linkedin|ringe\s+marius|call\s+marius)\b/i.test(q) &&
    /\b(marius|kontakt|contact|hans|his|direkte|direct)\b/i.test(q)
  );
}

export function tryGroundedPublicContactAnswer(
  question: string,
  lang: Lang
): { answer: string; sourceIds: string[] } | null {
  if (!isPublicContactDetailsQuestion(question)) return null;

  const contactPath = PUBLIC_CONTACT_PAGE[lang];
  const text =
    lang === "no"
      ? `Offentlig kontaktinformasjon: telefon ${PUBLIC_CONTACT_PHONE_DISPLAY}, e-post ${PUBLIC_CONTACT_EMAIL}, LinkedIn ${PUBLIC_LINKEDIN_URL}. Kontaktside: ${contactPath} (skjema og veiledning). For profesjonelle henvendelser om consulting eller roller kan du bruke skjemaet eller ta direkte kontakt på telefon/e-post.`
      : `Public contact details: phone ${PUBLIC_CONTACT_PHONE_DISPLAY}, email ${PUBLIC_CONTACT_EMAIL}, LinkedIn ${PUBLIC_LINKEDIN_URL}. Contact page: ${contactPath} (form and guidance). For professional enquiries about consulting or roles you can use the form or reach out directly by phone or email.`;

  return {
    answer: say(text, lang),
    sourceIds: [tabId(lang, "contact"), tabId(lang, "consulting"), tabId(lang, "home")],
  };
}