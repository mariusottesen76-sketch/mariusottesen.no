import type { Metadata } from "next";
import ProjectDetailPage from "../components/project-v2/ProjectDetailPage";
import { getProjectV2ById, buildProjectV2Metadata } from "../data/projects-v2/registry";

const project = getProjectV2ById("ai-laget-2026")!;

export const metadata: Metadata = buildProjectV2Metadata(project);

export default function AiLagetPage() {
  return <ProjectDetailPage slug="ai-laget" />;
}