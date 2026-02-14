"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Image from "next/image";

export type Lang = "no" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (no: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "no",
  setLang: () => {},
  t: (no) => no,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("no");

  // Oppdater <html lang> dynamisk når språk endres
  useEffect(() => {
    document.documentElement.lang = lang === "no" ? "no" : "en";
  }, [lang]);

  const t = (no: string, en: string) => (lang === "no" ? no : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1.5 shrink-0">
      <button
        onClick={() => setLang("no")}
        className={`transition-all rounded-sm overflow-hidden ${lang === "no" ? "opacity-100 ring-2 ring-indigo-500 scale-110" : "opacity-40 hover:opacity-70"}`}
        title="Norsk"
        aria-label="Bytt til norsk"
      >
        <Image src="/images/norsk-flagg.png" alt="Norsk" width={24} height={16} className="w-6 h-4 object-cover rounded-sm" unoptimized />
      </button>
      <button
        onClick={() => setLang("en")}
        className={`transition-all rounded-sm overflow-hidden ${lang === "en" ? "opacity-100 ring-2 ring-indigo-500 scale-110" : "opacity-40 hover:opacity-70"}`}
        title="English"
        aria-label="Switch to English"
      >
        <Image src="/images/engelsk-flagg.jfif" alt="English" width={24} height={16} className="w-6 h-4 object-cover rounded-sm" unoptimized />
      </button>
    </div>
  );
}
