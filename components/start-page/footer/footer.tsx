// imported libraries
import dynamic from "next/dynamic";

// imported components
const Contact = dynamic(() => import("./contact/contact"));

export default function Footer() {
  return (
    <footer className="footer">
      <Contact />
      <div className="footer__content">
        <p className="footer__text">
          Wszelkie prawa zastrzeżone &copy;2023 ZSTM | Twórcą strony jest uczeń
          szkoły Paweł Kaczmarczyk
        </p>
      </div>
    </footer>
  );
}
