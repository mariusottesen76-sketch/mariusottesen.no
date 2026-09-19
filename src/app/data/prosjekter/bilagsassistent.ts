import { BILAGSASSISTENT_OVERVIEW_IMAGE } from "../../lib/bilagsassistent-brand";
import { type ProsjektType } from "./predictive-sales-coach";

/** Kort metadata for /prosjekter — full dokumentasjon på /bilagsassistent */
export const bilagsassistent: ProsjektType = {
  id: "bilagsassistent-2026-09",
  tittel: {
    no: "Bilagsassistent",
    en: "Receipt Assistant",
  },
  teaser: {
    no: "Automatisert innhenting, kontroll og strukturering av kvitteringer og bilag — Gmail, vedlegg og synkroniserte mapper, med menneskelig kontroll før registrering.",
    en: "Automated collection, review and structuring of receipts and vouchers — Gmail, attachments and synced folders, with human review before registration.",
  },
  bildeUrl: BILAGSASSISTENT_OVERVIEW_IMAGE,
  bildeRamme: "natural",
  dato: "2026-09-19",
  visningsDato: "19.09.26",
  bildeHint: {
    no: "Klikk på bildet for å se Bilagsassistent i større format.",
    en: "Click the image to view Receipt Assistant in a larger format.",
  },
  innhold: { no: "", en: "" },
};
