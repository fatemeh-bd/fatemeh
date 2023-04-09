// used for SSR (getServerSideProps)
const path = require("path");
const localePath = path.resolve("./public/locales");

module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging

  localeDetection: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fa"],
    localeDetection: false,
    localePath
  },
  fallbackLng: {
    // lng: "fa",
    default: ["en"]
  }
};
