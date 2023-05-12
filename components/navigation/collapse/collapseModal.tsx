// imported libraries
import Link from "next/link";
import { useRouter } from "next/router";

// define props
interface Props {
  modalDivRef: React.ForwardedRef<HTMLDivElement>;
}

// create Component
export default function CollapseModal({ modalDivRef }: Props) {
  // router
  const router = useRouter();

  // return Component
  return (
    // header.modal with modalDivRef to animation
    <header className="modal" ref={modalDivRef}>
      <ul className="modal__list_items">
        <li className="modal__item">
          {/* check why actual path is equal "/" */}
          <Link
            className={`modal__link ${router.pathname === "/" && "active"}`}
            href="/"
          >
            Główna strona
          </Link>
        </li>

        <li className="modal__item">
          {/* check why actual path is equal "/aktualnosci" */}
          <Link
            className={`modal__link ${
              router.pathname === "/aktualnosci" && "active"
            }`}
            href="/aktualnosci"
          >
            Aktualności
          </Link>
        </li>

        <li className="modal__item">
          {/* check why actual path is equal "/" */}
          <Link
            className={`modal__link ${router.pathname === "" && "active"}`}
            href="/"
          >
            Dziennik Vulcan
          </Link>
        </li>

        <li className="modal__item">
          {/* check why actual path is equal "/o-szkole" */}
          <Link
            className={`modal__link ${
              router.pathname === "/o-szkole" && "active"
            }`}
            href="/o-szkole"
          >
            O szkole
          </Link>
        </li>

        <li className="modal__item">
          {/* check why actual path is equal "/kontakt" */}
          <Link
            className={`modal__link ${
              router.pathname === "/kontakt" && "active"
            }`}
            href="/kontakt"
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </header>
  );
}
