"use client";

import type { Lang } from "../../LanguageContext";
import type { StrategicPlatformScalability } from "../../data/strategic-platform-projects/types";
import { t } from "../../data/strategic-platform-projects/i18n";
import { cardTitleClass } from "../../lib/typography";
import { ChevronRight } from "lucide-react";

type ScalabilitySectionProps = {
  data: StrategicPlatformScalability;
  lang: Lang;
};

function BulletList({ punkter, lang }: { punkter: { no: string; en: string }[]; lang: Lang }) {
  return (
    <ul className="space-y-2">
      {punkter.map((punkt) => (
        <li key={punkt.no} className="flex items-start gap-2 text-sm text-slate-400 font-light leading-relaxed">
          <ChevronRight size={14} className="text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{t(punkt, lang)}</span>
        </li>
      ))}
    </ul>
  );
}

function ScalabilityCard({
  heading,
  punkter,
  funksjoner,
  bransjer,
  note,
  lang,
}: {
  heading: { no: string; en: string };
  punkter?: { no: string; en: string }[];
  funksjoner?: { heading: { no: string; en: string }; punkter: { no: string; en: string }[] };
  bransjer?: { heading: { no: string; en: string }; punkter: { no: string; en: string }[] };
  note?: { no: string; en: string };
  lang: Lang;
}) {
  return (
    <div className="p-5 bg-slate-900/40 rounded-xl border border-slate-800 space-y-4 min-w-0">
      <h3 className={cardTitleClass}>{t(heading, lang)}</h3>
      {punkter && punkter.length > 0 && <BulletList punkter={punkter} lang={lang} />}
      {funksjoner && (
        <div className="space-y-2">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
            {t(funksjoner.heading, lang)}
          </h4>
          <BulletList punkter={funksjoner.punkter} lang={lang} />
        </div>
      )}
      {bransjer && (
        <div className="space-y-2">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
            {t(bransjer.heading, lang)}
          </h4>
          <BulletList punkter={bransjer.punkter} lang={lang} />
        </div>
      )}
      {note && <p className="text-sm text-slate-500 font-light leading-relaxed pt-1">{t(note, lang)}</p>}
    </div>
  );
}

export default function ScalabilitySection({ data, lang }: ScalabilitySectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ScalabilityCard heading={data.platform.heading} punkter={data.platform.punkter} lang={lang} />
      <ScalabilityCard
        heading={data.tilpasning.heading}
        punkter={data.tilpasning.punkter}
        funksjoner={data.tilpasning.funksjoner}
        bransjer={data.tilpasning.bransjer}
        note={data.tilpasning.note}
        lang={lang}
      />
    </div>
  );
}
