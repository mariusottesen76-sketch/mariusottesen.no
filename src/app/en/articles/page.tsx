import type { Metadata } from "next";
import AppShell from "../../AppShell";
import { buildArticlesHubMetadata } from "../../lib/articles-hub-metadata";

export function generateMetadata(): Metadata {
  return buildArticlesHubMetadata("en");
}

export default function EnArticlesPage() {
  return <AppShell initialTab="Faginnlegg" initialLang="en" />;
}
