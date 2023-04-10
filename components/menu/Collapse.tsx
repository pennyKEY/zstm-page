import Burger from "./Burger";
import logo from "../../public/logo.png";

export default function Collapse() {
  return (
    <nav className="collapse">
      <div className="logo">
        <img className="logo__img" src={logo.src} alt="logo ZSTMU" />
      </div>
      <Burger />
    </nav>
  );
}
