import { useRef, useEffect } from "react";

import animateScrollElement from "@/functions/animateScrollElement";

export default function useNavigation() {
  const navRef = useRef<HTMLOptionElement>(null);

  const historyRef = useRef<HTMLTitleElement>(null);
  const achievementsRef = useRef<HTMLTitleElement>(null);
  const directionsRef = useRef<HTMLTitleElement>(null);
  const contactRef = useRef<HTMLFormElement>(null);

  const linkHistoryRef = useRef<HTMLLIElement>(null);
  const linkAchievementsRef = useRef<HTMLLIElement>(null);
  const linkDirectionsRef = useRef<HTMLLIElement>(null);
  const linkContactRef = useRef<HTMLLIElement>(null);

  function clearLinks() {
    if (!linkHistoryRef || !linkHistoryRef.current) return;
    if (!linkAchievementsRef || !linkAchievementsRef.current) return;
    if (!linkDirectionsRef || !linkDirectionsRef.current) return;
    if (!linkContactRef || !linkContactRef.current) return;

    linkHistoryRef.current.classList.remove("navigation_school__item--active");
    linkAchievementsRef.current.classList.remove(
      "navigation_school__item--active"
    );
    linkDirectionsRef.current.classList.remove(
      "navigation_school__item--active"
    );
    linkContactRef.current.classList.remove("navigation_school__item--active");
  }

  function scrollHandler() {
    clearLinks();
    if (!navRef || !navRef.current) return;

    if (!historyRef || !historyRef.current) return;
    if (!achievementsRef || !achievementsRef.current) return;
    if (!directionsRef || !directionsRef.current) return;
    if (!contactRef || !contactRef.current) return;

    if (!linkHistoryRef || !linkHistoryRef.current) return;
    if (!linkAchievementsRef || !linkAchievementsRef.current) return;
    if (!linkDirectionsRef || !linkDirectionsRef.current) return;
    if (!linkContactRef || !linkContactRef.current) return;

    animateScrollElement(navRef);

    const offsetHistory = historyRef.current.offsetTop - window.innerHeight / 3;
    const offsetAchievements =
      achievementsRef.current.offsetTop - window.innerHeight / 3;
    const offsetDirections =
      directionsRef.current.offsetTop - window.innerHeight / 3;
    const offsetContact = contactRef.current.offsetTop - window.innerHeight / 3;

    const offsetNav = historyRef.current.offsetTop;

    if (window.scrollY >= offsetNav) {
      navRef.current.classList.add("fixed");
    }
    if (window.scrollY < offsetNav) {
      navRef.current.classList.remove("fixed");
    }
    if (window.scrollY === 0) {
      navRef.current.classList.remove("fixed");
    }

    if (
      window.scrollY + window.innerHeight / 3 >= offsetContact ||
      window.scrollY === document.body.scrollHeight - window.innerHeight
    ) {
      linkContactRef.current.classList.add("navigation_school__item--active");
    } else if (window.scrollY >= offsetDirections) {
      linkDirectionsRef.current.classList.add(
        "navigation_school__item--active"
      );
    } else if (window.scrollY >= offsetAchievements) {
      linkAchievementsRef.current.classList.add(
        "navigation_school__item--active"
      );
    } else if (window.scrollY >= offsetHistory) {
      linkHistoryRef.current.classList.add("navigation_school__item--active");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return {
    navRef,
    historyRef,
    achievementsRef,
    directionsRef,
    contactRef,

    linkHistoryRef,
    linkAchievementsRef,
    linkDirectionsRef,
    linkContactRef,
  };
}
