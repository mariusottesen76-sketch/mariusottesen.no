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
    launcherLabel: "Spør om Marius",
    title: "Marius' AI-assistent",
    subtitle: "Finn erfaring, resultater, tjenester og prosjekter.",
    aiDisclaimer: "Dette er en AI-assistent. Svarene bygger på godkjent innhold på nettstedet.",
    intro: "Hei! Spør om erfaring, resultater, tjenester eller prosjekter — eller velg et forslag nedenfor.",
    placeholder: "Skriv spørsmålet ditt …",
    send: "Send",
    sending: "Tenker …",
    close: "Lukk chat",
    contactCta: "Kontakt Marius",
    sourcesHeading: "Kilder på nettstedet",
    suggestions: [
      "Hvilke lederroller passer Marius til?",
      "Hvilke resultater har han oppnådd?",
      "Hvordan kan Marius hjelpe vår virksomhet?",
      "Hvilke AI-prosjekter har han utviklet?",
    ],
    showMoreSuggestions: "Vis flere forslag",
    hideExtraSuggestions: "Skjul ekstra forslag",
    toggleSuggestions: "Forslag",
    errors: {
      tooLong: "Spørsmålet er for langt. Kort det ned og prøv igjen.",
      disabled: "AI-assistenten er ikke tilgjengelig akkurat nå. Bruk kontaktskjemaet i stedet.",
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
    launcherLabel: "Ask about Marius",
    title: "Marius' AI assistant",
    subtitle: "Find experience, results, services and projects.",
    aiDisclaimer: "This is an AI assistant. Answers are based on approved content on the site.",
    intro: "Hi! Ask about experience, results, services or projects — or pick a suggestion below.",
    placeholder: "Type your question …",
    send: "Send",
    sending: "Thinking …",
    close: "Close chat",
    contactCta: "Contact Marius",
    sourcesHeading: "Sources on the site",
    suggestions: [
      "Which leadership roles is Marius a strong fit for?",
      "What results has he delivered?",
      "How can Marius help our business?",
      "Which AI projects has he built?",
    ],
    showMoreSuggestions: "Show more suggestions",
    hideExtraSuggestions: "Hide extra suggestions",
    toggleSuggestions: "Suggestions",
    errors: {
      tooLong: "Your question is too long. Please shorten it and try again.",
      disabled: "The AI assistant is not available right now. Please use the contact form instead.",
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