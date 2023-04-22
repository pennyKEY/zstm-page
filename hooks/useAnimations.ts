import { useEffect, useRef, forwardRef } from "react";

export default function useAnimations() {
  const titleNewsRef = useRef<HTMLHeadingElement>(null);
  const descriptionNewsRef = useRef<HTMLParagraphElement>(null);
  const postsDivRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLMenuElement>(null);

  function scrollEvent() {
    const scrollValue = window.scrollY;

    animateScrollElement(scrollValue, titleNewsRef);
    animateScrollElement(scrollValue, descriptionNewsRef);
    animateScrollElement(scrollValue, postsDivRef);
    animateScrollElement(scrollValue, navigationRef);
  }

  function animateScrollElement(scroll: number, element: any) {
    if (!element || !element.current) return null;

    const offsetTop = element.current.getBoundingClientRect().top;

    if (scroll > offsetTop) {
      element.current.style.transform = "none";
      element.current.style.opacity = "1";
    } else {
      element.current.style.transform = "translateY(10vh)";
      element.current.style.opacity = "0";
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    return () => window.removeEventListener("scroll", scrollEvent);
  }, [scrollEvent]);

  return {
    titleNewsRef,
    descriptionNewsRef,
    postsDivRef,
    navigationRef,
  };
}
