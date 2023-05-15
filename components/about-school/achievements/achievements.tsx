import Image from "next/image";

import useArticle from "@/hooks/about-school/useArticle";

import achievementsImg from "@/public/about-school/achievements.jpg";

interface Props {
  achievementsRef: React.ForwardedRef<HTMLTitleElement>;
}

export default function Achievements({ achievementsRef }: Props) {
  const { countRef, imageRef, nrRef, textRef, titleRef, specialRef } =
    useArticle(2);

  return (
    <article
      className="article"
      ref={achievementsRef}
      id="achievements_section"
    >
      <p className="article__nr" ref={nrRef}>
        02 / osiąnięcia
      </p>
      <h5 className="article__title" ref={titleRef}>
        O zespole szkół transportowo-mechatroniczniych w Skarżysku-Kamiennej im.
        inż. Eugeniusza Kwiatkowskiego -{" "}
        <span
          className="article__title article__title--special"
          ref={specialRef}
        >
          osiągnięcia
        </span>
      </h5>
      <span className="article__count" ref={countRef}>
        02
      </span>
      <div className="article__container_img">
        <Image
          className="article__img"
          src={achievementsImg.src}
          alt={"historia naszej szkoły"}
          fill={true}
          quality={70}
        />
        <div className="article__cover" ref={imageRef}></div>
      </div>
      <p className="article__text" ref={textRef}>
        W wyniku połączenia ZSTM stał się jedną z większych szkół w naszym
        powiecie kształcącą młodzież w interesujących i atrakcyjnych z punktu
        widzenia możliwości na rynku pracy kierunkach: technik mechatronik,
        technik mechanik, technik logistyk, technik transportu kolejowego,
        technik dróg i mostów kolejowych, technik elektroenergetyk transportu
        szynowego i technik BHP. W ofercie edukacyjnej szkoły na rok 2015/2016
        znalazły się nowe zawody poszukiwane na rynku pracy w naszym regionie
        jak: technik geolog, technik ochrony środowiska i technik usług
        pocztowych i finansowych. ZSTM jest szkoła otwartą wobec młodzieży z
        różnych środowisk, wśród uczniów przeważają uczniowie pochodzący z
        okolic Skarżyska – Kamiennej, w tym w bardzo wysokim stopniu z terenów
        wiejskich. Duża część uczniów boryka się z poważnymi problemami
        rodzinnymi i materialnym i wszystkim im szkoła stara się zapewnić jak
        najlepszą pomoc i opiekę. Mocną stroną placówki jest współpraca z
        zakładami pracy. Jako jedyna szkoła w powiecie skarżyskim zapewniamy
        naszym absolwentom pracę na mocy podpisania umów stypendialnych z Mesko
        S.A. i PKP PLK S.A. Kształcenie praktyczne w szkole prowadzone jest w
        ścisłym powiązaniu z pracodawcą. Zakłady pracy wspierają szkołę między
        innymi poprzez doposażenie pracowni w pomoce dydaktyczne, umożliwienie
        odbywania zajęć praktycznych i praktyk zawodowych oraz wycieczek
        przedmiotowych.ZSTM jest jedyną szkołą w województwie świętokrzyskim,
        która przystąpiła do programu stypendialnego PKP Polskie Linie Kolejowe
        S.A., skierowanego do uczniów 14 szkół w Polsce. Do tej pory stypendium
        otrzymało ponad 60 uczniów, a sponsorzy zainwestowali w ich
        wykształcenie prawie 1 milion złotych.
      </p>
    </article>
  );
}
