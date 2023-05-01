// imported libraries
import { useEffect, useRef } from "react";

// imported functions
import animateScrollElement from "../functions/animateScrollElement";

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
