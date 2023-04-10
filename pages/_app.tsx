import type { AppProps } from "next/app";
import Head from "next/head";

import Menu from "@/components/menu/Menu";
import Collapse from "@/components/collapse/Collapse";

import "@/styles/global.scss";
import "@/components/collapse/collapse.scss";
import "@/components/menu/menu.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Menu />
      <Collapse />
      <Component {...pageProps} />
    </>
  );
}
