"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { resolveLocalePair } from "./lib/locale-routes";

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

export function LanguageProvider({
  children,
  initialLang = "no",
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    setLang(initialLang);
  }, [initialLang]);

  /** Client fallback on unmapped routes — does not override server html lang on indexable EN URLs. */
  useEffect(() => {
    if (typeof document === "undefined") return;
    const pair = resolveLocalePair(window.location.pathname);
    if (pair) return;
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
  const pathname = usePathname();
  const router = useRouter();
  const pair = resolveLocalePair(pathname ?? "/");

  const switchTo = (target: Lang) => {
    if (target === lang) return;
    if (pair) {
      router.push(pair[target]);
      return;
    }
    setLang(target);
  };

  return (
    <div className="flex items-center gap-1.5 shrink-0">
      <button
        onClick={() => switchTo("no")}
        className={`transition-all rounded-sm overflow-hidden ${lang === "no" ? "opacity-100 ring-2 ring-indigo-500 scale-110" : "opacity-40 hover:opacity-70"}`}
        title="Norsk"
        aria-label="Bytt til norsk"
      >
        <Image
          src="/images/norsk-flagg.png"
          alt="Norsk"
          width={24}
          height={16}
          className="w-6 h-4 object-cover rounded-sm"
          unoptimized
        />
      </button>
      <button
        onClick={() => switchTo("en")}
        className={`transition-all rounded-sm overflow-hidden ${lang === "en" ? "opacity-100 ring-2 ring-indigo-500 scale-110" : "opacity-40 hover:opacity-70"}`}
        title="English"
        aria-label="Switch to English"
      >
        <Image
          src="/images/engelsk-flagg.jfif"
          alt="English"
          width={24}
          height={16}
          className="w-6 h-4 object-cover rounded-sm"
          unoptimized
        />
      </button>
    </div>
  );
}
