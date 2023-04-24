import Link from "next/link";
import { ForwardedRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  changeActiveIndex: (grow: boolean) => void;
  navigationRef: ForwardedRef<HTMLMenuElement>;
}

export default function Navigation({
  changeActiveIndex,
  navigationRef,
}: Props) {
  return (
    <nav className="navigation" ref={navigationRef}>
      <div className="navigation__arrows">
        <FontAwesomeIcon
          className="navigation__arrow"
          icon={faArrowLeft}
          onClick={() => changeActiveIndex(false)}
        />
        <FontAwesomeIcon
          className="navigation__arrow"
          icon={faArrowRight}
          onClick={() => changeActiveIndex(true)}
        />
      </div>
      <Link href="/aktualnosci" className="navigation__link">
        Zobacz wszystkie posty!
      </Link>
    </nav>
  );
}
