import { useLanguage } from "@/components/providers/LanguageProvider";
import { useEffect, useState } from "react";

export const useTranslation = () => {
  const { lang } = useLanguage();
  const [messages, setMessages] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    import(`@/locales/${lang}.json`).then(setMessages);
  }, [lang]);

  const t = (key: string) => messages[key] || key;
  return { t };
};
