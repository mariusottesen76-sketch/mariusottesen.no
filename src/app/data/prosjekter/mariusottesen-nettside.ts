import { type ProsjektType } from "./predictive-sales-coach";

/** Kort metadata for /prosjekter — full dokumentasjon på /mariusottesen-nettside */
export const mariusottesenNettside: ProsjektType = {
  id: "mariusottesen-no-2025",
  tittel: {
    no: "Nettside for lederprofil, portefølje og AI-demonstratorer (mariusottesen.no)",
    en: "Website for leadership profile, portfolio and AI demonstrators (mariusottesen.no)",
  },
  teaser: {
    no: "Publisert profil- og porteføljeplattform — dokumentert på egen prosjektside.",
    en: "Published profile and portfolio platform — documented on a dedicated project page.",
  },
  bildeUrl: "/images/profil.jpg",
  bildeRamme: "natural",
  dato: "2025-11-15",
  visningsDato: "15.11.25",
  bildeHint: {
    no: "Klikk på bildet for å se mariusottesen.no i større format.",
    en: "Click the image to view mariusottesen.no in a larger format.",
  },
  bilderUnderHovedbilde: [
    {
      src: "/images/mariusottesen-no-faginnlegg.png?v=20260707",
      alt: {
        no: "Skjermbilde av faginnlegg-siden på mariusottesen.no",
        en: "Screenshot of the articles page on mariusottesen.no",
      },
    },
  ],
  innhold: { no: "", en: "" },
};
