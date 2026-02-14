"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { getTranslation } from "../data/translations";

interface MobileNavProps {
  tabs: string[];
  tabLabels: Record<string, string>;
  activeTab: string;
  onTabClick: (tab: string) => void;
}

export default function MobileNav({ tabs, tabLabels, activeTab, onTabClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();

  return (
    <>
      {/* Hamburger button - visible on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900/40 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
        aria-label="Åpne meny"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 left-0 right-0 bg-slate-950 border-b border-slate-800 shadow-2xl">
            <div className="p-4 space-y-2 max-h-[80vh] overflow-y-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    onTabClick(tab);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg font-black uppercase text-base tracking-widest transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none ${
                    activeTab === tab
                      ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                  }`}
                >
                  {tabLabels[tab]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
