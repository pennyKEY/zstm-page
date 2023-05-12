import Link from "next/link";

interface Props {
  navRef: React.ForwardedRef<HTMLOptionElement>;
  linkHistoryRef: React.ForwardedRef<HTMLLIElement>;
  linkAchievementsRef: React.ForwardedRef<HTMLLIElement>;
  linkDirectionsRef: React.ForwardedRef<HTMLLIElement>;
  linkContactRef: React.ForwardedRef<HTMLLIElement>;
}

export default function Navigation({
  navRef,
  linkHistoryRef,
  linkAchievementsRef,
  linkDirectionsRef,
  linkContactRef,
}: Props) {
  return (
    <nav className="navigation" ref={navRef}>
      <ul className="navigation__list_items">
        <li
          className="navigation__item navigation__item--active"
          ref={linkHistoryRef}
        >
          <Link href="#history_section" className="navigation__link">
            historia
          </Link>
        </li>
        <li className="navigation__item" ref={linkAchievementsRef}>
          <Link href="#achievements_section" className="navigation__link">
            osiągnięcia
          </Link>
        </li>
        <li className="navigation__item" ref={linkDirectionsRef}>
          <Link href="#directions_section" className="navigation__link">
            kierunki
          </Link>
        </li>
        <li className="navigation__item" ref={linkContactRef}>
          <Link href="#contact_section" className="navigation__link">
            kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
