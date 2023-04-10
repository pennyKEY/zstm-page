import Link from "next/link";

import logo from "../../public/logo.png";
import "./menu.scss";

export default function Menu() {
  return (
    <nav className="menu">
      <div className="logo">
        <img className="logo__img" src={logo.src} alt="logo ZSTMU" />
      </div>
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