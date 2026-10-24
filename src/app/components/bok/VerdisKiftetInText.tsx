import React from "react";
import VerdisKiftetTitle from "./VerdisKiftetTitle";

const TOKEN_RE = /\*VerdisKIftet\*|VerdisKIftet|\*Generative AI for Business\*/g;

/** Brødtekst/etiketter med gyllen KI i VerdisKIftet (+ valgfri kursiv for boktittel / kursnavn). */
export function VerdisKiftetInText({ text, className = "" }: { text: string; className?: string }) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const match of text.matchAll(TOKEN_RE)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    const token = match[0];
    if (token.includes("VerdisKIftet")) {
      const italic = token.startsWith("*");
      nodes.push(
        italic ? (
          <em key={key++} className="italic font-light">
            <VerdisKiftetTitle className="italic" />
          </em>
        ) : (
          <VerdisKiftetTitle key={key++} />
        ),
      );
    } else {
      nodes.push(
        <em key={key++} className="italic font-light">
          Generative AI for Business
        </em>,
      );
    }
    last = index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));

  return <span className={className}>{nodes}</span>;
}
