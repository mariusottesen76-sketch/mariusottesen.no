import type { ProjectCategory } from "../data/projects-v2/types";

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, { no: string; en: string }> = {
  strategic_platform: {
    no: "Strategisk plattform",
    en: "Strategic platform",
  },
  app_prototype: {
    no: "App og funksjonell prototype",
    en: "App and functional prototype",
  },
  case_implementation: {
    no: "Case og implementering",
    en: "Case and implementation",
  },
  model_architecture: {
    no: "Modell, arkitektur og arbeidsflyt",
    en: "Model, architecture and workflow",
  },
  professional_initiative: {
    no: "Faglig initiativ og samarbeid",
    en: "Professional initiative and collaboration",
  },
  video_communication: {
    no: "Video og formidling",
    en: "Video and communication",
  },
};
