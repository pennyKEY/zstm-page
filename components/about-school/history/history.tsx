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
          fill={true}
          quality={70}
        />
        <div className="article__cover" ref={imageRef}></div>
      </div>
      <p className="article__text" ref={textRef}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi illum
        quod tenetur sit quos voluptatibus nostrum voluptates suscipit unde
        exercitationem. Laboriosam sequi quas adipisci dolore. Ad minus hic
        quisquam corporis, rerum dignissimos. Voluptas illum quas, explicabo
        architecto officia at ipsam, fugiat animi pariatur enim, provident
        excepturi? Laborum optio eius expedita corporis neque cumque nisi nulla
        veritatis blanditiis! Vel aliquid, debitis perferendis impedit harum
        quam eius quia dolorum amet, reiciendis fuga illum quos voluptates
        tempora commodi, et sapiente itaque ex quidem. Nobis officiis doloribus
        debitis nam? Ad tenetur fugit ipsum eius cumque ut voluptatem veniam
        eveniet, similique voluptatibus commodi sequi delectus eligendi rerum
        soluta doloribus provident velit nemo maxime optio totam. Voluptatum vel
        asperiores eos dolorum, quasi iure doloremque eveniet quam, repellat a
        excepturi, accusantium et atque sed ducimus illum ex perferendis quos.
        Vel doloremque, quisquam temporibus maxime minima earum quibusdam
        beatae, magni reiciendis sunt officiis ut facere quos aperiam quidem
        cum, eligendi autem eius praesentium consequuntur fugiat aut delectus
        amet nihil! Cumque voluptatibus et delectus harum. Modi necessitatibus
        rerum hic quam quidem architecto ad excepturi, laudantium dolor, quos
        fugit soluta nam unde nostrum cupiditate ullam placeat dolorum. Dicta,
        maxime quisquam minima harum quod maiores! Omnis iusto corporis harum
        deleniti labore iure voluptatum quia nobis commodi repudiandae sint
        nulla, maxime impedit itaque nemo saepe? Temporibus cum soluta
        architecto vel nostrum quasi, dolorem deserunt et neque ratione
        delectus, magnam quod minima, dolore laborum perferendis eos eum
        aspernatur ipsa distinctio maxime expedita consequuntur! Modi ut, nemo
        molestiae quis est enim! Laboriosam rem numquam illo exercitationem at
        autem sit maiores asperiores sapiente, veritatis obcaecati eveniet,
        tempore magni. Maxime aliquam pariatur accusamus esse dolorum quam
        ducimus assumenda unde excepturi, quas totam rerum ipsam qui vero
        placeat explicabo iste. Asperiores non aliquam sit eum omnis alias quis
        explicabo delectus labore expedita. Quasi reiciendis distinctio dolor
        ipsa sint tenetur quia error, quod harum eum provident quidem laudantium
        vero delectus fugiat doloribus quae magni fuga exercitationem libero
        dolorem! Possimus corrupti vero tempora reprehenderit dolores dolore
        ipsam recusandae enim, quis excepturi fugit alias dignissimos? Dolorem
        unde temporibus dolorum at molestias velit asperiores, beatae, rerum
        officiis amet, necessitatibus labore sequi.
      </p>
    </article>
  );
}
