// imported Components
import Btn from "./btn";
import Fields from "./fields";

// imported own hook
import useContact from "@/hooks/start-page/useContact";

interface Props {
  contactRef: React.ForwardedRef<HTMLFormElement>;
}

// create Component
export default function Contact({ contactRef }: Props) {
  // use own hook
  const {
    // useRef
    emailRef,
    nameRef,
    textRef,
    btnRef,
    titleRef,
    emailFieldRef,
    nameFieldRef,
    textFieldRef,
    // useState
    emailActive,
    nameActive,
    textActive,
    // methods
    blurHandler,
    focusHandler,
  } = useContact();

  // return Component
  return (
    <form className="contact" method="POST" ref={contactRef}>
      <h6 className="contact__title" ref={titleRef}>
        Kontakt
      </h6>

      <Fields
        emailRef={emailRef}
        nameRef={nameRef}
        textRef={textRef}
        emailFieldRef={emailFieldRef}
        nameFieldRef={nameFieldRef}
        textFieldRef={textFieldRef}
        emailActive={emailActive}
        nameActive={nameActive}
        textActive={textActive}
        blurHandler={blurHandler}
        focusHandler={focusHandler}
      />

      <Btn btnRef={btnRef} />
    </form>
  );
}
