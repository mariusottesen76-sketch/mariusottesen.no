import type { Metadata } from "next";
import AppShell from "../../AppShell";
import BokProsjektContent from "../../components/bok/BokProsjektContent";
import { buildBokProsjektMetadata } from "../../lib/bok-prosjekt-metadata";

export const metadata: Metadata = buildBokProsjektMetadata("en");

export default function EnBookPage() {
  return (
    <AppShell initialTab="Faginnlegg" initialLang="en" customContent={<BokProsjektContent />} />
  );
}
