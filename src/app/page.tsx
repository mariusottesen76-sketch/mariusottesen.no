"use client";
import React, { useState, useCallback, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Profil from "./Profil";
import Erfaring from "./Erfaring";
import Resultater from "./Resultater";
import Faginnlegg from "./Faginnlegg";
import Prosjekter from "./Prosjekter";
import Dokumentasjon from "./Dokumentasjon";
import Kontakt from "./Kontakt";
import Consulting from "./Consulting";
import Referanser from "./Referanser";
import { Linkedin } from "lucide-react";
import { LanguageProvider, useLanguage, LanguageToggle } from "./LanguageContext";
import { getTranslation } from "./data/translations";
import BackToTop from "./components/BackToTop";
import MobileNav from "./components/MobileNav";

const TAB_TO_SLUG: Record<string, string> = {
  Profil: "",
  Erfaring: "erfaring",
  Resultater: "resultater",
  Referanser: "referanser",
  Faginnlegg: "faginnlegg",
  Prosjekter: "prosjekter",
  Consulting: "consulting",
  "CV & Åpen søknad": "cv",
  Kontakt: "kontakt",
};

const SLUG_TO_TAB: Record<string, string> = Object.fromEntries(
  (Object.entries(TAB_TO_SLUG) as [string, string][]).filter(([, slug]) => slug !== "").map(([tab, slug]) => [slug, tab])
);

/**
 * Finner største fontstørrelse slik at faneraden får plass i midtkolonnen.
 * `safetyPx` trekkes fra tilgjengelig bredde (aktiv border, subpiksler, små layout-endringer).
 */
function fitDesktopTabFontPx(
  mid: HTMLElement,
  row: HTMLElement,
  minPx: number,
  maxPx: number,
  safetyPx: number
): number {
  const raw = mid.clientWidth;
  if (raw <= 0) return minPx;
  const maxW = Math.max(0, raw - safetyPx);
  if (maxW < 24) return minPx;

  const tabs = row.querySelectorAll<HTMLButtonElement>("button");
  if (tabs.length === 0) return minPx;

  /** <button> arver ikke font-size i de fleste nettlesere — må settes eksplisitt for korrekt scrollWidth under måling. */
  const applyPx = (px: number) => {
    const s = `${px}px`;
    row.style.fontSize = s;
    tabs.forEach((b) => {
      b.style.fontSize = s;
      b.style.lineHeight = "1.12";
    });
  };

  const clearRowFont = () => {
    row.style.fontSize = "";
  };

  let lo = minPx;
  let hi = maxPx;
  let best = minPx;
  for (let i = 0; i < 32; i++) {
    const test = (lo + hi) / 2;
    applyPx(test);
    const sw = row.scrollWidth;
    if (sw <= maxW) {
      best = test;
      lo = test;
    } else {
      hi = test;
    }
    if (hi - lo < 0.05) break;
  }
  clearRowFont();
  const capped = Math.max(minPx, Math.min(maxPx, best));
  const nudged = Math.max(minPx, capped - 0.35);
  return Math.round(nudged * 10) / 10;
}

function AppContent({ initialTab = "Profil" }: { initialTab?: string }) {
  const router = useRouter();
  const [activeTab, setActiveTabState] = useState(initialTab);

  useEffect(() => {
    setActiveTabState(initialTab);
  }, [initialTab]);

  const setActiveTab = useCallback(
    (tab: string) => {
      setActiveTabState(tab);
      const slug = TAB_TO_SLUG[tab];
      if (slug) router.push("/" + slug);
      else router.push("/");
    },
    [router]
  );
  const { lang, t } = useLanguage();

  const tabKeys = [
    "Profil",
    "Erfaring",
    "Resultater",
    "Referanser",
    "Faginnlegg",
    "Prosjekter",
    "Consulting",
    "CV & Åpen søknad",
    "Kontakt",
  ];

  const tabLabels: Record<string, string> = {
    "Profil": getTranslation("tab.profil", lang),
    "Erfaring": getTranslation("tab.erfaring", lang),
    "Resultater": getTranslation("tab.resultater", lang),
    "Referanser": getTranslation("tab.referanser", lang),
    "Faginnlegg": getTranslation("tab.faginnlegg", lang),
    "Prosjekter": getTranslation("tab.prosjekter", lang),
    "Consulting": getTranslation("tab.consulting", lang),
    "CV & Åpen søknad": getTranslation("tab.cv", lang),
    "Kontakt": getTranslation("tab.kontakt", lang),
  };

  const tabBarMidRef = useRef<HTMLDivElement>(null);
  const tabBarRowRef = useRef<HTMLDivElement>(null);
  const [desktopTabFontPx, setDesktopTabFontPx] = useState(9);

  useLayoutEffect(() => {
    const mid = tabBarMidRef.current;
    const row = tabBarRowRef.current;
    if (!mid || !row) return;

    const run = () => {
      if (typeof window !== "undefined" && window.innerWidth < 768) return;
      const cw = mid.clientWidth;
      if (cw < 2) return;

      /* Tak og margin ut fra faktisk bannerbredde (midtkolonne): bred sone → større bokstaver mulig, smal → lavere tak. */
      const maxPx = Math.min(15, Math.max(6.5, cw * 0.026));
      const safetyPx = Math.min(26, Math.max(12, Math.round(10 + cw * 0.024)));

      const next = fitDesktopTabFontPx(mid, row, 4.25, maxPx, safetyPx);
      setDesktopTabFontPx((prev) => (Math.abs(prev - next) < 0.05 ? prev : next));
    };

    const runQueued = () => requestAnimationFrame(run);

    runQueued();
    const ro = new ResizeObserver(runQueued);
    ro.observe(mid);
    window.addEventListener("resize", runQueued);
    let cancelled = false;
    document.fonts?.ready?.then(() => {
      if (!cancelled) requestAnimationFrame(() => requestAnimationFrame(run));
    });
    return () => {
      cancelled = true;
      ro.disconnect();
      window.removeEventListener("resize", runQueued);
    };
  }, [lang, activeTab]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 px-16 sm:px-24 md:px-32 lg:px-40 xl:px-48 2xl:px-56 py-4 md:py-8 relative overflow-x-hidden w-full">
      <div className={`${activeTab === "Faginnlegg" || activeTab === "Prosjekter" || activeTab === "Consulting" ? "max-w-7xl" : "max-w-6xl"} mx-auto relative z-10 transition-all duration-500 w-full`}>

        {/* NAVIGASJONSLINJE — md+: grid slik faneraden aldri overlapper logo (v.) eller språk (h.) */}
        <nav className="mb-8 flex w-full items-center justify-between gap-2 border-b border-slate-800/40 pb-3 md:grid md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-x-3">

          {/* HJEM-KNAPP / LOGO */}
          <button
            onClick={() => setActiveTab("Profil")}
            className="relative z-20 flex items-center gap-2 sm:gap-2.5 group transition-all shrink-0 rounded-full bg-slate-950 pr-2 sm:pr-3"
          >
            <div className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] rounded-full overflow-hidden shrink-0 bg-slate-800">
              <Image
                src="/images/ikon.png"
                alt="Marius Ottesen logo"
                width={44}
                height={44}
                className="w-full h-full object-cover transition-all duration-300"
                priority
              />
            </div>
            <div className="hidden items-center gap-0.5 shrink-0 sm:flex md:hidden lg:flex">
              <span className="text-white font-black uppercase text-[9px] sm:text-[11px] md:text-[13px] tracking-tight italic">Marius</span>
              <span className="text-indigo-500 font-black uppercase text-[9px] sm:text-[11px] md:text-[13px] tracking-tight italic">Ottesen</span>
            </div>
          </button>

          {/* ARKFANER – én linje; font skalerer med midtkolonnens bredde (større tak når bredt, mindre når trangt) + binærsøk så ingenting kuttes */}
          <div
            ref={tabBarMidRef}
            className="hidden min-w-0 max-w-full justify-center overflow-x-visible px-0 md:flex md:w-full"
          >
            <div
              ref={tabBarRowRef}
              className="inline-flex max-w-full min-w-0 flex-nowrap items-end justify-center gap-x-0 font-black tracking-tight [letter-spacing:-0.05em] uppercase md:gap-x-0.5 lg:gap-x-0.5 xl:gap-x-1"
            >
              {tabKeys.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  style={{ fontSize: `${desktopTabFontPx}px`, lineHeight: 1.12 }}
                  className={`shrink-0 whitespace-nowrap pb-0.5 px-0 transition-colors md:px-0.5 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none rounded-sm ${
                    activeTab === tab
                      ? "text-indigo-400 border-b-2 border-indigo-400"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title={tabLabels[tab]}
                >
                  {tabLabels[tab]}
                </button>
              ))}
            </div>
          </div>

          {/* MOBIL NAV + SPRÅKVELGER */}
          <div className="relative z-20 flex shrink-0 items-center gap-2 rounded-lg bg-slate-950 pl-3 md:pl-4">
            <MobileNav tabs={tabKeys} tabLabels={tabLabels} activeTab={activeTab} onTabClick={setActiveTab} />
            <LanguageToggle />
          </div>
        </nav>

        {/* INNHOLD */}
        <div className="transition-all duration-500">
          {activeTab === "Profil" && <Profil onNavigate={(tab) => setActiveTab(tab)} />}
          {activeTab === "Erfaring" && <Erfaring />}
          {activeTab === "Resultater" && <Resultater />}
          {activeTab === "Referanser" && <Referanser />}
          {activeTab === "Faginnlegg" && <Faginnlegg onNavigate={(tab) => setActiveTab(tab)} />}
          {activeTab === "Prosjekter" && <Prosjekter onNavigate={(tab) => setActiveTab(tab)} />}
          {activeTab === "CV & Åpen søknad" && <Dokumentasjon />}
          {activeTab === "Consulting" && <Consulting />}
          {activeTab === "Kontakt" && <Kontakt />}
        </div>

        {/* GLOBAL FOOTER */}
        <footer className="mt-12 pt-6 border-t border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 pb-4">
          <p className="text-slate-600 text-[11px] font-bold tracking-wider">
            &copy; {new Date().getFullYear()} Marius Ottesen Consulting &middot; Org. nr. 937 102 801
          </p>
          <a
            href="https://linkedin.com/in/mariusottesen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/40 border border-slate-800 text-slate-400 text-[11px] font-black uppercase tracking-widest hover:text-white hover:border-indigo-500/50 transition-all"
          >
            <Linkedin size={14} />
            {getTranslation("footer.linkedin", lang)}
          </a>
        </footer>

        <BackToTop />
      </div>
    </main>
  );
}

export default function Page({ initialTab }: { initialTab?: string } = {}) {
  return (
    <LanguageProvider>
      <AppContent initialTab={initialTab} />
    </LanguageProvider>
  );
}
