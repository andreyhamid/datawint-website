"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "es" | "en";

type SiteContextValue = {
  language: Language;
  toggleLanguage: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("datawint-language");
    if (savedLanguage === "es" || savedLanguage === "en") setLanguage(savedLanguage);
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("datawint-language", language);
  }, [language]);
  const value = useMemo(
    () => ({
      language,
      toggleLanguage: () => setLanguage((current) => (current === "es" ? "en" : "es")),
    }),
    [language],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSiteLanguage() {
  const context = useContext(SiteContext);
  if (!context) throw new Error("useSiteLanguage must be used within SiteProvider");
  return context;
}
