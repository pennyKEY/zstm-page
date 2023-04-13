import Head from "next/head";

import Header from "@/components/pages/start/Header";
import News from "@/components/pages/start/News";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zespół Szkół Transportowo Mechatronicznych</title>
      </Head>
      <Header />
      <News />
    </>
  );
}
