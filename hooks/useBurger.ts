import { useState, useRef } from "react";

export default function useBurger() {
  const [showMenu, setShowMenu] = useState(true);
  const burgerDivRef = useRef<HTMLDivElement>(null);

  const showMenuHandler = () => {
    if (showMenu) {
      burgerDivRef.current?.classList.add("active");
      burgerDivRef.current?.classList.remove("disactive");
    } else {
      burgerDivRef.current?.classList.remove("active");
      burgerDivRef.current?.classList.add("disactive");
    }

    setShowMenu(!showMenu);
  };

  return {
    showMenu,
    burgerDivRef,
    showMenuHandler,
  };
}
