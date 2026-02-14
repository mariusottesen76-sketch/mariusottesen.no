"use client";
import React, { useState } from "react";
import { Brain, Cog, Network, Users, Send, ChevronDown, Loader2, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { getTranslation } from "./data/translations";

function getTjenester(lang: "no" | "en") {
  return lang === "no" ? [
    { ikon: <Brain size={32} />, tittel: "AI-Strategi", beskrivelse: "Utvikle en skreddersydd AI-strategi som kobler forretningsbehov med teknologiske muligheter. Fra use-case identifisering til veikart for implementering — med fokus på konkret verdiskaping.", farge: "sky" },
    { ikon: <Cog size={32} />, tittel: "Prosessoptimalisering", beskrivelse: "Kartlegge og optimalisere kommersielle og operative prosesser med AI og automatisering. Identifisere flaskehalser, eliminere manuelt arbeid og bygge skalerbare løsninger som frigjør kapasitet.", farge: "indigo" },
    { ikon: <Network size={32} />, tittel: "Teknisk Implementering", beskrivelse: "Gjennom et nettverk av tekniske eksperter leverer vi alt fra prototype til produksjon. Jeg er brobyggeren mellom ledelsesbeslutninger og teknisk gjennomføring — så du slipper å snakke to språk.", farge: "emerald" },
    { ikon: <Users size={32} />, tittel: "Workshops & Opplæring", beskrivelse: "Praktiske workshops tilpasset ledergrupper og team som vil forstå AI-muligheter, bygge intern kompetanse og utvikle en kultur for datadrevet beslutningstaking.", farge: "amber" },
  ] : [
    { ikon: <Brain size={32} />, tittel: "AI Strategy", beskrivelse: "Develop a bespoke AI strategy that aligns business imperatives with technological capability. From use-case prioritisation to a phased implementation roadmap — with relentless focus on measurable value creation.", farge: "sky" },
    { ikon: <Cog size={32} />, tittel: "Process Optimisation", beskrivelse: "Map and optimise commercial and operational workflows through AI and intelligent automation. Identify bottlenecks, eliminate manual overhead, and architect scalable solutions that unlock capacity.", farge: "indigo" },
    { ikon: <Network size={32} />, tittel: "Technical Implementation", beskrivelse: "Through a curated network of technical specialists, we deliver end-to-end — from proof of concept to production. I serve as the bridge between executive decision-making and technical delivery, so you don't have to speak two languages.", farge: "emerald" },
    { ikon: <Users size={32} />, tittel: "Workshops & Capability Building", beskrivelse: "Hands-on workshops designed for leadership teams and cross-functional groups seeking to understand AI opportunities, build organisational competence, and cultivate a culture of data-driven decision-making.", farge: "amber" },
  ];
}

function getKategorier(lang: "no" | "en") {
  return lang === "no" ? ["Strategi", "Prosess", "Implementering", "Annet"] : ["Strategy", "Process", "Implementation", "Other"];
}

function getBudsjett(lang: "no" | "en") {
  return lang === "no"
    ? ["Velg budsjettramme (valgfritt)", "Under 50 000 NOK", "50 000 – 150 000 NOK", "150 000 – 500 000 NOK", "Over 500 000 NOK", "Usikker / Ønsker rådgivning"]
    : ["Select indicative budget (optional)", "Under NOK 50,000", "NOK 50,000 – 150,000", "NOK 150,000 – 500,000", "Above NOK 500,000", "To be determined / Advisory needed"];
}

function getProblems(lang: "no" | "en") {
  return lang === "no" ? [
    { problem: "«AI føles som en hype — vi vet ikke hvor vi skal starte.»", losning: "AI-Roadmap: Vi kartlegger de 3 viktigste prosessene der AI vil gi umiddelbar ROI." },
    { problem: "«Vi har verktøyene, men mangler styring og forankring i ledelsen.»", losning: "Governance-rammeverk: Klare retningslinjer for hvem som eier hva når AI påvirker beslutninger." },
    { problem: "«Teamet bruker AI individuelt, men vi ser ingen gevinster på bunnlinjen.»", losning: "Prosessintegrasjon: Vi bygger AI inn i kjerneprosessene — ikke som enkeltverktøy, men ende-til-ende." },
    { problem: "«Vi trenger teknisk implementering, men har ikke et internt tech-team.»", losning: "Nettverksmodell: Jeg kobler deg med de rette ekspertene og leder prosjektet fra strategi til produksjon." },
  ] : [
    { problem: '"AI feels like hype — we have no idea where to begin."', losning: "AI Roadmap: We identify the three highest-impact processes where AI will deliver immediate, measurable ROI." },
    { problem: '"We have the tools, but lack governance and leadership alignment."', losning: "Governance Framework: Clear accountability structures for AI-influenced decision-making across the organisation." },
    { problem: '"Our team uses AI individually, but we see no bottom-line impact."', losning: "Process Integration: We embed AI into core business workflows — not as isolated tools, but as an end-to-end capability." },
    { problem: '"We need technical implementation, but lack an in-house tech team."', losning: "Network Model: I connect you with the right specialists and lead the engagement from strategy through to production." },
  ];
}

function getSteps(lang: "no" | "en") {
  return lang === "no" ? [
    { steg: "1", tittel: "Oppstartsmøte", beskrivelse: "Vi kartlegger utfordringer, mål og muligheter. Du får en klar anbefaling — uforpliktende." },
    { steg: "2", tittel: "Analyse & Strategi", beskrivelse: "Dypdykk i prosesser, data og organisasjon. Leverer et konkret veikart med prioriterte tiltak og forventet ROI." },
    { steg: "3", tittel: "Implementering", beskrivelse: "Gjennomføring med mine tekniske partnere. Jeg leder prosjektet og sikrer at det leverer kommersiell verdi." },
  ] : [
    { steg: "1", tittel: "Discovery Session", beskrivelse: "We assess your challenges, objectives, and opportunities. You receive a clear, actionable recommendation — entirely no-obligation." },
    { steg: "2", tittel: "Analysis & Strategy", beskrivelse: "A thorough deep-dive into processes, data, and organisational readiness. Deliverable: a concrete roadmap with prioritised initiatives and projected ROI." },
    { steg: "3", tittel: "Execution & Delivery", beskrivelse: "Implementation alongside my technical partners. I lead the project end-to-end and ensure it translates into measurable commercial value." },
  ];
}

const fargeMap: Record<string, { text: string; border: string; bg: string }> = {
  sky: { text: "text-indigo-400", border: "border-indigo-500/20", bg: "bg-indigo-500/10" },
  indigo: { text: "text-indigo-400", border: "border-indigo-500/20", bg: "bg-indigo-500/10" },
  emerald: { text: "text-indigo-400", border: "border-indigo-500/20", bg: "bg-indigo-500/10" },
  amber: { text: "text-indigo-400", border: "border-indigo-500/20", bg: "bg-indigo-500/10" },
};

const inputClass =
  "w-full bg-slate-950/80 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all";

export default function Consulting() {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const tjenester = getTjenester(lang);
  const kategorier = getKategorier(lang);
  const budsjettAlternativer = getBudsjett(lang);
  const problems = getProblems(lang);
  const steps = getSteps(lang);
  const [valgtKategori, setValgtKategori] = useState<string[]>([]);
  const [budsjett, setBudsjett] = useState("");
  const [navn, setNavn] = useState("");
  const [firma, setFirma] = useState("");
  const [epost, setEpost] = useState("");
  const [telefon, setTelefon] = useState("");
  const [stilling, setStilling] = useState("");
  const [beskrivelse, setBeskrivelse] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feilmelding, setFeilmelding] = useState("");

  const toggleKategori = (k: string) => {
    setValgtKategori((prev) =>
      prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setFeilmelding("");

    const kategoriTekst = valgtKategori.length > 0 ? valgtKategori.join(", ") : "Ikke spesifisert";
    const budsjettTekst = budsjett || "Ikke spesifisert";

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          navn,
          firma,
          epost,
          telefon,
          stilling,
          kategorier: valgtKategori,
          budsjett,
          beskrivelse,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Hvis serveren sier fallback, bruk mailto
        if (data.fallback) {
          sendViaMail();
          return;
        }
        throw new Error(data.error || "Noe gikk galt");
      }

      setStatus("success");
      resetSkjema();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      // API feilet — fallback til mailto
      sendViaMail();
    }

    function sendViaMail() {
      const emne = encodeURIComponent(
        `Ny forespørsel fra ${navn}${firma ? ` – ${firma}` : ""}`
      );
      const kropp = encodeURIComponent(
        `FORESPØRSEL – MARIUS OTTESEN CONSULTING\n` +
        `${"─".repeat(40)}\n\n` +
        `Navn: ${navn}\n` +
        `Firma: ${firma || "–"}\n` +
        `Stilling: ${stilling || "–"}\n` +
        `E-post: ${epost}\n` +
        `Telefon: ${telefon || "–"}\n` +
        `Kategori: ${kategoriTekst}\n` +
        `Budsjettramme: ${budsjettTekst}\n\n` +
        `PROSJEKTBESKRIVELSE\n` +
        `${"─".repeat(40)}\n` +
        `${beskrivelse}\n`
      );
      const cc = epost ? `&cc=${encodeURIComponent(epost)}` : "";
      window.open(
        `mailto:marius.ottesen.76@gmail.com?subject=${emne}&body=${kropp}${cc}`,
        "_self"
      );
      setStatus("success");
      resetSkjema();
      setTimeout(() => setStatus("idle"), 5000);
    }

    function resetSkjema() {
      setNavn("");
      setFirma("");
      setEpost("");
      setTelefon("");
      setStilling("");
      setValgtKategori([]);
      setBudsjett("");
      setBeskrivelse("");
    }
  };

  return (
    <div className="py-4 text-left w-full overflow-x-hidden">
      {/* ——— INTRO ——— */}
      <section className="border-b border-white/10 pb-8 mb-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* BILDE */}
          <div className="w-full md:w-60 shrink-0">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
              <img
                src="/images/consulting.png"
                alt="Marius Ottesen Consulting"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* TEKST */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tighter leading-tight text-white uppercase italic mb-4 break-words max-w-full [overflow-wrap:anywhere]">
              {tr("cons.title.1")} <br />
              <span className="text-indigo-500">{tr("cons.title.2")}</span>
            </h1>
            <div className="max-w-3xl space-y-6 mt-8">
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                {tr("cons.intro.1")}
              </p>
              <p className="text-lg md:text-xl text-slate-400 italic leading-relaxed font-light">
                {tr("cons.intro.2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— TJENESTER ——— */}
      <section className="mb-12">
        <div className="border-b-2 border-indigo-500/30 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-2">
            {tr("cons.tjenester")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tjenester.map((t, i) => {
            const f = fargeMap[t.farge];
            return (
              <div
                key={i}
                className={`group p-8 bg-slate-900/40 rounded-2xl border ${f.border} shadow-xl hover:bg-slate-900/60 transition-all duration-300`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${f.bg} ${f.text} mb-6`}>
                  {t.ikon}
                </div>
                <h3 className={`text-xl font-black uppercase italic tracking-tight mb-3 ${f.text}`}>
                  {t.tittel}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {t.beskrivelse}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ——— PROBLEM VS. LØSNING ——— */}
      <section className="mb-12">
        <div className="border-b-2 border-indigo-500/30 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-2">
            {tr("cons.kjenner")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((item, i) => (
            <div key={i} className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle size={16} className="text-amber-400/70 shrink-0 mt-0.5" />
                <p className="text-slate-400 text-sm italic">{item.problem}</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-emerald-400/70 shrink-0 mt-0.5" />
                <p className="text-white text-sm font-bold">{item.losning}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ——— PROSESS 1-2-3 ——— */}
      <section className="mb-12">
        <div className="border-b-2 border-indigo-500/30 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-2">
            {tr("cons.prosess")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((item) => (
            <div key={item.steg} className="p-6 bg-slate-900/40 rounded-2xl border border-indigo-500/20 shadow-xl text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-black text-xl">
                {item.steg}
              </div>
              <h3 className="text-white font-black uppercase italic text-base tracking-tight">{item.tittel}</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">{item.beskrivelse}</p>
              {item.steg !== "3" && (
                <ArrowRight size={16} className="text-indigo-500/30 mx-auto hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ——— SKJEMA ——— */}
      <section>
        <div className="border-b-2 border-indigo-500/30 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-2">
            {tr("cons.dialog")}
          </h2>
        </div>

        <div className="bg-slate-900/40 rounded-2xl border border-white/10 shadow-xl p-8 md:p-12">
            <p className="text-slate-400 italic font-light text-lg mb-6 max-w-2xl">
            {tr("cons.dialog.intro")}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Rad 1: Navn + Firmanavn */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                  {lang === "no" ? "Navn" : "Name"} <span className="text-indigo-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={navn}
                  onChange={(e) => setNavn(e.target.value)}
                  placeholder={lang === "no" ? "Ditt fulle navn" : "Full name"}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                  {lang === "no" ? "Firmanavn" : "Company"}
                </label>
                <input
                  type="text"
                  value={firma}
                  onChange={(e) => setFirma(e.target.value)}
                  placeholder={lang === "no" ? "Ditt selskap" : "Company name"}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Rad 2: Stilling + Telefon */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                  {lang === "no" ? "Stilling / Tittel" : "Position / Title"}
                </label>
                <input
                  type="text"
                  value={stilling}
                  onChange={(e) => setStilling(e.target.value)}
                  placeholder={lang === "no" ? "F.eks. CEO, CTO, Avdelingsleder" : "e.g. CEO, CTO, VP of Sales"}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                  {lang === "no" ? "Telefonnummer" : "Phone Number"}
                </label>
                <input
                  type="tel"
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                  placeholder="+47 000 00 000"
                  className={inputClass}
                />
              </div>
            </div>

            {/* E-post */}
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                {lang === "no" ? "E-post" : "Email"} <span className="text-indigo-500">*</span>
              </label>
              <input
                type="email"
                required
                value={epost}
                onChange={(e) => setEpost(e.target.value)}
                placeholder={lang === "no" ? "din@epost.no" : "your@email.com"}
                className={inputClass}
              />
            </div>

            {/* Kategori-chips */}
            <div className="space-y-3">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                {lang === "no" ? "Hva gjelder henvendelsen?" : "What is the inquiry about?"}
              </label>
              <div className="flex flex-wrap gap-3">
                {kategorier.map((k) => {
                  const aktiv = valgtKategori.includes(k);
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => toggleKategori(k)}
                      className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200 border ${
                        aktiv
                          ? "bg-indigo-500/20 border-indigo-400/50 text-indigo-300 shadow-lg shadow-indigo-500/10"
                          : "bg-slate-950/60 border-white/10 text-slate-500 hover:border-white/20 hover:text-slate-300"
                      }`}
                    >
                      {k}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budsjettramme */}
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                {lang === "no" ? "Budsjettramme" : "Budget Range"} <span className="normal-case tracking-normal font-medium">{lang === "no" ? "(valgfritt)" : "(optional)"}</span>
              </label>
              <div className="relative">
                <select
                  value={budsjett}
                  onChange={(e) => setBudsjett(e.target.value)}
                  className="w-full appearance-none bg-slate-950/80 border border-white/10 rounded-xl px-5 py-4 text-sm text-slate-400 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all cursor-pointer"
                >
                  {budsjettAlternativer.map((alt, i) => (
                    <option key={i} value={i === 0 ? "" : alt} className="bg-slate-950 text-slate-300">
                      {alt}
                    </option>
                  ))}
                </select>
                <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
              </div>
            </div>

            {/* Prosjektbeskrivelse */}
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                {lang === "no" ? "Prosjektbeskrivelse" : "Project Description"} <span className="text-indigo-500">*</span>
              </label>
              <textarea
                required
                rows={6}
                value={beskrivelse}
                onChange={(e) => setBeskrivelse(e.target.value)}
                  placeholder={lang === "no" ? "Beskriv kort hva du trenger hjelp med, hvilke utfordringer du står overfor, eller hva du ønsker å oppnå..." : "Please outline the challenge you are facing, the objectives you want to achieve, and any relevant context..."}
                className={`${inputClass} leading-relaxed resize-none`}
              />
            </div>

            {/* Status og send-knapp */}
            <div className="pt-4 space-y-4">
              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
                  {feilmelding}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full md:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 rounded-xl font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-lg ${
                  status === "success"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-default"
                    : status === "sending"
                    ? "bg-indigo-500/50 text-white/70 cursor-wait"
                    : "bg-indigo-500 text-white hover:bg-indigo-400 hover:shadow-indigo-500/25 hover:shadow-xl active:scale-[0.98]"
                }`}
              >
                {status === "success" ? (
                  tr("cons.sendt")
                ) : status === "sending" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    {tr("cons.sender")}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {tr("cons.send")}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
