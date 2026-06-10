import { Lang } from "../LanguageContext";
import { AKTUELL_FOR_ROLLER } from "./aktuell-for-roller";

export type VerdiKort = { title: string; text: string };

const data = {
  no: {
    verdiSituasjoner: {
      title: "Hvor jeg skaper mest verdi",
      ingress:
        "Jeg skaper størst verdi i virksomheter som trenger sterkere kommersiell retning, bedre salgsstruktur og mer gjennomføringskraft.",
      kort: [
        {
          title: "Når vekst krever mer struktur",
          text: "Når salgsteamet trenger tydeligere mål, bedre prioritering, sterkere oppfølging og mer presis gjennomføring.",
        },
        {
          title: "Når strategi må bli operativ handling",
          text: "Når planer, KPI-er, CRM, team og lederrytme må kobles tettere sammen for å skape faktisk fremdrift.",
        },
        {
          title: "Når salg, drift og teknologi må spille bedre sammen",
          text: "Når virksomheten trenger bedre samspill mellom kommersiell ledelse, kundeinnsikt, arbeidsflyt, data og digitale verktøy.",
        },
        {
          title: "Når AI skal brukes praktisk og forretningsnært",
          text: "Når AI skal kobles til reelle behov, bedre beslutningsstøtte, mer effektiv arbeidsflyt og målbar kommersiell verdi.",
        },
      ] satisfies VerdiKort[],
    },
    cvRekrutterere: {
      title: "For rekrutterere og arbeidsgivere",
      intro:
        "Denne siden er laget for deg som raskt vil vurdere min relevans for kommersielle lederroller, salgsledelse, daglig leder-roller i SMB, Business Unit Management eller kommersiell transformasjon.",
      kortVurderingLabel: "Kort vurdering",
      kortVurdering:
        "Jeg passer best i roller der kommersiell retning, salgsstruktur, teamutvikling, endringskraft og gjennomføring må henge sammen. Min styrke ligger i å kombinere ledererfaring, P/L-forståelse, salgsledelse, KPI/CRM, organisasjonsutvikling og praktisk AI-/digital kompetanse. Jeg er kjent for å skape fremdrift i organisasjoner som trenger klar retning, høy gjennomføringsevne og bedre samspill mellom strategi, salg, drift og teknologi.",
      rollerLabel: "Mest relevant for roller innen",
      matchLabel: "Sterkest match når virksomheten trenger",
      matchText:
        "Tydeligere kommersiell retning, bedre salgsstruktur, sterkere gjennomføring, mer datadrevet oppfølging, bedre samspill mellom salg og drift, eller praktisk bruk av AI og digitale arbeidsformer i kommersiell utvikling.",
      nesteStegLabel: "Neste steg",
      nesteStegText:
        "Se CV, resultater og referanser – eller ta kontakt direkte dersom du vurderer en konkret rolle eller ønsker en kort avklaring.",
      ctaResultater: "Se resultater",
      ctaReferanser: "Se referanser",
      ctaKontakt: "Ta kontakt",
    },
  },
  en: {
    verdiSituasjoner: {
      title: "Where I create the most value",
      ingress:
        "I create the greatest value in organisations that need stronger commercial direction, better sales structure and more execution power.",
      kort: [
        {
          title: "When growth requires more structure",
          text: "When the sales team needs clearer goals, better prioritisation, stronger follow-up and more precise execution.",
        },
        {
          title: "When strategy must become operational action",
          text: "When plans, KPIs, CRM, teams and leadership rhythm must connect more closely to create real momentum.",
        },
        {
          title: "When sales, operations and technology must work better together",
          text: "When the organisation needs better alignment between commercial leadership, customer insight, workflow, data and digital tools.",
        },
        {
          title: "When AI must be used practically and close to the business",
          text: "When AI must connect to real needs, better decision support, more efficient workflow and measurable commercial value.",
        },
      ] satisfies VerdiKort[],
    },
    cvRekrutterere: {
      title: "For recruiters and employers",
      intro:
        "This page is designed for you who want to quickly assess my relevance for commercial leadership roles, sales leadership, managing director roles in SMBs, Business Unit Management or commercial transformation.",
      kortVurderingLabel: "Quick assessment",
      kortVurdering:
        "I fit best in roles where commercial direction, sales structure, team development, change capability and execution must work together. My strength lies in combining leadership experience, P/L understanding, sales leadership, KPI/CRM, organisational development and practical AI/digital competence. I am known for creating momentum in organisations that need clear direction, strong execution capability and better alignment between strategy, sales, operations and technology.",
      rollerLabel: "Most relevant for roles in",
      matchLabel: "Strongest match when the organisation needs",
      matchText:
        "Clearer commercial direction, better sales structure, stronger execution, more data-driven follow-up, better alignment between sales and operations, or practical use of AI and digital ways of working in commercial development.",
      nesteStegLabel: "Next step",
      nesteStegText:
        "See CV, results and references — or get in touch directly if you are considering a specific role or want a brief clarification.",
      ctaResultater: "See results",
      ctaReferanser: "See references",
      ctaKontakt: "Get in touch",
    },
  },
};

export function getRekruttererVerdiData(lang: Lang) {
  return {
    ...data[lang],
    roller: AKTUELL_FOR_ROLLER[lang],
  };
}
