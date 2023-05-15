import Image from "next/image";

import useArticle from "@/hooks/about-school/useArticle";

import historyImg from "@/public/about-school/history.jpg";

interface Props {
  historyRef: React.ForwardedRef<HTMLTitleElement>;
}

export default function History({ historyRef }: Props) {
  const { countRef, imageRef, nrRef, textRef, titleRef, specialRef } =
    useArticle(1);

  return (
    <article className="article" ref={historyRef} id="history_section">
      <p className="article__nr" ref={nrRef}>
        01 / historia
      </p>
      <h5 className="article__title" ref={titleRef}>
        O zespole szkół transportowo-mechatronicznych w Skarżysku-Kamiennej im.
        Inż. Eugeniusza kwiatkowskiego - {""}
        <span
          className="article__title article__title--special"
          ref={specialRef}
        >
          historia
        </span>
      </h5>
      <span className="article__count" ref={countRef}>
        01
      </span>
      <div className="article__container_img">
        <Image
          className="article__img"
          src={historyImg.src}
          alt={"historia naszej szkoły"}
          width={1024}
          height={768}
          quality={70}
        />
        <div className="article__cover" ref={imageRef}></div>
      </div>
      <p className="article__text" ref={textRef}>
        Zespół Szkół Transportowo-Mechatronicznych im. Inż. Eugeniusza
        Kwiatkowskiego w Skarżysku-Kamiennej to placówka powstała z połączenia
        dwóch szkół: Technicznych Zakładów Naukowych oraz Zespołu Szkół
        Ponadgimnazjalnych nr 4 (dawne Technikum Kolejowe). Choć placówka ta
        została powołana do życia stosunkowo niedawno – w roku szkolnym
        2009/2010 – pozostaje szkołą z wieloma tradycjami przekazywanymi przez
        lata uczniom oraz absolwentom obydwu połączonych szkół. W skład zespołu
        wchodzą: Technikum Nr 6, Szkoła Policealna Nr 4 dla Dorosłych i Szkoła
        Zawodowa (bez naboru uczniów). Siedziba szkoły mieści się przy ul.
        Legionów 119 w dawnym budynku TZN. Szkoła posiada trzykondygnacyjny
        budynek, dużą aulę, a także bazę sportowa w postaci sali gimnastycznej,
        siłowni, salki do aerobicu, boiska asfaltowego. W szkole działa
        biblioteka wyposażona w bogaty księgozbiór i stanowiska internetowe. W
        ostatnich latach budynek szkoły został poddany kompleksowej
        termomodernizacji.
      </p>
    </article>
  );
}
