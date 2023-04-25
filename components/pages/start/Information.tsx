// imported Components
import School from "../../information/School";
import Patron from "../../information/Patron";

// imported assets
import patron from "@/public/kwiatkowski.jpeg";

// imported own hooks
import useAnimations from "@/hooks/useAnimations";

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
      <div
        className="information__img"
        style={{ backgroundImage: `url('${patron.src}')` }}
        ref={patronImgRef}
      ></div>
    </section>
  );
}
