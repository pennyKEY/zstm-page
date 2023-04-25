// imported assets
import logo from "@/public/logo.png";

// create Component
export default function Logo() {
  // return Component
  return (
    <div className="logo">
      {/* img with logo source */}
      <img className="logo__img" src={logo.src} alt="logo ZSTMU" />
    </div>
  );
}
