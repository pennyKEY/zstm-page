import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Zespół Szkół Transportowo Mechatronicznych</title>
      </Head>
      <h1>Witaj na stronie powitalnej</h1>
    </>
  );
}
