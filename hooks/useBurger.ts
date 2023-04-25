// imported libraries
import { useRef, useState } from "react";

// create hook
export default function useBurger() {
  // useRef
  const burgerDivRef = useRef<HTMLDivElement>(null);
  const modalDivRef = useRef<HTMLDivElement>(null);

  // useState
  const [showModal, setShowModal] = useState(false);

  // function to show or closed menu onClick
  const showMenuHandler = () => {
    // change modal to opened
    if (!showModal) {
      burgerDivRef.current?.classList.add("active");
      modalDivRef.current?.classList.add("active");
      modalDivRef.current?.classList.remove("disactive");
      burgerDivRef.current?.classList.remove("disactive");
    }

    // change modal to closed
    else {
      burgerDivRef.current?.classList.remove("active");
      modalDivRef.current?.classList.remove("active");
      modalDivRef.current?.classList.add("disactive");
      burgerDivRef.current?.classList.add("disactive");
    }

    // change state of modal
    setShowModal(!showModal);
  };

  // return values
  return {
    burgerDivRef,
    showModal,
    modalDivRef,
    showMenuHandler,
  };
}
