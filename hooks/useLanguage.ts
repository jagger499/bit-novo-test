import { translations } from "@/config/translations";
import { Language, TranslationKeys } from "@/types/hooks/useLanguage";
import { useEffect, useState } from "react";

export const useLanguages = (initialLanguage: Language = "es") => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  }

  const t = (key: keyof TranslationKeys): string => {
    const languageTranslations = translations[language];
    if (languageTranslations && typeof key === 'string') {
      return languageTranslations[key] as string;
    }
    return key as string;
  };

  return { t, changeLanguage, language };
};
