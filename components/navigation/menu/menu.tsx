// imported libraries
import Link from "next/link";
import dynamic from "next/dynamic";

// imported Component
const Logo = dynamic(() => import("./logo"));

// create Component
export default function Menu() {
  return (
    <nav className="menu">
      <Logo />
      <ul className="menu__list_items">
        <li className="menu__item">
          <Link
            className="menu__link"
            href="/"
            aria-label="this link move you to main page"
          >
            Główna strona
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
