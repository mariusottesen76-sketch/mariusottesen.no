import type { MetadataRoute } from "next";
import { getAllProjectV2Records } from "./data/projects-v2/registry";
import { projectSitemapLastModified } from "./lib/project-overview-metadata";
import { sitemapLastModifiedFromIso } from "./lib/project-date-format";
import { resolveFaginnleggHubUpdatedAt } from "./data/projects-v2/project-date-resolvers";

const SITE = "https://www.mariusottesen.no";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjectV2Records();
  const siteProject = projects.find((p) => p.id === "mariusottesen-no-2025");
  const faginnleggHub = projects.find((p) => p.id === "ai-faginnlegg-serie-2026");

  const projectRoutes: MetadataRoute.Sitemap = projects
    .filter(
      (p) =>
        p.seo.canonicalPath &&
        !p.seo.canonicalPath.startsWith("/prosjekter") &&
        p.seo.canonicalPath !== "/faginnlegg"
    )
    .map((project) => ({
      url: `${SITE}${project.seo.canonicalPath}`,
      lastModified: projectSitemapLastModified(project),
      changeFrequency: "monthly" as const,
      priority: project.detailLevel === "full" ? 0.7 : 0.5,
    }));

  const homeLastMod = siteProject?.updatedAt ?? siteProject?.publishedAt ?? "2025-11-15";
  const prosjekterLastMod = projects.reduce((max, p) => {
    const iso = p.updatedAt ?? p.publishedAt;
    return iso > max ? iso : max;
  }, "2025-11-15");
  const faginnleggPublishedAt = faginnleggHub?.publishedAt ?? "2026-01-13";
  const faginnleggLastMod =
    resolveFaginnleggHubUpdatedAt(faginnleggPublishedAt) ?? faginnleggPublishedAt;

  return [
    {
      url: SITE,
      lastModified: sitemapLastModifiedFromIso(homeLastMod),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE}/prosjekter`,
      lastModified: sitemapLastModifiedFromIso(prosjekterLastMod),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE}/faginnlegg`,
      lastModified: sitemapLastModifiedFromIso(faginnleggLastMod),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...projectRoutes,
  ];
}
