/** Felles overskriftsregler — alle hovedfaner (profil, erfaring, resultater osv.). */

/** H1 – sidetittel */
export const pageTitleClass =
  "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter italic break-words max-w-full [overflow-wrap:anywhere]";

/** Label/undertittel rett under sidetittel */
export const pageEyebrowClass = "text-lg text-indigo-400 font-black tracking-wide italic";

/** H2 – seksjonsoverskrifter */
export const sectionTitleClass = "text-xl md:text-2xl font-black text-white italic tracking-tight";

/** H2 med understrek (consulting, pilot) */
export const sectionHeadingWrapClass = "border-b-2 border-indigo-500/30 mb-6";

export const sectionHeadingClass = `${sectionTitleClass} mb-4`;

/** H3 – jobber, selskapskort, pakker */
export const blockTitleClass = "text-lg font-black text-white italic tracking-tight leading-tight";

/** Selskapsnavn – erfaring (under stillingstittel) */
export const selskapNavnClass =
  "text-base md:text-lg font-black italic tracking-tight leading-tight";

/** Selskapsnavn – resultater-kort (hovedoverskrift i kort) */
export const selskapNavnHeroClass =
  "text-xl md:text-2xl font-black text-white italic tracking-tight leading-tight";

/** H3 – kompakte kort */
export const cardTitleClass = "text-sm font-black text-white italic tracking-tight";

/** H3 – små kortoverskrifter (verdi, lederprofil) */
export const cardSubtitleClass = "text-sm font-black text-slate-300 italic tracking-tight";

/** H2/H3 – seksjoner med ikon (kontakt) */
export const iconSectionTitleClass =
  "text-indigo-500 font-black flex items-center gap-2 text-base tracking-wide italic";

/** Intro under hero (consulting, prosjekter) */
export const pageIntroClass = "text-xl md:text-2xl text-slate-300 leading-relaxed font-light w-full min-w-0 max-w-none";

/** Teaser under prosjekttittel */
export const prosjektTeaserClass =
  "text-sm leading-[1.5] md:leading-[1.48] font-light break-words text-slate-400 [&_em]:italic";

/**
 * Brødtekst i AI-prosjektkort — felles standard:
 * - body: slate-300
 * - seksjonsoverskrifter (strong): hvit
 * - nummererte steg: kompakt innrykk via .prosjekt-steg-liste / .prosjekt-innrykk
 */
const prosjektInnholdBaseClass =
  "text-slate-300 text-base leading-[1.5] md:leading-[1.48] space-y-1.5 font-light break-words overflow-hidden " +
  "[&_strong]:font-semibold [&_strong]:text-white [&_em]:italic " +
  "[&_a]:text-indigo-300 [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-indigo-500/70 [&_a]:hover:text-indigo-200 [&_a]:transition-colors " +
  "[&_a.link-subtle]:text-slate-300 [&_a.link-subtle]:no-underline [&_a.link-subtle]:hover:text-indigo-300 [&_a.link-subtle]:hover:underline " +
  "[&_.prosjekt-steg-liste]:flex [&_.prosjekt-steg-liste]:flex-col [&_.prosjekt-steg-liste]:gap-1.5 [&_.prosjekt-steg-liste]:mt-0.5 " +
  "[&_blockquote.prosjekt-innrykk]:m-0 [&_blockquote.prosjekt-innrykk]:ml-3 [&_blockquote.prosjekt-innrykk]:pl-3 [&_blockquote.prosjekt-innrykk]:py-0.5 " +
  "[&_blockquote.prosjekt-innrykk]:border-l-2 [&_blockquote.prosjekt-innrykk]:border-indigo-500/30 [&_blockquote.prosjekt-innrykk]:not-italic " +
  "[&_blockquote.prosjekt-innrykk]:text-slate-300 [&_blockquote.prosjekt-innrykk]:leading-snug " +
  "[&_blockquote.prosjekt-innrykk_strong]:text-white";

const prosjektInnholdPscClass =
  prosjektInnholdBaseClass
    .replace("[&_a]:text-indigo-300", "[&_a]:text-[#E30613]")
    .replace("[&_a]:decoration-indigo-500/70", "[&_a]:decoration-[#E30613]/70")
    .replace("[&_a]:hover:text-indigo-200", "[&_a]:hover:text-white")
    .replace("[&_a.link-subtle]:hover:text-indigo-300", "[&_a.link-subtle]:hover:text-[#E30613]") +
  " [&_a.psc-app-link]:text-[#E30613] [&_a.psc-app-link]:font-semibold [&_a.psc-app-link]:underline [&_a.psc-app-link]:underline-offset-2 " +
  "[&_a.psc-app-link]:decoration-[#E30613] [&_a.psc-app-link]:hover:text-white [&_a.psc-app-link]:hover:decoration-white " +
  "[&_a.psc-app-link]:transition-colors [&_a.psc-app-link_em]:italic [&_a.psc-app-link_em]:text-[#E30613] [&_a.psc-app-link:hover_em]:text-white " +
  "[&_a.psc-app-link_.psc-v]:text-[#E30613] [&_a.psc-app-link:hover_.psc-v]:text-white";

const prosjektInnholdFlowSignalClass =
  prosjektInnholdBaseClass +
  " [&_a.fs-app-link]:text-[#CDB47A] [&_a.fs-app-link]:font-semibold [&_a.fs-app-link]:underline [&_a.fs-app-link]:underline-offset-2 " +
  "[&_a.fs-app-link]:decoration-[#CDB47A] [&_a.fs-app-link]:hover:text-white [&_a.fs-app-link]:hover:decoration-white " +
  "[&_a.fs-app-link]:transition-colors [&_a.fs-app-link_.fs-mark]:text-[#CDB47A] [&_a.fs-app-link:hover_.fs-mark]:text-white " +
  "[&_a.fs-app-link_.fs-v]:text-[#CDB47A] [&_a.fs-app-link:hover_.fs-v]:text-white";

export function getProsjektInnholdProseClass(variant: "default" | "psc" | "flowsignal"): string {
  if (variant === "psc") return prosjektInnholdPscClass;
  if (variant === "flowsignal") return prosjektInnholdFlowSignalClass;
  return prosjektInnholdBaseClass;
}
