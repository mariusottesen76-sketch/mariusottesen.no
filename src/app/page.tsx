import type { Metadata } from "next";
import AppShell from "./AppShell";
import { buildSitePageMetadata } from "./lib/site-page-metadata";

export function generateMetadata(): Metadata {
  return buildSitePageMetadata("home", "no");
}

export default function Page({
  initialTab = "Profil",
  initialLang = "no",
}: {
  initialTab?: string;
  initialLang?: "no" | "en";
} = {}) {
  return <AppShell initialTab={initialTab} initialLang={initialLang} />;
}
