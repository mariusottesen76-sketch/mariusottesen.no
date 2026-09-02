import type { Metadata } from "next";
import AppShell from "../../AppShell";
import { buildSitePageMetadata } from "../../lib/site-page-metadata";

export function generateMetadata(): Metadata {
  return buildSitePageMetadata("results", "en");
}

export default function EnResultsPage() {
  return <AppShell initialTab="Resultater" initialLang="en" />;
}
