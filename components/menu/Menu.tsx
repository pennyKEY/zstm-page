// imported libraries
import Link from "next/link";

// imported Component
import Logo from "./Logo";

// create Component
export default function Menu() {
  return (
    <nav className="menu">
      <Logo />
      <ul className="menu__list_items">
        <li className="menu__item">
          <Link className="menu__link" href="/">
            Start
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" href="/aktualnosci">
            Aktualności
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" href="/dziennik">
            Dziennik Vulcan
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" href="/o-szkole">
            O szkole
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" href="/kontakt">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
