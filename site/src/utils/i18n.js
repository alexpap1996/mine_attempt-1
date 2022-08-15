import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

// here the imported modules handle the change of the language
// the option use(Backend) looks inside the public folder for JSONs that contain the translations
// in our case we have en/translation.json and gr/translation.json for the two languages
// we also use 'en' as a default/fallback language

i18n
  .use(Backend)
  // .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
  });

export default i18n;