// function to animate single element
export default function animateScrollElement(element: any) {
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
