// imported libraries
import { useRef, useState, useEffect } from "react";

// imported functions
import animateScrollElement from "@/functions/animateScrollElement";

// create own hook
export default function useContact() {
  // useRef
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const nameFieldRef = useRef<HTMLLabelElement>(null);
  const emailFieldRef = useRef<HTMLLabelElement>(null);
  const textFieldRef = useRef<HTMLLabelElement>(null);

  // useState
  const [nameActive, setNameActive] = useState<boolean>(false);
  const [emailActive, setEmailActive] = useState<boolean>(false);
  const [textActive, setTextActive] = useState<boolean>(false);

  const inputNames = ["NAME", "EMAIL", "TEXT"];

  function focusHandler(input: string) {
    if (input === inputNames[0]) setNameActive(true);
    else if (input === inputNames[1]) setEmailActive(true);
    else setTextActive(true);
  }

  function blurHandler(input: string) {
    if (input === inputNames[0]) {
      if (nameRef.current?.value!.length === 0) setNameActive(false);
    } else if (input === inputNames[1]) {
      if (emailRef.current?.value!.length === 0) setEmailActive(false);
    } else {
      if (textRef.current?.value!.length === 0) setTextActive(false);
    }
  }

  function scrollHandler() {
    animateScrollElement(nameFieldRef);
    animateScrollElement(emailFieldRef);
    animateScrollElement(textFieldRef);
    animateScrollElement(titleRef);
    animateScrollElement(btnRef);

    const scrollValue = window.scrollY;
    const heightAllPage = document.body.scrollHeight - window.innerHeight;

    if (!nameFieldRef.current || !nameFieldRef) return;
    if (!emailFieldRef.current || !emailFieldRef) return;
    if (!textFieldRef.current || !textFieldRef) return;
    if (!btnRef.current || !btnRef) return;

    if (scrollValue === heightAllPage) {
      nameFieldRef.current.style.opacity = "1";
      nameFieldRef.current.style.transform = "none";

      emailFieldRef.current.style.opacity = "1";
      emailFieldRef.current.style.transform = "none";

      textFieldRef.current.style.opacity = "1";
      textFieldRef.current.style.transform = "none";

      btnRef.current.style.opacity = "1";
      btnRef.current.style.transform = "none";
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  // return own hook
  return {
    // useRef
    nameRef,
    emailRef,
    textRef,
    titleRef,
    btnRef,
    emailFieldRef,
    nameFieldRef,
    textFieldRef,
    // useState
    nameActive,
    emailActive,
    textActive,
    // method
    focusHandler,
    blurHandler,
  };
}
