import type { Lang } from "../LanguageContext";
import type { ProjectCategory } from "../data/projects-v2/types";

/** Typebasert etikett for modulstatus «bygget» på detaljsider — uten å endre faktisk modenhet. */
export function getModuleBuiltStatusLabel(
  lang: Lang,
  category?: ProjectCategory,
  slug?: string
): string {
  if (lang === "en") {
    switch (category) {
      case "model_architecture":
      case "case_implementation":
        return "Developed";
      case "video_communication":
        return "Produced";
      case "professional_initiative":
        if (slug === "ai-value-lab-oslo") return "Established";
        if (slug === "ai-faginnlegg-hub") return "Published";
        return "Developed";
      case "strategic_platform":
      case "app_prototype":
      default:
        return "Built";
    }
  }

  switch (category) {
    case "model_architecture":
    case "case_implementation":
      return "Utviklet";
    case "video_communication":
      return "Produsert";
    case "professional_initiative":
      if (slug === "ai-value-lab-oslo") return "Etablert";
      if (slug === "ai-faginnlegg-hub") return "Publisert";
      return "Utviklet";
    case "strategic_platform":
    case "app_prototype":
    default:
      return "Bygget";
  }
}
