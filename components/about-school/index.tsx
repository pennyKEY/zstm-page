// imported libraries
import Head from "next/head";

// imported components
import Header from "./header/header";
import History from "./history/history";
import Achievements from "./achievements/achievements";
import Directions from "./directions/directions";
import Footer from "../start-page/footer/footer";
import Navigation from "./navigation/navigation";

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
