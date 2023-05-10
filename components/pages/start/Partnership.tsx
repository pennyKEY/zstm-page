// imported libraries
import Image from "next/image";

// imported own hooks
import usePartner from "@/hooks/start-page/usePartner";

// imported assets
import zamel from "@/public/partnership/zamel.png";
import plk from "@/public/partnership/plk.png";
import mesko from "@/public/partnership/mesko.png";
import icc from "@/public/partnership/icc.png";
import zwcad from "@/public/partnership/zwcad.png";

// create Component
export default function Partnership() {
  // used own hook usePartner
  const {
    descriptionRef,
    iccRef,
    meskoRef,
    plkRef,
    titleRef,
    zamelRef,
    zwcadRef,
    specialRef,
    containerImg,
  } = usePartner();

  // return Component
  return (
    <section className="partner">
      <h5 className="partner__title" ref={titleRef}>
        Firmy które z{" "}
        <span
          className="partner__title partner__title--special"
          ref={specialRef}
        >
          nami
        </span>{" "}
        wspólpracują:
      </h5>

      <p className="partner__description" ref={descriptionRef}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
        odio earum voluptatem voluptatibus illum minus. Accusamus facilis cum
        totam, illum cumque recusandae ut alias in cupiditate laborum unde
        officia aspernatur fugiat ipsum rerum tenetur ex excepturi sit!
        Veritatis eveniet nihil, ut deleniti sequi nesciunt iure unde sapiente
        eligendi optio aliquid atque consequatur cum excepturi porro magnam,
        autem dolores qui! Minus delectus sapiente labore ullam a doloribus
        fugit! Veritatis aliquam debitis excepturi temporibus doloribus. Aliquid
        iure fugit aspernatur odio voluptatibus vel ipsa quisquam molestias in
        temporibus debitis est nulla, magni saepe, fugiat totam quae? Facere
        molestias perferendis ea incidunt temporibus provident.
      </p>

      <div className="partner__container" ref={containerImg}>
        <Image
          className="partner__img"
          src={zamel.src}
          alt={"zamel"}
          width={200}
          height={100}
          ref={zamelRef}
        />

        <Image
          className="partner__img partner__img--plk"
          src={plk.src}
          alt={"plk"}
          width={200}
          height={75}
          ref={plkRef}
        />

        <Image
          className="partner__img partner__img--mesko"
          src={mesko.src}
          alt={"mesko"}
          width={162}
          height={79}
          ref={meskoRef}
        />

        <Image
          className="partner__img partner__img--icc"
          src={icc.src}
          alt={"icc"}
          width={130}
          height={100}
          ref={iccRef}
        />

        <Image
          className="partner__img partner__img--zwcad"
          src={zwcad.src}
          alt={"zwcad"}
          width={150}
          height={45}
          ref={zwcadRef}
        />
      </div>
    </section>
  );
}
