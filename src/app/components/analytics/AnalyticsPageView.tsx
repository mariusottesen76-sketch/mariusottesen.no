"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "../../lib/analytics";

export default function AnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastRef = useRef<string>("");

  useEffect(() => {
    const search = searchParams?.toString();
    const path = `${pathname ?? "/"}${search ? `?${search}` : ""}`;
    if (path === lastRef.current) return;
    lastRef.current = path;
    trackPageView(path);
  }, [pathname, searchParams]);

  return null;
}
