import useScroll from "@/hooks/useScroll";

export default function Rectangle() {
  const { rectangleDivRef } = useScroll();

  return <div className="rectangle" ref={rectangleDivRef}></div>;
}
