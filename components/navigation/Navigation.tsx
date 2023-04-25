// import libraries
import Link from "next/link";
import { ForwardedRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// define Props
interface Props {
  changeActiveIndex: (grow: boolean) => void;
  navigationRef: ForwardedRef<HTMLMenuElement>;
}

// create Component
export default function Navigation({
  changeActiveIndex,
  navigationRef,
}: Props) {
  // return component
  return (
    // create nav.navigation with navigationRef to animation
    <nav className="navigation" ref={navigationRef}>
      <div className="navigation__arrows">
        {/* FontAwesomeIcon with onClickFunction to decrement index post */}
        <FontAwesomeIcon
          className="navigation__arrow"
          icon={faArrowLeft}
          onClick={() => changeActiveIndex(false)}
        />
        {/* FontAwesomeIcon with onClickFunction to increment index post */}
        <FontAwesomeIcon
          className="navigation__arrow"
          icon={faArrowRight}
          onClick={() => changeActiveIndex(true)}
        />
      </div>

      {/* Link to see all posts */}
      <Link href="/aktualnosci" className="link">
        Zobacz wszystkie posty!
      </Link>
    </nav>
  );
}
