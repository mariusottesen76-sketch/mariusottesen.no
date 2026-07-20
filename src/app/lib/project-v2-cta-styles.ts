/** Felles knappestiler for project_v2 CTA-er — gjenbruker nettstedets indigo-palett. */

/** Hvit primærknapp — sterkeste handling. */
export const PROJECT_CTA_PRIMARY_CLASS =
  "inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-slate-950 px-6 py-3 rounded-full font-black uppercase text-xs italic shadow-lg transition-colors hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 min-h-[44px]";

/** Lyseblå sekundærknapp — indigo-400 er etablert accent-token på nettstedet. */
export const PROJECT_CTA_SECONDARY_CLASS =
  "inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-indigo-400 text-slate-950 px-6 py-3 rounded-full font-black uppercase text-xs italic shadow-md transition-colors hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 min-h-[44px]";

/** Deaktivert plattformknapp — ikke klikkbar, diskret status. */
export const PROJECT_CTA_DISABLED_CLASS =
  "inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-slate-800/60 text-slate-500 px-6 py-3 rounded-full font-black uppercase text-xs italic cursor-not-allowed min-h-[44px] border border-slate-700/50";

/** Tertiær tekstlenke i CTA-rekken. */
export const PROJECT_CTA_TERTIARY_CLASS =
  "inline-flex items-center justify-center gap-1.5 w-full sm:w-auto text-xs text-slate-500 hover:text-indigo-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 rounded-sm min-h-[44px] px-2";
