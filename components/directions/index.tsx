import Head from "next/head";

import Header from "./header/header";

export default function DirectionsPage() {
  return (
    <>
      {/* set Title */}
      <Head>
        <title>Kierunki</title>
      </Head>
      {/* show Components to this page */}
      <Header />
    </>
  );
}
