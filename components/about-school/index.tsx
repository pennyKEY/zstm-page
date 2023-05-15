// imported libraries
import Head from "next/head";
import dynamic from "next/dynamic";

// imported components
const Header = dynamic(() => import("./header/header"));
const History = dynamic(() => import("./history/history"));
const Achievements = dynamic(() => import("./achievements/achievements"));
const Directions = dynamic(() => import("./directions/directions"));
const Footer = dynamic(() => import("../start-page/footer/footer"));
const Navigation = dynamic(() => import("./navigation/navigation"));

import useScroll from "@/hooks/start-page/useScroll";
import useNavigation from "@/hooks/about-school/useNavigation";

export default function AboutSchoolPage() {
  const { rectangleDivRef } = useScroll();
  const {
    navRef,
    historyRef,
    achievementsRef,
    directionsRef,
    contactRef,
    linkHistoryRef,
    linkAchievementsRef,
    linkDirectionsRef,
    linkContactRef,
  } = useNavigation();

  return (
    <>
      {/* set Title */}
      <Head>
        <title>O szkole</title>
      </Head>
      {/* show Components to this page */}
      <Header />
      <Navigation
        navRef={navRef}
        linkHistoryRef={linkHistoryRef}
        linkAchievementsRef={linkAchievementsRef}
        linkDirectionsRef={linkDirectionsRef}
        linkContactRef={linkContactRef}
      />
      <div className="rectangle_school" ref={rectangleDivRef}></div>
      <section className="section">
        <History historyRef={historyRef} />
        <Achievements achievementsRef={achievementsRef} />
        <Directions directionsRef={directionsRef} />
      </section>
      <Footer contactRef={contactRef} />
    </>
  );
}
