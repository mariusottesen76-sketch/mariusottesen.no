import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailPage from "../../components/project-v2/ProjectDetailPage";
import { buildProjectV2Metadata } from "../../data/projects-v2/registry";
import { buildPscStructuredData } from "../../lib/psc-structured-data";
import {
  getProjectByEnSegment,
  getProjectEnStaticParams,
  toStrategicPlatformSlug,
} from "../../lib/project-locale-routes";

type PageProps = {
  params: Promise<{ projectSlug: string }>;
};

export function generateStaticParams() {
  return getProjectEnStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { projectSlug } = await params;
  const project = getProjectByEnSegment(projectSlug);
  if (!project) return {};
  return buildProjectV2Metadata(project, "en");
}

export default async function EnProjectDetailPage({ params }: PageProps) {
  const { projectSlug } = await params;
  const project = getProjectByEnSegment(projectSlug);
  if (!project) notFound();

  const slug = toStrategicPlatformSlug(project);
  const isPsc = project.id === "predictive-sales-coach-2026";

  if (isPsc) {
    const structuredData = buildPscStructuredData("en");
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ProjectDetailPage slug={slug} initialLang="en" />
      </>
    );
  }

  return <ProjectDetailPage slug={slug} initialLang="en" />;
}
