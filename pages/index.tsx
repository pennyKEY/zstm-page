import Head from "next/head";
import { Inter } from "next/font/google";

import Header from "@/components/start/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Zespół Szkół Transportowo Mechatronicznych</title>
      </Head>
      <Header />
    </>
  );
}
