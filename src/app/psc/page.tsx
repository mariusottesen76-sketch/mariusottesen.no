import type { Metadata } from "next";
import ProjectDetailPage from "../components/project-v2/ProjectDetailPage";
import { getProjectV2ById, buildProjectV2Metadata } from "../data/projects-v2/registry";
import { buildPscStructuredData } from "../lib/psc-structured-data";

const project = getProjectV2ById("predictive-sales-coach-2026")!;

export const metadata: Metadata = buildProjectV2Metadata(project);

export default function PscPage() {
  const structuredData = buildPscStructuredData("no");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ProjectDetailPage slug="predictive-sales-coach" />
    </>
  );
}
