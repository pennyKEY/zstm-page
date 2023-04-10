import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <div className="logo">
      <img className="logo__img" src={logo.src} alt="logo ZSTMU" />
    </div>
  );
}
