/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  i18n,
  nextConfig,
  compiler: {
    styledComponents: true,
  },
});
