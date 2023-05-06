// imported libraries
import dynamic from "next/dynamic";

// imported Components
const Burger = dynamic(() => import("./Burger"));
const Logo = dynamic(() => import("../menu/Logo"));

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
