import Image from "next/image";

import headerImg from "@/public/directions/header.jpg";

export default function Header() {
  return (
    <header className="header_directions">
      <div className="header_directions__text">
        <h1 className="header_directions__title">
          O zespole szkół transportowo-mechatronicznych w Skarżysku-Kamiennej
          im. Inż. Eugeniusza kwiatkowskiego - {""}
          <span className="header_directions__title header_directions__title--special">
            kierunki
          </span>
        </h1>
        <p className="header_directions__description">
          Znajdziecie tutaj listę wszystkich zawodów dostępnych u nas w szkole.
          Dla każdego można wybrać coś fajnego. Mamy tutaj ludzi z pasją.
          Których misją jest przekazywanie wiedzy następnym pokoleniom.
        </p>
      </div>
      <div className="header_directions__container_img">
        <Image
          className="header_directions__img"
          src={headerImg.src}
          alt={"Zdjęcie prezentujące jeden z naszych zawodów"}
          fill
        />
      </div>
    </header>
  );
}
