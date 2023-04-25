// imported libraries
import { useEffect, useRef } from "react";

// create hook
export default function useAnimations() {
  // useRef(hook)
  const titleNewsRef = useRef<HTMLHeadingElement>(null);
  const descriptionNewsRef = useRef<HTMLParagraphElement>(null);
  const postsDivRef = useRef<HTMLDivElement>(null);
  const schoolRef = useRef<HTMLDivElement>(null);
  const patronRef = useRef<HTMLDivElement>(null);
  const patronImgRef = useRef<HTMLDivElement>(null);

  // function on scroll
  function scrollEvent() {
    // add listener to animate this elements on scroll
    animateScrollElement(titleNewsRef);
    animateScrollElement(descriptionNewsRef);
    animateScrollElement(postsDivRef);
    animateScrollElement(schoolRef);
    animateScrollElement(patronRef);
    animateScrollElement(patronImgRef);
  }

  // function to animate single element
  function animateScrollElement(element: any) {
    // check why number is true
    if (!element || !element.current) return null;

    // get offsetTop animated element
    const offsetTop = element.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight / 1.2;

    // get scroll value to animate elements
    const scrollValue = window.scrollY;

    // check why can display animated element
    if (offsetTop < windowHeight) {
      element.current.style.transform = "none";
      element.current.style.opacity = "1";
    } else {
      element.current.style.transform = "translateY(10vh)";
      element.current.style.opacity = "0";
    }

    if (scrollValue === 0) {
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
    patronRef,
    schoolRef,
    patronImgRef,
  };
}
