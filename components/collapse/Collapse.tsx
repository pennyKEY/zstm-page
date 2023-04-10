import Burger from "./Burger";
import Logo from "../menu/Logo";

export default function Collapse() {
  return (
    <nav className="collapse">
      <Logo />
      <Burger />
    </nav>
  );
}
