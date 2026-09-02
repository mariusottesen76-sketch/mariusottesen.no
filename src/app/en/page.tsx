import type { Metadata } from "next";
import AppShell from "../AppShell";
import { buildSitePageMetadata } from "../lib/site-page-metadata";

export function generateMetadata(): Metadata {
  return buildSitePageMetadata("home", "en");
}

export default function EnHomePage() {
  return <AppShell initialTab="Profil" initialLang="en" />;
}
