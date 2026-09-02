import type { Metadata } from "next";
import Page from "../page";
import { buildSitePageMetadata } from "../lib/site-page-metadata";

export function generateMetadata(): Promise<Metadata> {
  return Promise.resolve(buildSitePageMetadata("cv", "no"));
}

export default function CVPage() {
  return <Page initialTab="CV & Åpen søknad" />;
}
