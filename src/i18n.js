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
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
    },
  });
// ✅ 核心修复：自动把 zh-CN / zh-TW / zh 映射为 cn
if (i18n.language && i18n.language.startsWith("zh")) {
  i18n.changeLanguage("cn");
}

// ✅ （可选）修复某些浏览器返回带国家码的语言
if (i18n.language && i18n.language.includes("-")) {
  const shortLang = i18n.language.split("-")[0];
  if (resources[shortLang]) {
    i18n.changeLanguage(shortLang);
  }
}

export default i18n;
