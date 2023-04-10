import { useRef, useState } from "react";

export default function useBurger() {
  const burgerDivRef = useRef<HTMLDivElement>(null);
  const modalDivRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);

  const showMenuHandler = () => {
    if (!showModal) {
      burgerDivRef.current?.classList.add("active");
      modalDivRef.current?.classList.add("active");
      modalDivRef.current?.classList.remove("disactive");
      burgerDivRef.current?.classList.remove("disactive");
    } else {
      burgerDivRef.current?.classList.remove("active");
      modalDivRef.current?.classList.remove("active");
      modalDivRef.current?.classList.add("disactive");
      burgerDivRef.current?.classList.add("disactive");
    }

    setShowModal(!showModal);
  };

  return {
    burgerDivRef,
    showModal,
    modalDivRef,
    showMenuHandler,
  };
}
