// imported own hooks
import useBurger from "@/hooks/navigation/useBurger";

// create Component
export default function Burger() {
  // use hook useBurger
  const { burgerDivRef, showMenuHandler } = useBurger();

  // return component
  return (
    // burger with onClick function to show collapse and burgerDivRef
    <div onClick={showMenuHandler} className="burger" ref={burgerDivRef}>
      <div className="burger__bar burger__bar_first"></div>
      <div className="burger__bar burger__bar_second"></div>
      <div className="burger__bar burger__bar_third"></div>
      <div className="burger__bar burger__bar_fourth"></div>
      <div className="burger__bar burger__bar_fifth"></div>
    </div>
  );
}
