import Burger from "./Burger";
import useBurger from "@/hooks/useBurger";
import logo from "../../public/logo.png";

export default function Collapse() {
  // const { showMenu } = useBurger();

  // if (showMenu) {
  //   return (
  //     <header>
  //       <Burger />
  //     </header>
  //   );
  // }

  return (
    <nav className="collapse">
      <div className="logo">
        <img className="logo__img" src={logo.src} alt="logo ZSTMU" />
      </div>
      <Burger />
    </nav>
  );
}
