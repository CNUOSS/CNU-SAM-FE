import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as languages from '../languages';

i18n.use(initReactI18next).init({
  resources: {
    en: languages.en,
    ko: languages.ko,
  },
  lng: navigator.language,
  fallbackLng: 'ko',
  debug: false,

  interpolation: {
    escapeValue: false,
  },
});
