import Dots from "../../dots/Dots";
import Rectangle from "../../shapes/Rectangle";
import headerImg from "@/public/header.jpg";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <Dots />
        Zespół Szkół{" "}
        <span className="header__title header__title--green">
          Transportowo-
        </span>{" "}
        Mechatronicznych
        <Dots />
      </h1>
      <div className="header__img">
        <div
          className="header__img_bg"
          style={{ backgroundImage: `url('${headerImg.src}')` }}
        ></div>
        <div className="header__img_cover"></div>
      </div>
      <div className="header__btn_group">
        <button className="header__btn header__btn--outline">
          Aktualności
        </button>
        <button className="header__btn">O szkole</button>
      </div>
      <Rectangle />
    </header>
  );
}
