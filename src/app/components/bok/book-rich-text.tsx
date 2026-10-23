import React from "react";
import VerdisKiftetTitle from "./VerdisKiftetTitle";

const MARKER_RE = /\*VerdisKIftet\*|\*Generative AI for Business\*/g;

/** Brødtekst med kursiv boktittel og kursnamn — uten å endre godkjent ordlyd. */
export function BookRichText({ text, className = "" }: { text: string; className?: string }) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const match of text.matchAll(MARKER_RE)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    if (match[0] === "*VerdisKIftet*") {
      nodes.push(
        <em key={key++} className="italic font-light text-slate-300">
          <VerdisKiftetTitle className="italic" />
        </em>,
      );
    } else {
      nodes.push(
        <em key={key++} className="italic font-light text-slate-300">
          Generative AI for Business
        </em>,
      );
    }
    last = index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));

  return <span className={className}>{nodes}</span>;
}
