import type { Metadata } from "next";
import AppShell from "../../AppShell";
import { buildSitePageMetadata } from "../../lib/site-page-metadata";

export function generateMetadata(): Metadata {
  return buildSitePageMetadata("consulting", "en");
}

export default function EnConsultingPage() {
  return <AppShell initialTab="Consulting" initialLang="en" />;
}
