// imported libraries
import Link from "next/link";

// define Props
interface Props {
  schoolRef: React.ForwardedRef<HTMLDivElement>;
}

// create component
export default function School({ schoolRef }: Props) {
  // render component
  return (
    // article.school with schoolRef to animation
    <article className="school" ref={schoolRef}>
      <h4 className="school__title title">O szkole</h4>

      <p className="school__description">
        Zespół Szkół Transportowo-Mechatronicznych w Skarżysku-Kamiennej to nowa
        placówka powstała z połączenia dwóch szkół: Technicznych Zakładów
        Naukowych oraz Zespołu Szkół Ponadgimnazjalnych nr. 4 Siedziba szkoły
        mieści się przy ul. Legionów 119 w budynku dawnego TZN.Choć placówka ta
        została powołana do życia w roku szkolnym 2009/2010 to i tak pozostaje
        szkołą z wieloma tradycjami przekazywanymi przez lata uczniom oraz
        absolwentom obydwu połączonych placówek.
      </p>

      <Link href="/o-szkole" className="school__link link">
        Przeczytaj więcej!
      </Link>
    </article>
  );
}
