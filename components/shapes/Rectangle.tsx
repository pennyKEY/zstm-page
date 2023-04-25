// imported own hooks
import useScroll from "@/hooks/useScroll";

// create Component
export default function Rectangle() {
  // use hooks with animations onScroll
  const { rectangleDivRef } = useScroll();

  // create big rectangle with rotate translate on scroll
  return <div className="rectangle" ref={rectangleDivRef}></div>;
}
