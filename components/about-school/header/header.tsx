import Image from "next/image";

import headerImg from "@/public/about-school/header.jpg";

export default function Header() {
  return (
    <header className="header_2">
      <Image
        className="header_2__img"
        src={headerImg.src}
        alt="Nasza innowacja wojskowa"
        fill
        priority={true}
        quality={70}
      />
      <div className="header_2__bcg"></div>
      <div className="header_2__cover"></div>
    </header>
  );
}
