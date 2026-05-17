"use client";

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { defaultLocale, locales } from "@/i18n/config";
import { getDictionary, type Dictionary } from "@/i18n/dictionaries";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const I18nContext = createContext<I18nContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  t: getDictionary(defaultLocale),
});

export function useI18n() {
  return useContext(I18nContext);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("abh-locale") as Locale | null;
    if (saved && locales.includes(saved)) {
      setLocaleState(saved);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("abh-locale", newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  const t = getDictionary(locale);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}
