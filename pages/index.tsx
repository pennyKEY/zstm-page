// this page is display on url: /

// imported libraries
import Head from "next/head";

// imported Components
import Header from "@/components/pages/start/Header";
import News from "@/components/pages/start/News";

// create Page
export default function Home() {
  // return page
  return (
    <>
      {/* set Title */}
      <Head>
        <title>Zespół Szkół Transportowo Mechatronicznych</title>
      </Head>
      {/* show Components to this page */}
      <Header />
      <News />
    </>
  );
}
