import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";


 function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <Head>
       <meta name="color-scheme" content="dark light"/>
       <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0, maximum-scale=1.0"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
     
        <meta name="application-name" content="fatemeh" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="fatemeh" />
        <meta name="description" content="fatemeh baridaryan personal site" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/> */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0, maximum-scale=1.0"
        />
        {/* Chrome, Firefox OS and Opera  */}
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta name="theme-color" content="#1f1f1f" />
        {/* Windows Phone  */}
        <meta name="msapplication-navbutton-color" content="#1f1f1f" />
        {/* iOS Safari  */}
        <meta name="apple-mobile-web-app-status-bar-style" content="#1f1f1f" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/touch-icon-ipad-retina.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yourdomain.com" />
        <meta name="twitter:title" content="fatemeh" />
        <meta name="twitter:description" content="fatemeh baridaryan personal site" />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="fatemeh" />
        <meta property="og:description" content="fatemeh baridaryan personal site" />
        <meta property="og:site_name" content="fatemeh" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/icons/apple-touch-icon.png"
        />
      </Head>
      <Component {...pageProps} />

    </Provider>
  );
}
export default appWithTranslation(App)