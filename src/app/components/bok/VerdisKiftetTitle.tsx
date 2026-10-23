import React from "react";

/** Ett ord for SEO/skjermleser; KI visuelt fremhevet i tråd med omslaget. */
export default function VerdisKiftetTitle({ className = "" }: { className?: string }) {
  return (
    <span className={className} lang="no">
      Verdis<span className="text-amber-400/90 font-[inherit]">KI</span>ftet
    </span>
  );
}
