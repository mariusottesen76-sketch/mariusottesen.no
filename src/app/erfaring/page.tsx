import type { Metadata } from "next";
import Page from "../page";
import { buildSitePageMetadata } from "../lib/site-page-metadata";

export function generateMetadata(): Promise<Metadata> {
  return Promise.resolve(buildSitePageMetadata("experience", "no"));
}

export default function ErfaringPage() {
  return <Page initialTab="Erfaring" />;
}
