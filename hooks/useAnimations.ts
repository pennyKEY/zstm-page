import { useEffect, useRef, forwardRef } from "react";

export default function useAnimations() {
  const titleNewsRef = useRef<HTMLHeadingElement>(null);
  const descriptionNewsRef = useRef<HTMLParagraphElement>(null);

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
    window.addEventListener("scroll", () => {
      const scrollValue = window.scrollY;

      animateScrollElement(scrollValue, titleNewsRef);
      animateScrollElement(scrollValue, descriptionNewsRef);
    });
  });

  return {
    titleNewsRef,
    descriptionNewsRef,
  };
}
