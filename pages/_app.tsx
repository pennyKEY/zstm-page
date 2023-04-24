import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "next/font/google";

import Menu from "@/components/menu/Menu";
import Collapse from "@/components/collapse/Collapse";

import "@/styles/global.scss";

import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Menu />
      <Collapse />
      <Component {...pageProps} />
    </div>
  );
}
