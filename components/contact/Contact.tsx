// imported own hook
import useContact from "@/hooks/useContact";

// create Component
export default function Contact() {
  // use own hook
  const {
    // useRef
    emailRef,
    nameRef,
    textRef,
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
    <footer className="footer">
      <form className="contact" method="POST">
        <h6 className="contact__title">Kontakt</h6>
        <label className="contact__field" htmlFor="name">
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
        <label className="contact__field" htmlFor="email">
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
        <label className="contact__field contact__field--large" htmlFor="text">
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
        <button type="submit" className="contact__btn btn">
          Wyślij!
        </button>
      </form>
    </footer>
  );
}
