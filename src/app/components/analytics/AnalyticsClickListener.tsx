"use client";

import { useEffect } from "react";
import {
  resolveClickPlacement,
  trackContactClick,
  trackCtaClick,
  trackFileDownload,
} from "../../lib/analytics";

export default function AnalyticsClickListener() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const ctaEl = target.closest("[data-analytics-cta]");
      if (ctaEl instanceof HTMLElement && ctaEl.dataset.analyticsCta) {
        trackCtaClick(ctaEl.dataset.analyticsCta);
        return;
      }

      const downloadEl = target.closest("[data-analytics-download]");
      if (downloadEl instanceof HTMLElement && downloadEl.dataset.analyticsDownload) {
        trackFileDownload(downloadEl.dataset.analyticsDownload);
        return;
      }

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href") ?? "";
      const placement = resolveClickPlacement(target);

      if (href.startsWith("mailto:")) {
        trackContactClick("email", placement);
      } else if (href.startsWith("tel:")) {
        trackContactClick("phone", placement);
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
