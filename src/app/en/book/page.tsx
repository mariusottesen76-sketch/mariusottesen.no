import type { Metadata } from "next";
import AppShell from "../../AppShell";
import BokProsjektContent from "../../components/bok/BokProsjektContent";
import { buildBokProsjektMetadata, serializeBokBookJsonLd } from "../../lib/bok-prosjekt-metadata";

export const metadata: Metadata = buildBokProsjektMetadata("en");

export default function EnBookPage() {
  const bookJsonLd = serializeBokBookJsonLd("en");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: bookJsonLd }} />
      <AppShell initialTab="Bok" initialLang="en" customContent={<BokProsjektContent />} />
    </>
  );
}
