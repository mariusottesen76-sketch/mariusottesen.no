import { CV_PDF_VERSJON, cvPdfUrl, soknadPdfUrl } from "./dokumentasjon";

/**
 * Godkjente offentlige dokumenter for assistentens autoritative fakta.
 * Ved PDF-bytt: oppdater fil på disk, bump CV_PDF_VERSJON, oppdater sha256 her og valider career-facts.
 * PDF-innhold overskriver ikke career-facts automatisk — manuell synk.
 */
export const APPROVED_CV_PDF_SHA256 =
  "67B7C64742A05344AB99CA6A4B0E6965E273267B5D92DB58AAAF63AEF5946F48";

export const APPROVED_OPEN_APPLICATION_PDF_SHA256 =
  "C13291761173EB057F006B1A2DE02801C4777B6E8749BC9B1904C957D0D9D890";

export const APPROVED_DOCUMENTS = {
  cvPdf: {
    originalFilename: "CV for Marius Ottesen - 04.11.2026.pdf",
    publicPath: "/pdf/cv.pdf",
    publicUrlWithCache: cvPdfUrl,
    version: CV_PDF_VERSJON,
    sha256: APPROVED_CV_PDF_SHA256,
    authoritativeFor: ["employers", "positions", "periods", "education", "documented_responsibilities"] as const,
  },
  openApplicationPdf: {
    originalFilename: "nettside-apen-soknad-04.11.26.pdf",
    publicPath: "/pdf/soknad.pdf",
    publicUrlWithCache: soknadPdfUrl,
    version: CV_PDF_VERSJON,
    sha256: APPROVED_OPEN_APPLICATION_PDF_SHA256,
    authoritativeFor: [
      "leadership_philosophy",
      "leadership_style",
      "value_creation",
      "motivation",
      "target_roles",
      "competence_narrative",
    ] as const,
  },
} as const;