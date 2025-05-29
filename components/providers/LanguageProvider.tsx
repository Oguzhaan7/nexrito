"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import type { Lang } from "@/types/common/Lang";

type LocaleType = Record<string, string>;

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  locale: LocaleType | null;
}>({
  lang: "en_US",
  setLang: () => {},
  locale: null,
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLangState] = useState<Lang>("en_US");
  const [locale, setLocale] = useState<LocaleType | null>(null);

  useEffect(() => {
    const stored = Cookies.get("lang") as Lang | undefined;
    if (stored) setLangState(stored);
  }, []);

  useEffect(() => {
    import(`@/locales/${lang}.json`).then((mod) =>
      setLocale(mod.default ?? mod)
    );
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    Cookies.set("lang", newLang, { path: "/", expires: 365 });
    window.location.reload();
  };

  if (!locale) return null;

  return (
    <LanguageContext.Provider value={{ lang, setLang, locale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
