import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      Наушники: "Наушники",
      ["Беспроводные наушники"]: "Беспроводные наушники",
      Купить: "Купить",
      Корзина: "Корзина",
      ИТОГО: "ИТОГО",
      Избранное: "Избранное",
      Контакты: "Контакты",
      ["Условия сервиса"]: "Условия сервиса",
    },
  },
  en: {
    translation: {
      Наушники: "Headphones",
      ["Беспроводные наушники"]: "Wireless headphones",
      Купить: "Buy",
      Корзина: "Cart",
      ИТОГО: "TOTAL",
      Избранное: "Favorites",
      Контакты: "Contacts",
      ["Условия сервиса"]: "Terms of service",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "ru",
});

export default i18n;
