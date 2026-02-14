// src/app/data/types.ts

export interface Innlegg {
  id: string;
  tittel: string;
  teaser: string;
  innhold?: string;
  bildeUrl: string;
  dato: string;
  visningsDato: string;
  timestamp?: number;
  kategori: "AI / KI" | "Kommersiell Ledelse";
  link: string;
}
