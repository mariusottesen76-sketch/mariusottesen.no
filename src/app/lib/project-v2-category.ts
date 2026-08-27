import type { ProjectCategory } from "../data/projects-v2/types";

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, { no: string; en: string }> = {
  strategic_platform: {
    no: "Strategiske plattformer",
    en: "Strategic platforms",
  },
  app_prototype: {
    no: "Apper og verktøy",
    en: "Apps and tools",
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
    no: "Fag, samarbeid og formidling",
    en: "Knowledge, collaboration and communication",
  },
  video_communication: {
    no: "Video og formidling",
    en: "Video and communication",
  },
};
