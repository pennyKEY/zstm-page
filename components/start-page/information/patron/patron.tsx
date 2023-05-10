// imported libraries
import Link from "next/link";

// define Props
interface Props {
  patronRef: React.ForwardedRef<HTMLDivElement>;
}

// create Component
export default function Patron({ patronRef }: Props) {
  // return Component
  return (
    // article.patron with patronRef animation
    <article className="patron" ref={patronRef}>
      <h4 className="patron__title title">O patronie</h4>

      <p className="patron__description">
        Eugeniusz Felicjan Kwiatkowski (ur. 30 grudnia 1888 w Krakowie, zm. 22
        sierpnia 1974 w Krakowie) – polski wicepremier, minister skarbu,
        przemysłu i handlu II Rzeczypospolitej.Stworzył 4-letni plan
        inwestycyjny przewidujący rozbudowę infrastruktury, zwiększenie
        potencjału obronnego kraju, przygotowanie fundamentów dla przyszłej
        rozbudowy przemysłu, łącznie z aktywizacją Staropolskiego Okręgu
        Przemysłowego. Zainicjował budowę portu i miasta w Gdyni.
      </p>

      <Link href="/patron" className="patron__link link">
        Przeczytaj więcej!
      </Link>
    </article>
  );
}
