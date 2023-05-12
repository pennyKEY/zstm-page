export default function animateScrollImg(element: any, count: number) {
  // check why number is true
  if (!element || !element.current) return null;

  // get offsetTop animated element
  const offsetTop = element.current.getBoundingClientRect().top;
  const windowHeight = window.innerHeight / 1.5;

  // get scroll value to animate elements
  const scrollValue = window.scrollY;

  // check why can display animated element
  if (offsetTop < windowHeight) {
    if (count % 2 === 0) {
      element.current.style.transform = "translateX(150%)";
    } else {
      element.current.style.transform = "translateX(-150%)";
    }
  } else {
    element.current.style.transform = "translateX(0)";
  }

  if (scrollValue === 0) {
    element.current.style.transform = "translateX(0)";
  }
}
