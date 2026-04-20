"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { tennisLedelse } from './data/innlegg/tennis-ledelse';
import { aiGovernance } from './data/innlegg/ai-governance';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './data/translations';

interface InnleggType {
  id: string;
  tittel: { no: string; en: string };
  teaser: { no: string; en: string };
  bildeUrl: string;
  dato: string;
  visningsDato: string;
  kategori: string;
  link: string;
  innhold?: { no: string; en: string };
}

const Faginnlegg = ({ onNavigate }: { onNavigate?: (tab: string) => void }) => {
  const { lang } = useLanguage();
  const tr = (key: string) => getTranslation(key, lang);
  const [aktivtInnlegg, setAktivtInnlegg] = useState<InnleggType | null>(null);

  const alleInnlegg: InnleggType[] = [
    ...(tennisLedelse as InnleggType[]),
    ...(aiGovernance as InnleggType[])
  ].sort((a, b) => new Date(b.dato).getTime() - new Date(a.dato).getTime());

  const ledelseInnlegg = alleInnlegg.filter(i => i.kategori === "Kommersiell Ledelse");
  const aiInnlegg = alleInnlegg.filter(i => i.kategori === "AI / KI");

  const lukkModal = useCallback(() => setAktivtInnlegg(null), []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") lukkModal();
    };
    if (aktivtInnlegg) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [aktivtInnlegg, lukkModal]);

  return (
    <div className="py-4 text-left w-full overflow-x-hidden">
      {/* HERO SEKSJON */}
      <div className="flex flex-col md:flex-row gap-6 items-start border-b border-slate-800/40 pb-6">
        <div className="w-full md:w-[400px] shrink-0">
          <Image src="/images/blogg.jpg" alt="Innsikt og tankeledelse — Marius Ottesen" width={400} height={500} className="w-full h-auto rounded-2xl shadow-xl border border-slate-800" />
        </div>
        <div className="flex-1 min-w-0 pt-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-6 tracking-tighter leading-tight text-white uppercase italic break-words max-w-full [overflow-wrap:anywhere]">
            {tr("fag.title.1")} <br />
            <span className="text-indigo-500">{tr("fag.title.2")}</span>
          </h1>
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-4">{tr("fag.intro.1")}</p>
            <p className="text-lg md:text-xl text-slate-400 italic leading-relaxed font-light mb-4">{tr("fag.intro.2")}</p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">{tr("fag.intro.3")}</p>
          </div>
        </div>
      </div>

      {/* INNHOLDSFORTEGNELSE */}
      <div className="mt-6 mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-white uppercase mb-4 break-words max-w-full [overflow-wrap:anywhere]">{tr("fag.toc.title.1")}<br className="sm:hidden" />{tr("fag.toc.title.2")}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Strategisk Ledelse & Transformasjon */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 uppercase mb-2 border-b border-indigo-500/30 pb-1.5">
              {tr("fag.kat.ledelse")}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {ledelseInnlegg.map((innlegg, index) => (
                    <tr
                      key={innlegg.id}
                      onClick={() => setAktivtInnlegg(innlegg)}
                      className="border-b border-slate-800/40 hover:bg-slate-900/40 cursor-pointer transition-colors"
                    >
                      <td className="py-1.5 px-2 text-sm text-slate-300 hover:text-indigo-300">
                        {innlegg.tittel[lang]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* AI & Fremtidens Teknologiledelse */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 uppercase mb-2 border-b border-indigo-500/30 pb-1.5">
              {tr("fag.kat.ai")}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {aiInnlegg.map((innlegg, index) => (
                    <tr
                      key={innlegg.id}
                      onClick={() => setAktivtInnlegg(innlegg)}
                      className="border-b border-slate-800/40 hover:bg-slate-900/40 cursor-pointer transition-colors"
                    >
                      <td className="py-1.5 px-2 text-sm text-slate-300 hover:text-indigo-300">
                        {innlegg.tittel[lang]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* KOLONNER MED INNLEGG - like høyde på header slik at første kort aligner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-6 items-start">
        <section className="flex flex-col w-full">
          <div className="border-b-2 border-indigo-500/30 mb-4 min-h-[4.5rem] flex flex-col justify-end">
            <h2 className="text-2xl font-bold tracking-tight text-white uppercase mb-2">{tr("fag.kat.ledelse")}</h2>
          </div>
          <div className="flex flex-col gap-4">
            {ledelseInnlegg.length > 0 ? (
              ledelseInnlegg.map((innlegg) => (
                <InnleggsKort key={innlegg.id} innlegg={innlegg} lang={lang} onClick={() => setAktivtInnlegg(innlegg)} lesLabel={tr("fag.les")} />
              ))
            ) : (
              <div className="p-12 rounded-2xl border border-slate-800 bg-slate-900/40 italic text-slate-500 text-center font-light">{tr("fag.nye")}</div>
            )}
          </div>
        </section>

        <section className="flex flex-col w-full">
          <div className="border-b-2 border-indigo-500/30 mb-4 min-h-[4.5rem] flex flex-col justify-end">
            <h2 className="text-2xl font-bold tracking-tight text-white uppercase mb-2">{tr("fag.kat.ai")}</h2>
          </div>
          <div className="flex flex-col gap-4">
            {aiInnlegg.length > 0 ? (
              aiInnlegg.map((innlegg) => (
                <InnleggsKort key={innlegg.id} innlegg={innlegg} lang={lang} onClick={() => setAktivtInnlegg(innlegg)} lesLabel={tr("fag.les")} />
              ))
            ) : (
              <div className="p-12 rounded-2xl border border-slate-800 bg-slate-900/40 italic text-slate-500 text-center font-light">{tr("fag.nye")}</div>
            )}
          </div>
        </section>
      </div>

      {aktivtInnlegg && (
        <InnleggModal innlegg={aktivtInnlegg} lang={lang} onClose={lukkModal} onNavigate={onNavigate} linkedinLabel={tr("fag.linkedin")} ctaText={tr("fag.cta")} ctaLink={tr("fag.cta.link")} />
      )}
    </div>
  );
};

/* ——— KORT ——— */
const InnleggsKort = ({ innlegg, lang, onClick, lesLabel }: { innlegg: InnleggType; lang: "no" | "en"; onClick: () => void; lesLabel: string }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-slate-900/40 rounded-2xl border border-indigo-500/20 p-4 sm:p-6 hover:bg-slate-900/60 transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full text-left min-h-[200px] cursor-pointer"
    >
      <div className="w-full sm:w-[105px] h-[120px] sm:h-[160px] shrink-0 rounded-lg overflow-hidden bg-slate-800 border border-slate-800">
        <Image key={`${innlegg.bildeUrl}-${innlegg.dato}`} src={`${innlegg.bildeUrl}?v=${innlegg.dato}`} alt={innlegg.tittel[lang]} width={105} height={160} className="w-full h-full object-cover transition-all duration-500" unoptimized />
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-between overflow-hidden">
        <div className="overflow-hidden">
          <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-widest font-bold block mb-1">{innlegg.visningsDato}</span>
          <h3 className="text-lg font-bold text-white leading-tight truncate mb-1 group-hover:text-indigo-300 transition-colors">{innlegg.tittel[lang]}</h3>
          <p className="text-slate-400 text-[13px] leading-relaxed line-clamp-3 font-light">{innlegg.teaser[lang]}</p>
        </div>
        <div className="mt-auto pt-2 flex items-center gap-4">
          <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-indigo-400">
            {lesLabel} <span>→</span>
          </span>
          <a href={innlegg.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-all">
            LinkedIn <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </div>
  );
};

/* Fjerner ledende avsnitt i innhold som gjentar tittelen ord for ord */
function stripDuplicateTitle(innhold: string, tittel: string): string {
  const normalize = (s: string) =>
    s
      .toLowerCase()
      .replace(/<[^>]+>/g, " ")
      .replace(/[\u2013\u2014\u2212\-–—]/g, " ") // en-dash, em-dash, minus, hyphen
      .replace(/[^\p{L}\p{N}\s]/gu, " ") // alle tegn som ikke er bokstaver/tall (Unicode)
      .replace(/\s+/g, " ")
      .trim();
  const paragraphs = innhold.split("\n\n").map((p) => p.trim()).filter(Boolean);
  const normalizedTitle = normalize(tittel);
  if (!normalizedTitle) return innhold;
  let startIndex = 0;
  let accumulated = "";
  for (let i = 0; i < paragraphs.length; i++) {
    const plain = paragraphs[i].replace(/<[^>]+>/g, " ");
    const norm = normalize(plain);
    if (!norm) {
      startIndex = i + 1;
      continue;
    }
    accumulated = (accumulated + " " + norm).trim();
    const matchesTitle =
      norm === normalizedTitle ||
      normalizedTitle === norm ||
      normalizedTitle.includes(norm) ||
      norm.includes(normalizedTitle) ||
      accumulated === normalizedTitle ||
      normalizedTitle.includes(accumulated) ||
      accumulated.includes(normalizedTitle);
    if (matchesTitle) startIndex = i + 1;
    if (accumulated.length > normalizedTitle.length * 2 && !matchesTitle) break;
  }
  return paragraphs.slice(startIndex).join("\n\n");
}

/* ——— MODAL ——— */
const InnleggModal = ({ innlegg, lang, onClose, onNavigate, linkedinLabel, ctaText, ctaLink }: { innlegg: InnleggType; lang: "no" | "en"; onClose: () => void; onNavigate?: (tab: string) => void; linkedinLabel: string; ctaText: string; ctaLink: string }) => {
  const bodyRaw = innlegg.innhold?.[lang] || innlegg.teaser[lang];
  const bodyWithoutTitle = innlegg.innhold ? stripDuplicateTitle(innlegg.innhold[lang], innlegg.tittel[lang]) : bodyRaw;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm overflow-y-auto py-8 px-2 sm:px-4 modal-enter" onClick={onClose}>
      <div className="relative w-full max-w-3xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden modal-enter" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white hover:border-indigo-500 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none" aria-label="Lukk modal">
          <X size={20} />
        </button>

        <div className="w-full flex justify-center bg-slate-900/50 p-4 sm:p-6">
          <Image
            key={`${innlegg.bildeUrl}-${innlegg.dato}`}
            src={`${innlegg.bildeUrl}?v=${innlegg.dato}`}
            alt={innlegg.tittel[lang]}
            width={420}
            height={600}
            className="max-w-[420px] md:max-w-[520px] max-h-[68vh] md:max-h-[75vh] w-auto h-auto object-contain rounded-lg"
            unoptimized
          />
        </div>

        <div className="p-8 md:p-12 space-y-6">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-bold">{innlegg.visningsDato}</span>
            <span className="text-slate-700">|</span>
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{innlegg.kategori}</span>
          </div>

          <h2 id="modal-title" className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight uppercase italic">{innlegg.tittel[lang]}</h2>
          <div className="w-16 h-0.5 bg-indigo-500/40" />

          <div
            className="text-slate-300 text-base leading-relaxed space-y-0 [&_strong]:font-semibold [&_em]:italic"
            dangerouslySetInnerHTML={{
              __html: (bodyWithoutTitle || bodyRaw)
                .split("\n\n")
                .map((avsnitt) => {
                  const trimmed = avsnitt.trim();
                  if (!trimmed) return "";
                  if (trimmed.startsWith("•")) {
                    const punkter = trimmed.split("\n").filter((l) => l.trim().startsWith("•")).map((l) => `<li class="ml-4">${l.trim().substring(1).trim()}</li>`).join("");
                    return `<ul class="space-y-2 my-4 text-slate-400">${punkter}</ul>`;
                  }
                  return `<p class="mb-4">${trimmed.replace(/\n/g, "<br/>")}</p>`;
                })
                .join(""),
            }}
          />

          <div className="pt-6 border-t border-slate-800 space-y-4">
            <a href={innlegg.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-500 text-white rounded-xl font-black uppercase tracking-widest text-sm hover:bg-indigo-400 transition-all shadow-lg">
              <ExternalLink size={16} />
              {linkedinLabel}
            </a>

            {onNavigate && (
              <div className="p-5 bg-slate-900/60 border border-indigo-500/15 rounded-xl">
                <p className="text-slate-400 text-sm italic mb-3">{ctaText}</p>
                <button
                  onClick={() => { onClose(); onNavigate("Consulting"); }}
                  className="inline-flex items-center gap-2 text-indigo-400 font-black text-sm uppercase tracking-widest hover:text-white transition-all group/cta"
                >
                  {ctaLink}
                  <ArrowRight size={16} className="group-hover/cta:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faginnlegg;
