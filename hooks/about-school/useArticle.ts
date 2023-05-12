import { useRef, useEffect } from "react";

import animateScrollElement from "@/functions/animateScrollElement";
import animateScrollImg from "@/functions/animateScrollImg";

interface Props {
  number: number;
}

export default function useHistory(number: number) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const nrRef = useRef<HTMLParagraphElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const specialRef = useRef<HTMLSpanElement>(null);

  function scrollHandler() {
    animateScrollElement(titleRef);
    animateScrollElement(textRef);
    animateScrollElement(nrRef);
    animateScrollElement(countRef);
    animateScrollElement(specialRef);
    animateScrollImg(imageRef, number);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return {
    titleRef,
    imageRef,
    textRef,
    nrRef,
    countRef,
    specialRef,
  };
}
