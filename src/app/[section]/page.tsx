import Page from "../page";

const SLUG_TO_TAB: Record<string, string> = {
  erfaring: "Erfaring",
  resultater: "Resultater",
  referanser: "Referanser",
  faginnlegg: "Faginnlegg",
  prosjekter: "Prosjekter",
  consulting: "Consulting",
  cv: "CV & Åpen søknad",
  kontakt: "Kontakt",
};

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const tab = SLUG_TO_TAB[section] ?? "Profil";
  return <Page initialTab={tab} />;
}
