// imported Components
import CollapseModal from "./CollapseModal";

// imported own hooks
import useBurger from "@/hooks/useBurger";

// create Component
export default function Burger() {
  // use hook useBurger
  const { burgerDivRef, showMenuHandler, modalDivRef } = useBurger();

  // return Component
  return (
    <>
      {/* show Collapse modal Component with modalDivRef to animation */}
      <CollapseModal modalDivRef={modalDivRef} />
      {/* div.burger with onClick function which must toggle menu and have burgerDivRef to animation */}
      <div onClick={showMenuHandler} className="burger" ref={burgerDivRef}>
        <div className="burger__bar burger__bar_first"></div>
        <div className="burger__bar burger__bar_second"></div>
        <div className="burger__bar burger__bar_third"></div>
        <div className="burger__bar burger__bar_fourth"></div>
        <div className="burger__bar burger__bar_fifth"></div>
      </div>
    </>
  );
}
