import type { Metadata } from "next";
import AppShell from "../../AppShell";
import { buildSitePageMetadata } from "../../lib/site-page-metadata";

export function generateMetadata(): Metadata {
  return buildSitePageMetadata("cv", "en");
}

export default function EnCvPage() {
  return <AppShell initialTab="CV & Åpen søknad" initialLang="en" />;
}
