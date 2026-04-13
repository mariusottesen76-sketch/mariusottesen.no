"use client";
import React, { useState, useCallback, useEffect } from "react";
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

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 px-16 sm:px-24 md:px-32 lg:px-40 xl:px-48 2xl:px-56 py-4 md:py-8 relative overflow-x-hidden w-full">
      <div className={`${activeTab === "Faginnlegg" || activeTab === "Prosjekter" || activeTab === "Consulting" ? "max-w-7xl" : "max-w-6xl"} mx-auto relative z-10 transition-all duration-500 w-full`}>

        {/* NAVIGASJONSLINJE */}
        <nav className="flex items-center gap-1 sm:gap-2 md:gap-3 mb-8 border-b border-slate-800/40 pb-3 w-full">

          {/* HJEM-KNAPP / LOGO */}
          <button
            onClick={() => setActiveTab("Profil")}
            className="flex items-center gap-1 sm:gap-1.5 group transition-all shrink-0"
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
            <div className="hidden sm:flex items-center gap-0.5 shrink-0">
              <span className="text-white font-black uppercase text-[9px] sm:text-[11px] md:text-[13px] tracking-tight italic">Marius</span>
              <span className="text-indigo-500 font-black uppercase text-[9px] sm:text-[11px] md:text-[13px] tracking-tight italic">Ottesen</span>
            </div>
          </button>

          {/* ARKFANER – én linje; font skalerer med tilgjengelig bredde (cqi) så ingenting bryter til rad 2 */}
          <div
            className="hidden md:flex flex-1 justify-center min-w-0"
            style={{ containerType: "inline-size" }}
          >
            <div className="flex flex-nowrap justify-center items-end gap-x-px sm:gap-x-0.5 md:gap-x-1 lg:gap-x-1.5 min-w-0 max-w-full">
              {tabKeys.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[clamp(6px,min(2.85cqi,calc(0.52vw + 5px)),15px)] font-black tracking-tight [letter-spacing:-0.02em] uppercase transition-all whitespace-nowrap pb-0.5 px-px sm:px-0.5 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none rounded-sm shrink-0 ${
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

          {/* MOBIL NAV + SPRÅKVELGER – fast plass så faner ikke overlapper */}
          <div className="flex items-center gap-2 shrink-0 pl-2 md:pl-3">
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
