import { ChevronDown } from "lucide-react";
import type { Lang } from "../../LanguageContext";
import type { LocalizedString } from "../../data/strategic-platform-projects/types";
import { t } from "../../data/strategic-platform-projects";
import { sectionHeadingClass, sectionHeadingWrapClass } from "../../lib/typography";

const summaryClass =
  "cursor-pointer list-none flex items-start justify-between gap-3 text-sm font-medium text-slate-200 hover:text-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 rounded py-3 [&::-webkit-details-marker]:hidden";

type FaqItem = {
  question: LocalizedString;
  answer: LocalizedString;
};

type ProjectFaqSectionProps = {
  heading: LocalizedString;
  items: FaqItem[];
  lang: Lang;
};

export default function ProjectFaqSection({ heading, items, lang }: ProjectFaqSectionProps) {
  return (
    <section aria-labelledby="plattform-faq" className="mb-10">
      <div className={sectionHeadingWrapClass}>
        <h2 id="plattform-faq" className={sectionHeadingClass}>
          {t(heading, lang)}
        </h2>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/30 divide-y divide-slate-800/80">
        {items.map((item) => (
          <details key={item.question.no} className="group px-4 sm:px-5">
            <summary className={summaryClass}>
              <span className="text-left min-w-0 pr-2">{t(item.question, lang)}</span>
              <ChevronDown
                size={16}
                className="shrink-0 mt-0.5 text-indigo-400/80 transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="pb-4 text-sm text-slate-400 font-light leading-relaxed">{t(item.answer, lang)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
