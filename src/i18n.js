import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import cn from "./locales/cn.json";
import jp from "./locales/jp.json";
import it from "./locales/it.json";
import kr from "./locales/kr.json";

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
  cn: {
    translation: cn,
  },
  jp: {
    translation: jp,
  },
  kr: {
    translation: kr,
  },
  it: {
    translation: it,
  },
  fr: {
    translation: fr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
