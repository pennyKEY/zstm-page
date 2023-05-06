// imported libraries
import { useRef, useState } from "react";

// create own hook
export default function useContact() {
  // useRef
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

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

  // return own hook
  return {
    // useRef
    nameRef,
    emailRef,
    textRef,
    // useState
    nameActive,
    emailActive,
    textActive,
    // methodd
    focusHandler,
    blurHandler,
  };
}
