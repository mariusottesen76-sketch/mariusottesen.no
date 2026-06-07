"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BarChart3, Globe, Target, TrendingUp, Award, Zap, ArrowUpRight, ChevronRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";
import { getResultaterProofPoints } from "./data/proof-points";

const linkClass =
  "text-indigo-400 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const fargeMap: Record<string, { text: string; border: string; bg: string; dot: string }> = {
  indigo:  { text: "text-indigo-400",  border: "border-indigo-500/20",  bg: "bg-indigo-500/10",  dot: "bg-indigo-500" },
  sky:     { text: "text-indigo-400",  border: "border-indigo-500/20",  bg: "bg-indigo-500/10",  dot: "bg-indigo-500" },
  emerald: { text: "text-indigo-400",  border: "border-indigo-500/20",  bg: "bg-indigo-500/10",  dot: "bg-indigo-500" },
  amber:   { text: "text-indigo-400",  border: "border-indigo-500/20",  bg: "bg-indigo-500/10",  dot: "bg-indigo-500" },
};

const ikonMap: Record<string, React.ReactNode> = {
  indigo:  <Zap size={22} />,
  sky:     <TrendingUp size={22} />,
  emerald: <Award size={22} />,
  amber:   <ArrowUpRight size={22} />,
};

const selskapLogo: Record<string, string> = {
  "Franzefoss Gjenvinning": "/images/Franzefoss.png",
  "Norengros Johs. Olsen": "/images/Norengros.png",
  "Mundipharma": "/images/Mundipharma.png",
  "Nilfisk": "/images/Nilfisk.png",
};

type Nokkeltall = {
  verdi: string;
  label: string;
  undertekst: string;
  ariaLabel: string;
  ikon: React.ReactNode;
};

type Selskapsresultat = {
  selskap: string;
  rolle: string;
  periode: string;
  resultater: string[];
  relevans: string;
  farge: string;
};

export default function Resultater() {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);

  const nokkeltall: Nokkeltall[] =
    lang === "no"
      ? [
          {
            verdi: "67 %",
            label: "Salgsvekst",
            undertekst: "Norengros Johs. Olsen, 2019–2023",
            ariaLabel: "67 prosent salgsvekst, Norengros Johs. Olsen 2019 til 2023",
            ikon: <BarChart3 size={20} aria-hidden="true" />,
          },
          {
            verdi: "NOK 1 mrd.",
            label: "Mål",
            undertekst: "Bidro til selskapets vekstmål",
            ariaLabel: "NOK 1 milliard i vekstmål, bidro til selskapets vekstmål",
            ikon: <Globe size={20} aria-hidden="true" />,
          },
          {
            verdi: "Global #1",
            label: "Ranking",
            undertekst: "Mundipharma",
            ariaLabel: "Global nummer én ranking, Mundipharma",
            ikon: <Target size={20} aria-hidden="true" />,
          },
        ]
      : [
          {
            verdi: "67%",
            label: "Revenue growth",
            undertekst: "Norengros Johs. Olsen, 2019–2023",
            ariaLabel: "67 percent revenue growth, Norengros Johs. Olsen 2019 to 2023",
            ikon: <BarChart3 size={20} aria-hidden="true" />,
          },
          {
            verdi: "NOK 1 bn",
            label: "Growth target",
            undertekst: "Contributed to the company's growth target",
            ariaLabel: "NOK 1 billion growth target, contributed to the company's growth target",
            ikon: <Globe size={20} aria-hidden="true" />,
          },
          {
            verdi: "Global #1",
            label: "Ranking",
            undertekst: "Mundipharma",
            ariaLabel: "Global number one ranking, Mundipharma",
            ikon: <Target size={20} aria-hidden="true" />,
          },
        ];

  const proofPoints = getResultaterProofPoints(lang);

  const selskapsresultater: Selskapsresultat[] =
    lang === "no"
      ? [
          {
            selskap: "Franzefoss Gjenvinning",
            rolle: "Nasjonal Salgssjef",
            periode: "2024 – 2025",
            resultater: [
              "Forbedret kapasitetsutnyttelse på tvers av 18 driftssteder",
              "Etablerte tydeligere styringsmodell med resultatdrevne KPI-er",
              "Økte marginer gjennom målrettet innsats mot nøkkelkunder",
              "Bygget ny standard for datadrevet salgsledelse",
            ],
            relevans: "Nasjonal salgsledelse, KPI-styring og margin i desentralisert B2B.",
            farge: "indigo",
          },
          {
            selskap: "Norengros Johs. Olsen",
            rolle: "Salgssjef Forbruksvarer",
            periode: "2019 – 2023",
            resultater: [
              "Leverte 67 % salgsvekst i perioden",
              "Bidro til selskapets vekstmål om NOK 1 mrd. gjennom teamledelse i vekstprosjekter",
              "Bygget høytytende team gjennom transformasjonsprosjektet «Forbruk Oslo 2.0»",
              "Moderniserte salgsprosesser i et konkurransepreget marked",
            ],
            relevans: "Salgsledelse, vekst og kommersiell transformasjon.",
            farge: "sky",
          },
          {
            selskap: "Mundipharma",
            rolle: "Business Unit Manager",
            periode: "2001 – 2012",
            resultater: [
              "Ledet team til global #1-ranking i vekst og omsetning i hele konsernet",
              "Lanserte og posisjonerte fire blockbuster-produkter",
              "Vant salgspriser for beste salg og EU PR-pris for fremragende resultater",
            ],
            relevans: "Global forretningsenhet, produktlansering og teamledelse.",
            farge: "emerald",
          },
          {
            selskap: "Nilfisk",
            rolle: "Salgssjef",
            periode: "2012 – 2014",
            resultater: [
              "Snudde salgssvikt til vekst",
              "Overgikk salgsmål",
              "Styrket teammotivasjon og prestasjoner",
            ],
            relevans: "Salgsledelse, snuoperasjon og teamutvikling.",
            farge: "amber",
          },
        ]
      : [
          {
            selskap: "Franzefoss Gjenvinning",
            rolle: "National Sales Director",
            periode: "2024 – 2025",
            resultater: [
              "Improved capacity utilisation across 18 operational sites",
              "Established a clearer governance model with performance-driven KPIs",
              "Increased margins through targeted key-account efforts",
              "Built a new standard for data-driven sales leadership",
            ],
            relevans: "National sales leadership, KPI management and margin in decentralised B2B.",
            farge: "indigo",
          },
          {
            selskap: "Norengros Johs. Olsen",
            rolle: "Sales Manager, Consumer Goods",
            periode: "2019 – 2023",
            resultater: [
              "Delivered 67% revenue growth over the period",
              "Contributed to the company's NOK 1 billion target through leadership in growth projects",
              "Built a high-performing team through the 'Forbruk Oslo 2.0' transformation programme",
              "Modernised sales processes in a competitive market",
            ],
            relevans: "Sales leadership, growth and commercial transformation.",
            farge: "sky",
          },
          {
            selskap: "Mundipharma",
            rolle: "Business Unit Manager",
            periode: "2001 – 2012",
            resultater: [
              "Led the team to a global #1 ranking in growth and revenue across the group",
              "Launched and positioned four blockbuster products",
              "Won sales awards for best sales and the EU PR Award for outstanding results",
            ],
            relevans: "Global business unit leadership, product launches and team leadership.",
            farge: "emerald",
          },
          {
            selskap: "Nilfisk",
            rolle: "Sales Manager",
            periode: "2012 – 2014",
            resultater: [
              "Turned declining sales into growth",
              "Exceeded sales targets",
              "Strengthened team motivation and performance",
            ],
            relevans: "Sales leadership, turnaround and team development.",
            farge: "amber",
          },
        ];

  return (
    <div className="py-4 text-left w-full overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-60 shrink-0">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
            <Image
              src="/images/seier-ny.png"
              alt="Dokumenterte resultater og karriereprestasjoner"
              width={240}
              height={320}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter italic break-words max-w-full [overflow-wrap:anywhere]">
              {lang === "no" ? (
                <>
                  Dokumenterte <span className="text-indigo-500">resultater</span>
                </>
              ) : (
                <>
                  Documented <span className="text-indigo-500">results</span>
                </>
              )}
            </h1>
            <p className="text-lg text-indigo-400 font-black uppercase tracking-widest italic">
              {tr("resultater.sub")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {nokkeltall.map((item) => (
              <div
                key={item.label}
                className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl text-center"
                role="group"
                aria-label={item.ariaLabel}
              >
                <div className="flex justify-center text-indigo-500 mb-3">{item.ikon}</div>
                <p className="text-3xl md:text-4xl font-black text-white leading-none">{item.verdi}</p>
                <p className="text-indigo-400 font-black uppercase text-[10px] tracking-widest mt-2">
                  {item.label}
                </p>
                <p className="text-slate-400 text-xs mt-2 leading-snug">{item.undertekst}</p>
              </div>
            ))}
          </div>

          <div className="text-lg text-slate-300 border-l-4 border-indigo-600 pl-6 italic font-medium leading-relaxed">
            <p>{tr("resultater.intro")}</p>
            <p className="mt-2 text-base">
              {tr("resultater.intro.cv")}{" "}
              <Link href="/cv" className={linkClass} aria-label="Gå til CV og åpen søknad">
                {lang === "no" ? "CV & åpen søknad" : "CV & open application"}
              </Link>
              .
            </p>
          </div>

          <section aria-labelledby="resultater-proof-heading">
            <h2
              id="resultater-proof-heading"
              className="text-xl md:text-2xl font-black text-white italic tracking-tight mb-4"
            >
              {lang === "no" ? "6 resultater du bør merke deg" : "6 results worth noting"}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {proofPoints.map((punkt) => (
                <li
                  key={punkt}
                  className="p-4 bg-slate-900/40 rounded-xl border border-slate-800 text-sm text-slate-300 leading-snug"
                >
                  {punkt}
                </li>
              ))}
            </ul>
          </section>

          <div className="space-y-4">
            {selskapsresultater.map((s) => {
              const f = fargeMap[s.farge];
              return (
                <article
                  key={s.selskap}
                  className={`p-8 bg-slate-900/40 rounded-2xl border ${f.border} shadow-xl`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1.5 shrink-0">
                        {selskapLogo[s.selskap] ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={selskapLogo[s.selskap]}
                            alt={`${s.selskap} logo`}
                            width={48}
                            height={48}
                            className="max-h-9 max-w-full w-auto h-auto object-contain"
                          />
                        ) : (
                          <span className={f.text}>{ikonMap[s.farge]}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-white italic tracking-tight">{s.selskap}</h3>
                        <p className={`text-sm ${f.text} font-bold italic`}>{s.rolle}</p>
                      </div>
                    </div>
                    <span className="text-slate-500 text-[10px] bg-slate-950 px-4 py-2 rounded-full border border-slate-800 font-black shrink-0 self-start">
                      {s.periode}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {s.resultater.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-sm text-slate-300 font-medium italic">
                        <span className={`w-1.5 h-1.5 rounded-full ${f.dot} mt-1.5 shrink-0`} aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-500 italic leading-relaxed">
                    <span className="text-slate-400 not-italic font-semibold">
                      {lang === "no" ? "Relevans: " : "Relevance: "}
                    </span>
                    {s.relevans}
                  </p>
                </article>
              );
            })}
          </div>

          <section
            aria-labelledby="resultater-cta-heading"
            className="p-8 bg-slate-900/40 rounded-2xl border border-indigo-500/20 shadow-xl space-y-4"
          >
            <h2 id="resultater-cta-heading" className="text-xl font-black text-white italic tracking-tight">
              {lang === "no"
                ? "Vil du se hvordan erfaringen kan være relevant for din virksomhet?"
                : "Would you like to see how this experience could be relevant for your organisation?"}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {lang === "no" ? "Se også " : "See also "}
              <Link href="/erfaring" className={linkClass} aria-label="Gå til Erfaring">
                Erfaring
              </Link>
              {", "}
              <Link href="/referanser" className={linkClass} aria-label="Gå til Referanser">
                Referanser
              </Link>
              {lang === "no" ? " eller " : " or "}
              <Link href="/cv" className={linkClass} aria-label="Gå til CV og åpen søknad">
                {lang === "no" ? "CV & åpen søknad" : "CV & open application"}
              </Link>
              {lang === "no"
                ? " for mer kontekst om lederroller, ansvar og dokumentasjon."
                : " for more context on leadership roles, responsibilities and documentation."}
            </p>
            <div>
              <Link
                href="/kontakt"
                aria-label="Gå til kontaktsiden"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black uppercase text-sm hover:bg-indigo-500 hover:text-white transition-all italic shadow-lg"
              >
                {lang === "no" ? "Ta kontakt" : "Get in touch"}
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
