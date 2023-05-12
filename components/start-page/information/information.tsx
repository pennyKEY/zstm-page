// imported libraries
import dynamic from "next/dynamic";
import Image from "next/image";

// imported Components
const School = dynamic(() => import("./school/school"));
const Patron = dynamic(() => import("./patron/patron"));

// imported assets
import patron from "@/public/start-page/kwiatkowski.jpeg";

// imported own hooks
import useAnimations from "@/hooks/start-page/useAnimations";

// create Component
export default function Information() {
  // use own hook useAnimations
  const { patronRef, schoolRef, patronImgRef } = useAnimations();

  // return Component
  return (
    <section className="information">
      {/* show Components */}
      <School schoolRef={schoolRef} />
      <Patron patronRef={patronRef} />

      {/* show img with patron source */}
      <div className="information__img" ref={patronImgRef}>
        <Image
          src={patron.src}
          alt={"Eugeniusz Kwiatkowski nasz patron"}
          fill
        />
      </div>
    </section>
  );
}
