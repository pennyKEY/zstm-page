import Dots from "../dots/Dots";

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
    </header>
  );
}
