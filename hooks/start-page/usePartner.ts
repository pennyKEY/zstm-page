// imported libraries
import { useRef, useEffect } from "react";

// imported functions
import animateScrollElement from "../../functions/animateScrollElement";

// create own hook
export default function usePartner() {
  // useRef
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const specialRef = useRef<HTMLSpanElement>(null);
  const zamelRef = useRef<HTMLImageElement>(null);
  const meskoRef = useRef<HTMLImageElement>(null);
  const plkRef = useRef<HTMLImageElement>(null);
  const iccRef = useRef<HTMLImageElement>(null);
  const zwcadRef = useRef<HTMLImageElement>(null);
  const containerImg = useRef<HTMLDivElement>(null);

  // animate imgs if window width is higher than 1099px
  function animateImgs(imgs: any) {
    // get offsetTop animated element
    const offsetTop = containerImg.current?.getBoundingClientRect().top;
    const windowHeight = window.innerHeight / 1.2;

    // get scroll value to animate elements
    const scrollValue = window.scrollY;

    // if offsetTop is null return function
    if (!offsetTop) return;

    // check why can display animated element
    if (offsetTop < windowHeight) {
      // every img iterate
      imgs.forEach((img: any) => {
        img.current.style.transform = "none";
        img.current.style.opacity = "1";
      });
    } else {
      // every img iterate
      imgs.forEach((img: any) => {
        img.current.style.transform = "translateY(10vh)";
        img.current.style.opacity = "0";
      });
    }

    if (scrollValue === 0) {
      // every img iterate
      imgs.forEach((img: any) => {
        img.current.style.transform = "translateY(10vh)";
        img.current.style.opacity = "0";
      });
    }
  }

  // function on scroll
  function scrollHandler() {
    // animate element
    animateScrollElement(titleRef);
    animateScrollElement(descriptionRef);
    animateScrollElement(specialRef);

    // get windowWidth
    const windowWidth = window.innerWidth;

    // if windowWidth is higher than 1099
    if (windowWidth > 1099) {
      // animate imgs from height container
      animateImgs([meskoRef, zamelRef, zwcadRef, plkRef, iccRef]);
    } else {
      // animate imgs from his own height
      animateScrollElement(zamelRef);
      animateScrollElement(meskoRef);
      animateScrollElement(plkRef);
      animateScrollElement(iccRef);
      animateScrollElement(zwcadRef);
    }
  }

  // mount
  useEffect(() => {
    // listener on scroll
    window.addEventListener("scroll", scrollHandler);

    // unmount
    return () => {
      // remove listener on scroll
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  // return values
  return {
    titleRef,
    descriptionRef,
    zamelRef,
    meskoRef,
    plkRef,
    iccRef,
    zwcadRef,
    specialRef,
    containerImg,
  };
}
