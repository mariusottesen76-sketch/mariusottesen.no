import type { Metadata } from "next";
import AppShell from "../../AppShell";
import { buildSitePageMetadata } from "../../lib/site-page-metadata";

export function generateMetadata(): Metadata {
  return buildSitePageMetadata("experience", "en");
}

export default function EnExperiencePage() {
  return <AppShell initialTab="Erfaring" initialLang="en" />;
}
