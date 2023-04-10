import useBurger from "@/hooks/useBurger";

export default function Burger() {
  const { burgerDivRef, showMenuHandler } = useBurger();

  return (
    <div onClick={showMenuHandler} className="burger" ref={burgerDivRef}>
      <div className="burger__bar burger__bar_first"></div>
      <div className="burger__bar burger__bar_second"></div>
      <div className="burger__bar burger__bar_third"></div>
      <div className="burger__bar burger__bar_fourth"></div>
      <div className="burger__bar burger__bar_fifth"></div>
    </div>
  );
}
