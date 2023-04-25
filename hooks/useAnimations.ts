// imported libraries
import { useEffect, useRef } from "react";

// create hook
export default function useAnimations() {
  // useRef(hook)
  const titleNewsRef = useRef<HTMLHeadingElement>(null);
  const descriptionNewsRef = useRef<HTMLParagraphElement>(null);
  const postsDivRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLMenuElement>(null);

  // function on scroll
  function scrollEvent() {
    // get scroll value to animate elements
    const scrollValue = window.scrollY;

    // add listener to animate this elements on scroll
    animateScrollElement(scrollValue, titleNewsRef);
    animateScrollElement(scrollValue, descriptionNewsRef);
    animateScrollElement(scrollValue, postsDivRef);
    animateScrollElement(scrollValue, navigationRef);
  }

  // function to animate single element
  function animateScrollElement(scroll: number, element: any) {
    // check why number is true
    if (!element || !element.current) return null;

    // get offsetTop animated element
    const offsetTop = element.current.getBoundingClientRect().top;

    // check why can display animated element
    if (scroll > offsetTop) {
      element.current.style.transform = "none";
      element.current.style.opacity = "1";
    } else {
      element.current.style.transform = "translateY(10vh)";
      element.current.style.opacity = "0";
    }
  }

  // add listener on scroll
  useEffect(() => {
    // mount
    window.addEventListener("scroll", scrollEvent);

    // unmount
    return () => window.removeEventListener("scroll", scrollEvent);
  }, [scrollEvent]);

  // return values from hook
  return {
    titleNewsRef,
    descriptionNewsRef,
    postsDivRef,
    navigationRef,
  };
}
