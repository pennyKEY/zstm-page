import Image from "next/image";
import Link from "next/link";

import useArticle from "@/hooks/about-school/useArticle";

import directionImg from "@/public/about-school/directions.jpg";

interface Props {
  directionsRef: React.ForwardedRef<HTMLTitleElement>;
}

export default function Directions({ directionsRef }: Props) {
  const { imageRef, titleRef, nrRef, countRef, specialRef } = useArticle(3);

  return (
    <article className="article" ref={directionsRef} id="directions_section">
      <p className="article__nr" ref={nrRef}>
        03 / kierunki
      </p>
      <h5 className="article__title" ref={titleRef}>
        O zespole szkół transportowo-mechatronicznych w Skarżysku-Kamiennej im.
        Inż. Eugeniusza kwiatkowskiego - {""}
        <span
          className="article__title article__title--special"
          ref={specialRef}
        >
          kierunki
        </span>
      </h5>
      <span className="article__count" ref={countRef}>
        03
      </span>
      <div className="article__container_img">
        <Image
          className="article__img"
          src={directionImg.src}
          alt={"zdjecie z jednym z naszych zawodów"}
          fill
        />
        <div className="article__cover" ref={imageRef}></div>
      </div>
      <Link className="article__link" href={"/kierunki"}>
        Więcej o kierunkach możesz zobaczyć pod tym linkiem
      </Link>
    </article>
  );
}
