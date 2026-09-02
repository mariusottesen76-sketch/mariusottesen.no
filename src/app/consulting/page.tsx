import type { Metadata } from "next";
import Page from "../page";
import { buildSitePageMetadata } from "../lib/site-page-metadata";

export function generateMetadata(): Promise<Metadata> {
  return Promise.resolve(buildSitePageMetadata("consulting", "no"));
}

export default function ConsultingPage() {
  return <Page initialTab="Consulting" />;
}
