import type { Metadata } from "next";
import AppShell from "../AppShell";
import BokProsjektContent from "../components/bok/BokProsjektContent";
import { buildBokProsjektMetadata, serializeBokBookJsonLd } from "../lib/bok-prosjekt-metadata";

export const metadata: Metadata = buildBokProsjektMetadata("no");

export default function BokPage() {
  const bookJsonLd = serializeBokBookJsonLd("no");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: bookJsonLd }} />
      <AppShell initialTab="Bok" customContent={<BokProsjektContent />} />
    </>
  );
}
