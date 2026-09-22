import type { Metadata } from "next";
import AppShell from "../AppShell";
import BokProsjektContent from "../components/bok/BokProsjektContent";
import { buildBokProsjektMetadata } from "../lib/bok-prosjekt-metadata";

export const metadata: Metadata = buildBokProsjektMetadata("no");

export default function BokPage() {
  return <AppShell initialTab="Faginnlegg" customContent={<BokProsjektContent />} />;
}
