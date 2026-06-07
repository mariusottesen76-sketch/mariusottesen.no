import { Lang } from "../LanguageContext";

export type ConsultingPakke = {
  tittel: string;
  beskrivelse: string;
};

const pakker: Record<Lang, ConsultingPakke[]> = {
  no: [
    {
      tittel: "AI-mulighetsverksted",
      beskrivelse:
        "2–3 timer. Kartlegging av prosesser, friksjon, dataflyt og mulige AI-bruksområder. Leveranse: prioriterte use cases og anbefalt neste steg.",
    },
    {
      tittel: "AI Growth Sprint",
      beskrivelse:
        "2–4 uker. Dypere arbeid med arbeidsflyt, verdi/risiko, business case, pilotdesign og implementeringsplan. Leveranse: konkret roadmap og beslutningsgrunnlag.",
    },
    {
      tittel: "Kommersiell AI-sparring",
      beskrivelse:
        "For ledergrupper, salgsledere og SMB-ledere som ønsker å forstå hvordan AI kan kobles til salg, CRM, kundereise, beslutninger og operativ gjennomføring.",
    },
    {
      tittel: "AI-prosjekt og prototype",
      beskrivelse:
        "For virksomheter som ønsker å teste en konkret løsning, chatbot, arbeidsflyt, beslutningsstøtte eller salgstreningsmodell i avgrenset format.",
    },
  ],
  en: [
    {
      tittel: "AI opportunity workshop",
      beskrivelse:
        "2–3 hours. Mapping processes, friction, data flow and potential AI use cases. Deliverable: prioritised use cases and recommended next step.",
    },
    {
      tittel: "AI Growth Sprint",
      beskrivelse:
        "2–4 weeks. Deeper work on workflow, value/risk, business case, pilot design and implementation plan. Deliverable: concrete roadmap and decision basis.",
    },
    {
      tittel: "Commercial AI sparring",
      beskrivelse:
        "For leadership teams, sales leaders and SMB executives who want to understand how AI connects to sales, CRM, customer journey, decisions and operational execution.",
    },
    {
      tittel: "AI project and prototype",
      beskrivelse:
        "For organisations that want to test a concrete solution, chatbot, workflow, decision support or sales training model in a scoped format.",
    },
  ],
};

export function getConsultingPakker(lang: Lang): ConsultingPakke[] {
  return pakker[lang];
}
