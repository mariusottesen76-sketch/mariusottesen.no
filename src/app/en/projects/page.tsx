import type { Metadata } from "next";
import AppShell from "../../AppShell";
import { buildProjectsHubMetadata } from "../../lib/projects-hub-metadata";

export function generateMetadata(): Metadata {
  return buildProjectsHubMetadata("en");
}

export default function EnProjectsPage() {
  return <AppShell initialTab="Prosjekter" initialLang="en" />;
}
