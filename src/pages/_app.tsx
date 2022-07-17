import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import DefaultLayout from "../layout/default";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height"
        />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </Head>
      <div id="menuMobile" />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
};

export default MyApp;
