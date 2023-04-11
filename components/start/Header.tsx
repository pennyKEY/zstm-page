import Dots from "../dots/Dots";
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
      {/* <img className="header__img" src={headerImg.src} alt="" /> */}
      <div className="header__img">
        <div
          className="header__img_bg"
          style={{ backgroundImage: `url('${headerImg.src}')` }}
        ></div>
        <div className="header__img_cover"></div>
      </div>
    </header>
  );
}
