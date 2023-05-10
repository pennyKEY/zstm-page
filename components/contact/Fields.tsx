// imported libraries
import { ForwardedRef } from "react";

// define Props
interface Props {
  nameRef: ForwardedRef<HTMLInputElement>;
  emailRef: ForwardedRef<HTMLInputElement>;
  textRef: ForwardedRef<HTMLTextAreaElement>;

  nameFieldRef: ForwardedRef<HTMLLabelElement>;
  emailFieldRef: ForwardedRef<HTMLLabelElement>;
  textFieldRef: ForwardedRef<HTMLLabelElement>;

  textActive: boolean;
  nameActive: boolean;
  emailActive: boolean;

  blurHandler: (input: string) => void;
  focusHandler: (input: string) => void;
}

// create Component
export default function Fields({
  nameRef,
  emailRef,
  textRef,

  nameFieldRef,
  emailFieldRef,
  textFieldRef,

  nameActive,
  emailActive,
  textActive,

  blurHandler,
  focusHandler,
}: Props) {
  // return Component
  return (
    <>
      {/* label name */}
      <label className="contact__field" htmlFor="name" ref={nameFieldRef}>
        <input
          className="contact__input"
          type="text"
          id="name"
          ref={nameRef}
          onBlur={() => blurHandler("NAME")}
          onFocus={() => focusHandler("NAME")}
        />
        <span
          className={`contact__field_name ${
            nameActive ? "contact__field_name--active" : ""
          }`}
        >
          Imię i nazwisko
        </span>
      </label>

      {/* label email */}
      <label className="contact__field" htmlFor="email" ref={emailFieldRef}>
        <input
          className="contact__input"
          type="email"
          id="email"
          ref={emailRef}
          onBlur={() => blurHandler("EMAIL")}
          onFocus={() => focusHandler("EMAIL")}
        />
        <span
          className={`contact__field_name ${
            emailActive ? "contact__field_name--active" : ""
          }`}
        >
          E-mail
        </span>
      </label>

      {/* label text */}
      <label
        className={`contact__field contact__field--large ${
          textActive ? "contact__field--active" : ""
        }`}
        htmlFor="text"
        ref={textFieldRef}
      >
        <textarea
          className="contact__input"
          id="text"
          ref={textRef}
          onBlur={() => blurHandler("TEXT")}
          onFocus={() => focusHandler("TEXT")}
        ></textarea>
        <span
          className={`contact__field_name ${
            textActive ? "contact__field_name--active" : ""
          }`}
        >
          Treść twojej wiadomości
        </span>
      </label>
    </>
  );
}
