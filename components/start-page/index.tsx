// imported libraries
import Head from "next/head";
import dynamic from "next/dynamic";

// imported Components
const Header = dynamic(() => import("./header/header"));
const Partnership = dynamic(() => import("./partnership/partnership"));
const News = dynamic(() => import("./news/news"));
const Information = dynamic(() => import("./information/information"));
const Movie = dynamic(() => import("./movie/movie"));
const Footer = dynamic(() => import("./footer/footer"));

export default function Index() {
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
      <Footer />
    </>
  );
}
