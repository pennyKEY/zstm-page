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
    <nav className="navigation_school" ref={navRef}>
      <ul className="navigation_school__list_items">
        <li
          className="navigation_school__item navigation_school__item--active"
          ref={linkHistoryRef}
        >
          <Link href="#history_section" className="navigation_school__link">
            historia
          </Link>
        </li>
        <li className="navigation_school__item" ref={linkAchievementsRef}>
          <Link
            href="#achievements_section"
            className="navigation_school__link"
          >
            osiągnięcia
          </Link>
        </li>
        <li className="navigation_school__item" ref={linkDirectionsRef}>
          <Link href="#directions_section" className="navigation_school__link">
            kierunki
          </Link>
        </li>
        <li className="navigation_school__item" ref={linkContactRef}>
          <Link href="#contact_section" className="navigation_school__link">
            kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
