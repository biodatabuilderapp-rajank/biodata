"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Tiny component that ONLY watches the ?locale= query param.
 * It syncs the param to localStorage and dispatches a "localeChange" custom
 * event so that HomeContent can react without itself needing useSearchParams.
 *
 * This must be wrapped in <Suspense> by its parent — isolating the Suspense
 * boundary to just this component so the rest of the page renders as full HTML.
 */
export default function LocaleWatcher() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const fromUrl = searchParams.get("locale");
    if (fromUrl) {
      localStorage.setItem("biodataLang", fromUrl);
      window.dispatchEvent(new CustomEvent("localeChange", { detail: fromUrl }));
    }
  }, [searchParams]);

  // Also expose a helper so HomeContent can update the URL
  useEffect(() => {
    const handler = (e: Event) => {
      const lang = (e as CustomEvent<string>).detail;
      const params = new URLSearchParams(searchParams.toString());
      if (lang === "en") {
        params.delete("locale");
      } else {
        params.set("locale", lang);
      }
      const newUrl = params.size > 0 ? `/?${params.toString()}` : "/";
      router.replace(newUrl, { scroll: false });
    };
    window.addEventListener("localeSet", handler);
    return () => window.removeEventListener("localeSet", handler);
  }, [searchParams, router]);

  return null; // renders nothing visible
}
