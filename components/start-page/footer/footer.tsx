// imported libraries
import dynamic from "next/dynamic";

// imported components
const Contact = dynamic(() => import("./contact/contact"));

interface Props {
  contactRef: React.ForwardedRef<HTMLFormElement>;
}

export default function Footer({ contactRef }: Props) {
  return (
    <footer className="footer" id="contact_section">
      <Contact contactRef={contactRef} />
      <div className="footer__content">
        <p className="footer__text">
          Wszelkie prawa zastrzeżone &copy;2023 ZSTM | Twórcą strony jest uczeń
          szkoły Paweł Kaczmarczyk
        </p>
      </div>
    </footer>
  );
}
