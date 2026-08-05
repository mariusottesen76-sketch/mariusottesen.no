import { Lang } from "../LanguageContext";

export type ForedragKort = { title: string; text: string };

const data = {
  no: {
    title: "Temaer jeg har erfaring med og kan bidra med",
    ingress:
      "Temaene under bygger på erfaring fra kommersiell ledelse, salgsutvikling, transformasjon og praktisk bruk av AI — inkludert operasjonell erfaring fra salg, drift og gjennomføring. De kan være relevante i ledergrupper, rekrutteringsdialoger, faglige samtaler eller fremtidige sammenhenger dersom det oppstår en relevant anledning.",
    stotte: "",
    kort: [
      {
        title: "Kommersiell og operasjonell ledelse i endring",
        text: "Hvordan skape retning, prioritering og gjennomføring når marked, drift, teknologi og arbeidsformer endrer seg.",
      },
      {
        title: "AI som praktisk lederkompetanse",
        text: "Hvordan ledere kan bruke AI til bedre beslutningsstøtte, arbeidsflyt og kommersiell og operasjonell verdi – uten å starte med teknologi for teknologiens skyld.",
      },
      {
        title: "Verdilekkasjer i salg, CRM og kundedialog",
        text: "Hvor SMB-bedrifter ofte taper tid, kunder, kvalitet og kapasitet – og hvordan dette kan forstås, struktureres og omsettes til sterkere salgsledelse og oppfølging.",
      },
      {
        title: "Leder som salgscoach",
        text: "Hvordan salgsledere kan gå fra aktivitetskontroll til prestasjonsutvikling, læring og bedre kundemøter.",
      },
      {
        title: "Team, samhandling og gjennomføring",
        text: "Hvordan tydeligere forventninger, styrker, dialog og lederrytme kan gi bedre prestasjon over tid.",
      },
      {
        title: "Prioritering, transformasjon og operativ effekt",
        text: "Hvordan ledergrupper kan prioritere riktig, koble strategi til gjennomføring og skape målbar effekt på tvers av salg, drift og kommersiell utvikling — med erfaring fra executive plattformer, arrangementsplanlegging og praktisk AI-portefølje.",
      },
    ] satisfies ForedragKort[],
    cta: "Ta kontakt for faglig dialog",
  },
  en: {
    title: "Themes I have experience with and can contribute on",
    ingress:
      "The themes below build on experience from commercial leadership, sales development, transformation and practical use of AI — including operational experience from sales, operations and execution. They may be relevant in leadership groups, recruitment dialogues, professional conversations or future contexts if a relevant opportunity arises.",
    stotte: "",
    kort: [
      {
        title: "Commercial and operational leadership in change",
        text: "How to create direction, prioritisation and execution when markets, operations, technology and ways of working are shifting.",
      },
      {
        title: "AI as practical leadership competence",
        text: "How leaders can use AI for better decision support, workflow and commercial and operational value — without starting with technology for its own sake.",
      },
      {
        title: "Value leaks in sales, CRM and customer dialogue",
        text: "Where SMBs often lose time, customers, quality and capacity — and how this can be understood, structured and turned into stronger sales leadership and follow-up.",
      },
      {
        title: "Leader as sales coach",
        text: "How sales leaders can move from activity control to performance development, learning and better customer meetings.",
      },
      {
        title: "Team, collaboration and execution",
        text: "How clearer expectations, strengths, dialogue and leadership rhythm can improve performance over time.",
      },
      {
        title: "Prioritisation, transformation and operational impact",
        text: "How leadership groups can prioritise well, connect strategy to execution and create measurable impact across sales, operations and commercial development — drawing on experience from executive platforms, event planning and a practical AI portfolio.",
      },
    ] satisfies ForedragKort[],
    cta: "Get in touch for a professional conversation",
  },
};

export function getConsultingForedragData(lang: Lang) {
  return data[lang];
}
