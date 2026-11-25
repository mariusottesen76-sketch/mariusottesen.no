import type { Lang } from "../../LanguageContext";
import type { AssistantAnswerCategory } from "./answer-categories";

const CONTACT_PATH = { no: "/consulting#cons-dialog-heading", en: "/en/consulting#cons-dialog-heading" } as const;

export function fixedReply(
  category: Exclude<AssistantAnswerCategory, "ANSWER">,
  lang: Lang
): string {
  if (category === "RESTRICTED") {
    return lang === "no"
      ? "Dette kan jeg ikke besvare. Assistenten gir kun opplysninger fra godkjent innhold på mariusottesen.no. Kontakt Marius direkte for private eller sensitive spørsmål."
      : "I cannot answer that. The assistant only provides information from approved content on mariusottesen.no. Contact Marius directly for private or sensitive questions.";
  }
  if (category === "OFF_TOPIC") {
    return lang === "no"
      ? "Spørsmålet ligger utenfor hva denne assistenten kan hjelpe med. Den dekker Marius Ottesens lederprofil, erfaring, resultater, consulting, AI-prosjekter, faginnlegg og bokprosjektet VerdisKIftet på mariusottesen.no."
      : "That question is outside what this assistant covers. It addresses Marius Ottesen's leadership profile, experience, results, consulting, AI projects, articles and the VerdisKIftet book project on mariusottesen.no.";
  }
  return lang === "no"
    ? `Dette er ikke tilstrekkelig dokumentert i godkjent innhold på nettstedet akkurat nå. Se gjerne relevante sider, eller kontakt Marius via ${CONTACT_PATH.no}.`
    : `This is not sufficiently documented in approved site content right now. See relevant pages, or contact Marius via ${CONTACT_PATH.en}.`;
}

export function contactPath(lang: Lang): string {
  return CONTACT_PATH[lang];
}