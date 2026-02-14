"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-black text-indigo-500/20 uppercase italic">404</h1>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic">
            Siden ble ikke funnet
          </h2>
          <p className="text-lg text-slate-400 italic">
            Beklager, siden du leter etter eksisterer ikke eller har blitt flyttet.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 text-white rounded-full font-black uppercase text-sm tracking-widest hover:bg-indigo-400 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
          >
            <Home size={18} />
            Tilbake til forsiden
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900/40 border border-slate-800 text-slate-300 rounded-full font-black uppercase text-sm tracking-widest hover:bg-slate-900/60 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
          >
            <ArrowLeft size={18} />
            Gå tilbake
          </button>
        </div>
      </div>
    </div>
  );
}
