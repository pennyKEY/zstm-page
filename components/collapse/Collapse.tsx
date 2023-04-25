// imported Components
import Burger from "./Burger";
import Logo from "../menu/Logo";

// create Component
export default function Collapse() {
  // return component
  return (
    <nav className="collapse">
      {/* show Logo Component */}
      <Logo />
      {/* show Burger Component */}
      <Burger />
    </nav>
  );
}
