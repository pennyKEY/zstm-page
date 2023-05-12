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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        obcaecati, hic accusantium doloribus, libero laudantium atque, alias
        temporibus sunt cum inventore laborum animi omnis totam quos voluptates
        similique qui nulla molestias distinctio voluptas consequatur ea eos et!
        Beatae perferendis excepturi harum quia? Accusantium soluta earum ut
        quas. Dignissimos consectetur omnis dolor animi magnam deleniti beatae,
        voluptas et cum perferendis ex laudantium reiciendis consequatur aut nam
        reprehenderit autem nemo enim eaque odio incidunt! Saepe esse repellat
        architecto, magni quisquam dolor veniam cupiditate nisi aliquid numquam
        consequuntur aut dolorum rerum cum fuga laborum optio, doloribus unde
        nesciunt qui laudantium iusto distinctio. Reiciendis adipisci ut ullam,
        dicta molestiae hic perspiciatis sequi corrupti soluta nemo voluptate
        perferendis corporis sunt ea nostrum officiis nihil beatae ipsum! Aut
        molestias nesciunt eligendi eaque fugit est maxime ipsam, rem dicta,
        blanditiis nisi eos optio fuga sint. Qui ut ab placeat magnam ad
        voluptate provident accusantium, voluptatem corrupti asperiores mollitia
        expedita, velit a saepe sint excepturi non? Molestiae vero reiciendis
        incidunt quis vel, rerum hic architecto, neque rem dicta iure? Quidem
        molestias quisquam iusto laboriosam magnam fuga repellendus blanditiis
        excepturi obcaecati sunt error facere possimus quibusdam ad, aliquid
        recusandae reiciendis accusamus suscipit id beatae eaque! Maiores
        voluptas fugiat debitis nobis ut corrupti, illum pariatur itaque harum
        iusto ipsum expedita. Ea sed quo voluptatum molestiae ad quaerat, esse
        unde ullam facilis quasi veniam debitis, laborum impedit dicta
        quibusdam? Repellat voluptate, voluptatibus blanditiis ipsa, laudantium
        veritatis atque laborum explicabo porro, beatae earum assumenda! Eos
        doloremque quibusdam vero dolores esse odio iure reiciendis commodi?
        Quos, rem laudantium accusamus soluta ducimus reprehenderit aliquid quam
        dolore voluptatibus voluptas praesentium cumque. Suscipit quaerat amet,
        illum pariatur dolorem quasi cumque, nulla voluptas nostrum eum optio
        saepe velit possimus sapiente laudantium minus dicta! Tenetur qui a nisi
        autem nam quasi consectetur iusto voluptate odit! Id, in obcaecati!
      </p>
    </article>
  );
}
