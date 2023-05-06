// imported libraries
import dynamic from "next/dynamic";

// imported Components
const Dots = dynamic(() => import("../../dots/Dots"));
const Rectangle = dynamic(() => import("../../shapes/Rectangle"));

// imported assets
import headerImg from "@/public/header.jpg";

// create Component
export default function Header() {
  // return component
  return (
    <header className="header">
      {/* .header__title */}
      <h1 className="header__title">
        {/* show Dots Component  */}
        <Dots />
        Zespół Szkół{" "}
        <span className="header__title header__title--green">
          Transportowo-
        </span>{" "}
        Mechatronicznych
        {/* show Dots Component */}
        <Dots />
      </h1>

      {/* .header__img */}
      <div className="header__img">
        {/* add Image */}
        <div className="header__container_img">
          <div className="header__img_frame"></div>
          <div
            className="header__img_bg"
            style={{ backgroundImage: `url('${headerImg.src}')` }}
          ></div>
        </div>
        <div className="header__img_cover"></div>
      </div>

      {/* .header__btn__group */}
      <div className="header__btn_group">
        <button className="header__btn header__btn--outline">
          Aktualności
        </button>
        <button className="header__btn">O szkole</button>
      </div>

      {/* show big Rectangle in background */}
      <Rectangle />
      {/*  */}
    </header>
  );
}
