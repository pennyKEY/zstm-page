import { useEffect, useRef } from "react";

export default function useScroll() {
  const rectangleDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollValue = window.scrollY;

      console.log(scrollValue);
      if (!rectangleDivRef || !rectangleDivRef.current) return null;

      rectangleDivRef.current.style.transform = `rotate(${
        45 + scrollValue / 5
      }deg)`;
    });
  });

  return {
    rectangleDivRef,
  };
}
