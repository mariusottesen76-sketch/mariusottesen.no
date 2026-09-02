import type { Metadata } from "next";
import AppShell from "../../AppShell";
import { buildSitePageMetadata } from "../../lib/site-page-metadata";

export function generateMetadata(): Metadata {
  return buildSitePageMetadata("contact", "en");
}

export default function EnContactPage() {
  return <AppShell initialTab="Kontakt" initialLang="en" />;
}
