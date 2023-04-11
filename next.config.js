/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify:true
};

const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa")({
  dest: "public",
  register:true,
  skipWaiting:true
});

module.exports = withPWA({
  i18n,
  nextConfig,
  compiler: {
    styledComponents: true,
  },
});
