import type { Metadata } from "next";
import Page from "../page";
import { buildProjectsHubMetadata } from "../lib/projects-hub-metadata";

export const metadata: Metadata = buildProjectsHubMetadata("no");

export default function ProsjekterPage() {
  return <Page initialTab="Prosjekter" />;
}
