"use client";

import { createContext, useContext, ReactNode, useCallback, useSyncExternalStore } from "react";
import { homePageTranslations } from "@/data/home";
import { cn } from "@/lib/utils";

// 다국어 타입 정의
export type Language = "ko" | "en";

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// localStorage 키
const STORAGE_KEY = "integro-lang";

// localStorage 구독 및 동기화를 위한 헬퍼
const languageStore = {
  getSnapshot: (): Language => {
    if (typeof window === "undefined") return "ko";
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored === "en" || stored === "ko") ? stored : "ko";
  },
  getServerSnapshot: (): Language => "ko",
  subscribe: (callback: () => void) => {
    // storage 이벤트 리스너 (다른 탭에서 변경 시)
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) callback();
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  // useSyncExternalStore로 localStorage와 동기화
  const storedLang = useSyncExternalStore(
    languageStore.subscribe,
    languageStore.getSnapshot,
    languageStore.getServerSnapshot
  );
  
  // storedLang을 직접 사용 (useState 제거)
  const lang = storedLang;

  // 언어 변경 시 localStorage에 저장하고 리렌더링 트리거
  const setLang = useCallback((newLang: Language) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newLang);
      // storage 이벤트를 수동으로 발생시켜 구독자들에게 알림
      window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY, newValue: newLang }));
    }
  }, []);

  const t = useCallback((key: string): string => {
    const translations = homePageTranslations[lang] as Record<string, string>;
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
