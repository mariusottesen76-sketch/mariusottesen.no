import {
  BILAGSASSISTENT_ALT,
  BILAGSASSISTENT_HERO_IMAGE,
  BILAGSASSISTENT_MATURITY_LABEL,
  BILAGSASSISTENT_OVERVIEW_IMAGE,
} from "../../../lib/bilagsassistent-brand";
import type { ProjectV2Record } from "../types";
import { relevantVidereLinksForSlug } from "../relevant-videre-catalog";

export const bilagsassistentV2: ProjectV2Record = {
  id: "bilagsassistent-2026-09",
  slug: "bilagsassistent",
  category: "app_prototype",
  layoutVersion: "project_v2",
  accessMode: "no_live_solution",
  detailLevel: "full",
  publishedAt: "2026-09-19",
  date: "2026-09-19",
  displayDate: { no: "19.09.26", en: "19.09.26" },
  title: {
    no: "Bilagsassistent: Fra spredte kvitteringer til strukturert bilagsflyt",
    en: "Receipt Assistant: From scattered receipts to a structured document workflow",
  },
  subtitle: {
    no: "Automatisert innhenting, kontroll og strukturering av kvitteringer og bilag",
    en: "Automated collection, review and structuring of receipts and vouchers",
  },
  statusLabel: BILAGSASSISTENT_MATURITY_LABEL,
  maturityLevel: BILAGSASSISTENT_MATURITY_LABEL,
  overviewIntroduction: {
    no: "Reduserer tiden ledere og admin bruker på å finne, kontrollere og arkivere kvitteringer — med tydelig kontrollkø før bilag registreres.",
    en: "Reduces the time leaders and admins spend finding, reviewing and archiving receipts — with a clear review queue before vouchers are registered.",
  },
  overview: {
    what: {
      no: "En Windows-basert arbeidsflate som reduserer manuelt arbeid med å finne, kontrollere, navngi, registrere og arkivere bilag.",
      en: "A Windows-based workspace that reduces manual work finding, reviewing, naming, registering and archiving vouchers.",
    },
    challenge: {
      no: "Kvitteringer og fakturaer ligger ofte spredt mellom innbokser, vedlegg, mobilbilder, nedlastinger og leverandørportaler. Det skaper tidkrevende leting, mangelfull dokumentasjon og risiko for duplikater eller glemte bilag.",
      en: "Receipts and invoices are often scattered across inboxes, attachments, mobile photos, downloads and supplier portals. That creates time-consuming searching, incomplete documentation and risk of duplicates or forgotten vouchers.",
    },
    built: {
      no: "Pilotklar MVP: innhenting fra e-post og mapper, forslag til bilag, duplikatsjekk, menneskelig godkjenning, register og arkiv — testet i avgrenset reell bruk.",
      en: "Pilot-ready MVP: collection from email and folders, voucher suggestions, duplicate check, human approval, register and archive — tested in limited real-world use.",
    },
    how: {
      no: "Kilde → mulig bilag → dokumentuttrekk → duplikatkontroll → klassifisering → menneskelig kontroll → registrering → arkivering.",
      en: "Source → possible voucher → document extraction → duplicate check → classification → human review → registration → archiving.",
    },
    relevance: {
      no: "Prosjektet viser hvordan en fragmentert administrativ arbeidsprosess kan omformes til en kontrollert og skalerbar arbeidsflyt med automatisering, tydelige beslutningspunkter og menneskelig kontroll.",
      en: "The project shows how a fragmented administrative process can become a controlled, scalable workflow with automation, clear decision points and human review.",
    },
    status: {
      no: "Ferdigstilt funksjonell MVP · pilotklar. Testet i avgrenset reell bruk — ikke kommersielt lansert eller rullet ut til eksterne kunder.",
      en: "Completed functional MVP · pilot-ready. Tested in limited real-world use — not commercially launched or rolled out to external customers.",
    },
    development: {
      no: "Videre utvikling kan omfatte Outlook, flere e-postkontoer, felles mobilinnboks, forbedret dokumenttolkning, regnskapssystemintegrasjoner, eksport til Tripletex og sikrere sentral administrasjon.",
      en: "Further development may include Outlook, multiple email accounts, shared mobile inbox, improved document parsing, accounting system integrations, export to Tripletex and more secure central administration.",
    },
    adaptation: {
      no: "Grunnmodellen kan tilpasses små virksomheter med ulike selskaper, dokumentkilder, kostnadskategorier og krav til kontroll og eksport.",
      en: "The core model can be adapted for small businesses with different entities, document sources, cost categories and requirements for review and export.",
    },
  },
  overviewImage: BILAGSASSISTENT_OVERVIEW_IMAGE,
  detailHeroImage: BILAGSASSISTENT_HERO_IMAGE,
  detailHeroObjectPosition: "center",
  overviewImageMissing: false,
  detailHeroMissing: false,
  needsNewOverviewImage: false,
  needsNewDetailHero: false,
  altText: BILAGSASSISTENT_ALT.overview,
  detailHeroAlt: BILAGSASSISTENT_ALT.hero,
  overviewImageFormat: "standard_1x3",
  detailDestination: "/bilagsassistent",
  seo: {
    title: {
      no: "Bilagsassistent | Automatisert bilagsflyt for små virksomheter | Marius Ottesen",
      en: "Receipt Assistant | Automated voucher workflow for small businesses | Marius Ottesen",
    },
    description: {
      no: "Mindre manuelt bilagsarbeid for små virksomheter — innhenting, kontrollkø og arkiv. MVP, demo etter avtale.",
      en: "Less manual voucher work for small businesses — collection, review queue and archive. MVP, demo by agreement.",
    },
    ogImage: BILAGSASSISTENT_HERO_IMAGE,
    canonicalPath: "/bilagsassistent",
  },
  strategicPlatformSlug: "bilagsassistent",
  fagPerspektivLinks: relevantVidereLinksForSlug("bilagsassistent"),
};
