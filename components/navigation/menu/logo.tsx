// imported libraries
import Image from "next/image";

// imported assets
import logo from "@/public/start-page/logo.png";

// create Component
export default function Logo() {
  // return Component
  return (
    <div className="logo">
      {/* img with logo source */}
      {/* <img className="logo__img" src={logo.src} alt="logo ZSTMU" /> */}
      {/* <Image
        className="logo__img"
        src={logo.src}
        alt={"logo ZSTMU"}
        fill={true}
      /> */}
      <Image
        src={logo.src}
        alt="logo ZSTMU"
        className="logo__img"
        width={284}
        height={135}
      />
    </div>
  );
}
