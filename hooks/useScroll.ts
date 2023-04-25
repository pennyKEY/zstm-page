// imported libraries
import { useEffect, useRef } from "react";

// create hook
export default function useScroll() {
  // useRef
  const rectangleDivRef = useRef<HTMLDivElement>(null);

  // parameters rotate
  const rotateDeg = 45;
  const slowedScroll = 5;

  // function onScroll
  function rotateRectangle() {
    // get scroll value
    const scrollValue = window.scrollY;

    // check why rectangleDivRef exist
    if (!rectangleDivRef || !rectangleDivRef.current) return null;

    // create transform style with variables
    const transformStyle = `rotate(${
      rotateDeg + scrollValue / slowedScroll
    }deg)`;

    // rotate that element
    rectangleDivRef.current.style.transform = transformStyle;
  }

  // add listener to scroll
  useEffect(() => {
    // mount
    window.addEventListener("scroll", rotateRectangle);

    // unmount
    return () => {
      window.removeEventListener("scroll", rotateRectangle);
    };
  });

  // return values
  return {
    rectangleDivRef,
  };
}
