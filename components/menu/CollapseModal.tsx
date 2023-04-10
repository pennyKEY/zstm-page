import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  modalDivRef: React.ForwardedRef<HTMLDivElement>;
}

export default function CollapseModal({ modalDivRef }: Props) {
  const router = useRouter();

  return (
    <header className="modal" ref={modalDivRef}>
      <ul className="modal__list_items">
        <li className="modal__item">
          <Link
            className={`modal__link ${router.pathname === "/" && "active"}`}
            href="/"
          >
            Start
          </Link>
        </li>
        <li className="modal__item">
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
          <Link
            className={`modal__link ${router.pathname === "" && "active"}`}
            href="/"
          >
            Dziennik Vulcan
          </Link>
        </li>
        <li className="modal__item">
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
