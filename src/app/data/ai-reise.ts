import { Lang } from "../LanguageContext";

const steps: Record<Lang, string[]> = {
  no: [
    "Problemforståelse",
    "Løsningsdesign",
    "Roadmap",
    "Teknologi",
    "Governance",
    "Personvern",
    "Ansvarlig bruk",
    "Skalering",
    "Menneskelig kontroll",
  ],
  en: [
    "Problem understanding",
    "Solution design",
    "Roadmap",
    "Technology",
    "Governance",
    "Privacy",
    "Responsible use",
    "Scaling",
    "Human control",
  ],
};

export function getAiReiseSteps(lang: Lang): string[] {
  return steps[lang];
}
