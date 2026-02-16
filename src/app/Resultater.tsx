"use client";
import React from "react";
import Image from "next/image";
import { BarChart3, Globe, Target, TrendingUp, Award, Zap, ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";
import { useCounter } from "./hooks/useCounter";

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

export default function Resultater() {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  
  const counter67 = useCounter(67, 2000, "%");
  const counter1 = useCounter(1, 2000, " MRD mål");

  const nokkeltall = [
    { verdi: counter67.count, label: tr("resultater.salgsvekst"), ikon: <BarChart3 size={20} />, ref: counter67.ref },
    { verdi: counter1.count, label: tr("resultater.omsetning"), ikon: <Globe size={20} />, ref: counter1.ref },
    { verdi: "#1", label: tr("resultater.ranking"), ikon: <Target size={20} />, ref: null },
  ];

  const selskapsresultater = lang === "no" ? [
    {
      selskap: "Franzefoss Gjenvinning", rolle: "Nasjonal Salgssjef", periode: "2024 – 2025",
      resultater: ["Forbedret kapasitetsutnyttelse på tvers av 18 driftssteder", "Tydeligere styringsmodell med resultatdrevne KPI-er", "Økte marginer gjennom målrettet innsats mot nøkkelkunder", "Etablerte ny standard for datadrevet salgsledelse"],
      farge: "indigo",
    },
    {
      selskap: "Norengros Johs. Olsen", rolle: "Salgssjef Forbruksvarer", periode: "2019 – 2023",
      resultater: ["Leverte eksepsjonell salgsvekst på 67 % i perioden", "Ledet team i ett av prosjektene som bidro til selskapets mål om 1 mrd. NOK", "Bygget høytytende team gjennom transformasjonsprosjektet «Forbruk Oslo 2.0»", "Moderniserte salgsprosesser i et marked preget av tøff konkurranse"],
      farge: "sky",
    },
    {
      selskap: "Mundipharma", rolle: "Business Unit Manager", periode: "2001 – 2012",
      resultater: ["Ledet team til global #1 i vekst og omsetning i hele konsernet", "Lanserte og posisjonerte 4 blockbuster-produkter", "Vant EU PR-pris for fremragende resultater", "Nominert til Årets Unge Leder"],
      farge: "emerald",
    },
    {
      selskap: "Nilfisk", rolle: "Salgssjef", periode: "2012 – 2014",
      resultater: ["Snudde salgssvikt til vekst", "Overgikk salgsmål", "Økte teammotivasjon og prestasjoner"],
      farge: "amber",
    },
  ] : [
    {
      selskap: "Franzefoss Gjenvinning", rolle: "National Sales Director", periode: "2024 – 2025",
      resultater: ["Enhanced capacity utilisation across 18 operational sites", "Implemented a transparent governance model with performance-driven KPIs", "Delivered margin expansion through disciplined key-account strategy", "Set a new benchmark for data-driven sales leadership"],
      farge: "indigo",
    },
    {
      selskap: "Norengros Johs. Olsen", rolle: "Sales Manager, Consumer Goods", periode: "2019 – 2023",
      resultater: ["Achieved exceptional 67% revenue growth over the period", "Led one of the projects that contributed to the company's NOK 1 billion revenue target", "Built a high-performing team through the 'Forbruk Oslo 2.0' transformation programme", "Modernised commercial processes in a fiercely competitive market"],
      farge: "sky",
    },
    {
      selskap: "Mundipharma", rolle: "Business Unit Manager", periode: "2001 – 2012",
      resultater: ["Led team to global #1 ranking in growth and revenue across the entire group", "Successfully launched and positioned four blockbuster products", "Recipient of the EU Public Relations Award for outstanding performance", "Nominated for Young Leader of the Year"],
      farge: "emerald",
    },
    {
      selskap: "Nilfisk", rolle: "Sales Manager", periode: "2012 – 2014",
      resultater: ["Reversed a declining sales trajectory into sustained growth", "Consistently exceeded annual sales targets", "Significantly improved team engagement and performance"],
      farge: "amber",
    },
  ];

  return (
    <div className="py-4 text-left w-full overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-60 shrink-0">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
            <Image src="/images/seier-ny.png" alt="Dokumenterte resultater og karriereprestasjoner" width={240} height={320} className="w-full h-auto" />
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter uppercase italic break-words max-w-full [overflow-wrap:anywhere]">
              {lang === "no" ? (<>Dokumenterte <span className="text-indigo-500">Resultater</span></>) : (<>Documented <span className="text-indigo-500">Results</span></>)}
            </h2>
            <p className="text-lg text-indigo-400 font-black uppercase tracking-widest italic">
              {tr("resultater.sub")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {nokkeltall.map((item, idx) => (
              <div key={idx} ref={item.ref || undefined} className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl text-center scroll-animate">
                <div className="flex justify-center text-indigo-500 mb-3">{item.ikon}</div>
                <span className="block text-3xl md:text-4xl font-black text-white">{item.verdi}</span>
                <span className="block text-indigo-400 font-black uppercase text-[10px] tracking-widest mt-2">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="text-lg text-slate-300 border-l-4 border-indigo-600 pl-6 italic font-medium leading-relaxed">
            {tr("resultater.intro")}
          </div>

          <div className="space-y-4">
            {selskapsresultater.map((s, i) => {
              const f = fargeMap[s.farge];
              return (
                <div key={i} className={`p-8 bg-slate-900/40 rounded-2xl border ${f.border} shadow-xl`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1.5 shrink-0">
                        {selskapLogo[s.selskap] ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={selskapLogo[s.selskap]} alt={`${s.selskap} logo`} width={48} height={48} className="max-h-9 max-w-full w-auto h-auto object-contain" />
                        ) : (
                          <span className={`${f.text}`}>{ikonMap[s.farge]}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-white uppercase italic tracking-tight">{s.selskap}</h3>
                        <p className={`text-sm ${f.text} font-bold italic`}>{s.rolle}</p>
                      </div>
                    </div>
                    <span className="text-slate-500 text-[10px] bg-slate-950 px-4 py-2 rounded-full border border-slate-800 font-black shrink-0 self-start">
                      {s.periode}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {s.resultater.map((r, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-300 font-medium italic">
                        <span className={`w-1.5 h-1.5 rounded-full ${f.dot} mt-1.5 shrink-0`} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Selskapslogoer */}
          <div className="space-y-3">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{tr("profil.logoer.erfaring")}</p>
            <div className="flex flex-wrap items-center gap-2">
              {[
                { src: "/images/Franzefoss.png", alt: "Franzefoss", h: "max-h-[26px]" },
                { src: "/images/Norengros.png", alt: "Norengros", h: "max-h-[30px]" },
                { src: "/images/Nilfisk.png", alt: "Nilfisk", h: "max-h-[42px]" },
                { src: "/images/Pelagia.png", alt: "Pelagia", h: "max-h-[32px]" },
                { src: "/images/Falck%20Nutec.png", alt: "Falck Nutec", h: "max-h-[42px]" },
                { src: "/images/Assessit.png", alt: "Assessit", h: "max-h-[32px]" },
                { src: "/images/Mundipharma.png", alt: "Mundipharma", h: "max-h-[26px]" },
                { alt: "MedDrop", placeholder: true as const },
              ].map((logo) =>
                "placeholder" in logo && logo.placeholder ? (
                  <div key={logo.alt} className="min-w-[80px] h-[44px] flex items-center justify-center bg-slate-800/60 border border-slate-700 rounded-lg px-3 shrink-0">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{logo.alt}</span>
                  </div>
                ) : (
                  <div key={(logo as { src: string; alt: string; h: string }).alt} className="flex-1 min-w-[80px] h-[44px] flex items-center justify-center bg-white rounded-lg p-1.5 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={(logo as { src: string; alt: string; h: string }).src} alt={`${(logo as { src: string; alt: string; h: string }).alt} logo`} width={100} height={44} className={`${(logo as { src: string; alt: string; h: string }).h} max-w-full w-auto h-auto object-contain`} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
