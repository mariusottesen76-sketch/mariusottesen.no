import type { Metadata } from "next";
import Page from "../page";
import { buildSitePageMetadata } from "../lib/site-page-metadata";

export function generateMetadata(): Promise<Metadata> {
  return Promise.resolve(buildSitePageMetadata("results", "no"));
}

export default function ResultaterPage() {
  return <Page initialTab="Resultater" />;
}
