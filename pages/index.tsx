// this page is display on url: /

// imported libraries
import Head from "next/head";
import dynamic from "next/dynamic";

// imported Components
const Header = dynamic(() => import("@/components/pages/start/Header"));
const News = dynamic(() => import("@/components/pages/start/News"));
const Information = dynamic(
  () => import("@/components/pages/start/Information")
);
const Movie = dynamic(() => import("@/components/pages/start/Movie"));
const Partnership = dynamic(
  () => import("@/components/pages/start/Partnership")
);
const Contact = dynamic(() => import("@/components/pages/start/Contact"));

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
      <Information />
      <Movie />
      <Partnership />
      <Contact />
    </>
  );
}
