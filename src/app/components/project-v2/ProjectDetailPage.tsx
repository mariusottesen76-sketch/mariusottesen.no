"use client";

import type { StrategicPlatformSlug } from "../../data/strategic-platform-projects/types";
import type { Lang } from "../../LanguageContext";
import StrategicProjectDetailPage from "../strategic-platform/StrategicProjectDetailPage";

/**
 * Felles inngang for project_v2-detaljsider.
 * Detaljinnhold hentes fra strategic platform-laget inntil alle prosjekter har egen v2-detail.
 */
export default function ProjectDetailPage({
  slug,
  initialLang = "no",
}: {
  slug: StrategicPlatformSlug;
  initialLang?: Lang;
}) {
  return <StrategicProjectDetailPage slug={slug} initialLang={initialLang} />;
}
