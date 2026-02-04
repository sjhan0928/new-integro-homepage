"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { homePageTranslations, type Language } from "@/data/i18n";
import { cn } from "@/lib/utils";

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("ko");

  const t = useCallback((key: string): string => {
    const translations = homePageTranslations[lang];
    return translations[key] || key;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();
  
  return (
    <button
      onClick={() => setLang(lang === "ko" ? "en" : "ko")}
      className={cn(
        "flex items-center gap-1 px-3 py-2 rounded-lg transition-colors text-sm font-medium",
        className
      )}
    >
      <span className="font-semibold">{lang === "ko" ? "EN" : "KO"}</span>
    </button>
  );
}

export type { Language };
