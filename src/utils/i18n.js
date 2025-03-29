import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        navigation: {
          homeButton: "Home",
          savedButton: "Saved Articles",
          signinButton: "Sign in",
        },
      },
    },
    pt: {
      translation: {
        navigation: {
          homeButton: "Início",
          savedButton: "Artigos Salvos",
          signinButton: "Entrar",
        },
      },
    },
  },
});

export default i18n;
