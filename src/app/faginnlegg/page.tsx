import type { Metadata } from "next";
import Page from "../page";
import { buildArticlesHubMetadata } from "../lib/articles-hub-metadata";

export const metadata: Metadata = buildArticlesHubMetadata("no");

export default function FaginnleggPage() {
  return <Page initialTab="Faginnlegg" />;
}
