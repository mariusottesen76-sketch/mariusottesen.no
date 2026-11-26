import type { Lang } from "../../LanguageContext";
import { contactPath } from "../../lib/assistant-knowledge/fixed-replies";

export type AssistantUiCopy = {
  launcherLabel: string;
  title: string;
  subtitle: string;
  aiDisclaimer: string;
  intro: string;
  placeholder: string;
  send: string;
  sending: string;
  close: string;
  contactCta: string;
  sourcesHeading: string;
  suggestions: string[];
  showMoreSuggestions: string;
  hideExtraSuggestions: string;
  toggleSuggestions: string;
    errors: {
    tooLong: string;
    disabled: string;
    rateLimited: string;
    generic: string;
    timeout: string;
    modelUnavailable: string;
    validationFailed: string;
    empty: string;
  };
  contactHref: string;
};

const COPY: Record<Lang, Omit<AssistantUiCopy, "contactHref">> = {
  no: {
    launcherLabel: "Utforsk Marius",
    title: "Marius' digitale assistent",
    subtitle: "Kompetanse, rådgivning og AI-prosjekter",
    aiDisclaimer: "Dette er en AI-assistent. Svarene bygger på godkjent innhold på nettstedet.",
    intro:
      "Hei! Jeg kan hjelpe deg å finne relevant informasjon om Marius' erfaring, resultater, rådgivning og AI-prosjekter. Hva ønsker du å utforske?",
    placeholder: "Skriv spørsmålet ditt …",
    send: "Send",
    sending: "Tenker …",
    close: "Lukk chat",
    contactCta: "Kontakt Marius",
    sourcesHeading: "Kilder på nettstedet",
    suggestions: [
      "Hvordan kan Marius hjelpe virksomheten vår?",
      "Hvilke lederroller passer Marius til?",
      "Hva tilbyr Marius Ottesen Consulting?",
      "Hva er Row Solutions, og hvordan kan de hjelpe oss?",
    ],
    showMoreSuggestions: "Vis flere forslag",
    hideExtraSuggestions: "Skjul ekstra forslag",
    toggleSuggestions: "Forslag",
    errors: {
      tooLong: "Spørsmålet er for langt. Kort det ned og prøv igjen.",
      disabled: "AI-assistenten er ikke tilgjengelig akkurat nå. Bruk kontaktskjemaet i stedet.",
      rateLimited:
        "Du har sendt mange spørsmål på kort tid. Vent litt før du prøver igjen.",
      generic: "Noe gikk galt. Prøv igjen om litt, eller kontakt Marius direkte.",
      timeout: "Det tar dessverre litt for lang tid å hente svaret. Prøv gjerne igjen.",
      modelUnavailable:
        "Beklager, AI-assistenten er midlertidig utilgjengelig. Prøv gjerne igjen om litt.",
      validationFailed:
        "Assistenten klarte ikke å formatere svaret. Prøv igjen om litt, eller bruk lenkene på nettstedet.",
      empty: "Skriv et spørsmål før du sender.",
    },
  },
  en: {
    launcherLabel: "Explore Marius",
    title: "Marius' digital assistant",
    subtitle: "Skills, advisory services and AI projects",
    aiDisclaimer: "This is an AI assistant. Answers are based on approved content on the site.",
    intro:
      "Hi! I can help you find relevant information about Marius' experience, results, advisory work and AI projects. What would you like to explore?",
    placeholder: "Type your question …",
    send: "Send",
    sending: "Thinking …",
    close: "Close chat",
    contactCta: "Contact Marius",
    sourcesHeading: "Sources on the site",
    suggestions: [
      "How can Marius help our business?",
      "Which leadership roles is Marius a strong fit for?",
      "What does Marius Ottesen Consulting offer?",
      "What is Row Solutions, and how can they help us?",
    ],
    showMoreSuggestions: "Show more suggestions",
    hideExtraSuggestions: "Hide extra suggestions",
    toggleSuggestions: "Suggestions",
    errors: {
      tooLong: "Your question is too long. Please shorten it and try again.",
      disabled: "The AI assistant is not available right now. Please use the contact form instead.",
      rateLimited:
        "You've sent several questions in a short time. Please wait a moment before trying again.",
      generic: "Something went wrong. Try again shortly, or contact Marius directly.",
      timeout: "Unfortunately it is taking too long to fetch an answer. Please try again.",
      modelUnavailable:
        "Sorry, the AI assistant is temporarily unavailable. Please try again in a little while.",
      validationFailed:
        "The assistant could not format a valid answer. Try again shortly, or use the links on the site.",
      empty: "Enter a question before sending.",
    },
  },
};

export function getAssistantUiCopy(lang: Lang): AssistantUiCopy {
  return { ...COPY[lang], contactHref: contactPath(lang) };
}