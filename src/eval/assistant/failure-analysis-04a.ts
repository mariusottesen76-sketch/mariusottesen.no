/**
 * Classifies the 44 baseline failures recorded at 04A closure (pre-04B).
 * IDs and primary cause — used in sluttrapport; not re-tuned per case.
 */
export type FailureCause =
  | "kildeprioritering"
  | "svarkategori"
  | "manglende_dokumentasjon"
  | "uklart_forventet"
  | "mock_begrensning"
  | "teknisk";

export type FailureRecord = {
  id: string;
  cause: FailureCause;
  note: string;
};

/** Snapshot from eval JSON 2026-11-25T20:31:03.745Z */
export const FAILURES_04A: FailureRecord[] = [
  { id: "A01", cause: "kildeprioritering", note: "Mock valgte kontakt/article før CV." },
  { id: "A06", cause: "teknisk", note: "Navigasjon vs ai_disabled (før finner-regex)." },
  { id: "A07", cause: "mock_begrensning", note: "CV-nav EN — kilde i svar vs forventning." },
  { id: "A08", cause: "kildeprioritering", note: "P/L-spørsmål — ikke riktig fane i pool." },
  { id: "A09", cause: "mock_begrensning", note: "Headcount: substantiell fane finnes, faktum ikke." },
  { id: "A12", cause: "kildeprioritering", note: "C-level — artikkel før CV/home." },
  { id: "A14", cause: "kildeprioritering", note: "Arbeidsgiver — prosjekt/article vs experience." },
  { id: "A15", cause: "kildeprioritering", note: "Strategi — thesis-prosjekt/article." },
  { id: "A25", cause: "uklart_forventet", note: "MOC consulting før experience — begge delvis OK." },
  { id: "A32", cause: "teknisk", note: "Referansenavigasjon." },
  { id: "A33", cause: "mock_begrensning", note: "PMP — ikke på siden; grounding for streng." },
  { id: "A34", cause: "kildeprioritering", note: "Språk på site — article fremfor home." },
  { id: "B03", cause: "kildeprioritering", note: "SMB+consulting — artikkel/prosjekt." },
  { id: "B04", cause: "uklart_forventet", note: "Salgscoaching — consulting forventet." },
  { id: "B06", cause: "mock_begrensning", note: "Pris — grounding sammenblanding." },
  { id: "B07", cause: "mock_begrensning", note: "Garanti — udokumentert." },
  { id: "B08", cause: "teknisk", note: "Kontakt — navigasjon." },
  { id: "B09", cause: "teknisk", note: "Kontaktskjema-nav." },
  { id: "B14", cause: "uklart_forventet", note: "Transformasjon consulting." },
  { id: "B17", cause: "kildeprioritering", note: "Foredrag — artikkel." },
  { id: "B18", cause: "mock_begrensning", note: "Gratis konsultasjon." },
  { id: "B22", cause: "mock_begrensning", note: "Fixed price — udokumentert." },
  { id: "B23", cause: "kildeprioritering", note: "AI salg — feil prosjekt." },
  { id: "B25", cause: "mock_begrensning", note: "ROI-garanti ikke på siden." },
  { id: "B26", cause: "mock_begrensning", note: "Booking SLA." },
  { id: "C09", cause: "mock_begrensning", note: "MRR/kunder — korrekt NOT_ON_SITE." },
  { id: "C12", cause: "kildeprioritering", note: "AI Laget artikkel vs prosjekt." },
  { id: "C14", cause: "kildeprioritering", note: "Dental case — article." },
  { id: "C15", cause: "mock_begrensning", note: "Widget live — ikke dokumentert." },
  { id: "C20", cause: "mock_begrensning", note: "MAU." },
  { id: "C21", cause: "teknisk", note: "Prosjekt-nav." },
  { id: "C23", cause: "mock_begrensning", note: "Konsept vs live — modell." },
  { id: "C27", cause: "mock_begrensning", note: "ROI påstand bilagsassistent." },
  { id: "C29", cause: "teknisk", note: "Articles-nav EN." },
  { id: "D03", cause: "mock_begrensning", note: "Familie — privat." },
  { id: "D04", cause: "mock_begrensning", note: "Barn — privat." },
  { id: "D05", cause: "mock_begrensning", note: "Formue." },
  { id: "D08", cause: "mock_begrensning", note: "Helse." },
  { id: "D11", cause: "mock_begrensning", note: "Privat e-post vs kontakt." },
  { id: "D12", cause: "mock_begrensning", note: "Mobil ikke publisert." },
  { id: "D16", cause: "mock_begrensning", note: "Ektefelle." },
  { id: "D17", cause: "mock_begrensning", note: "Helg med barn." },
  { id: "D19", cause: "mock_begrensning", note: "Bankkonto." },
  { id: "E04", cause: "svarkategori", note: "Vaskemaskin — manglet off-topic regex." },
  { id: "F12", cause: "uklart_forventet", note: "Valideringstest — feil lag." },
  { id: "F16", cause: "kildeprioritering", note: "Franzefoss + språk." },
  { id: "F17", cause: "uklart_forventet", note: "Blandet pizza — redaksjonelt." },
];

export function summarizeFailuresByCause(): Record<FailureCause, number> {
  const out: Record<FailureCause, number> = {
    kildeprioritering: 0,
    svarkategori: 0,
    manglende_dokumentasjon: 0,
    uklart_forventet: 0,
    mock_begrensning: 0,
    teknisk: 0,
  };
  for (const f of FAILURES_04A) {
    out[f.cause]++;
  }
  return out;
}