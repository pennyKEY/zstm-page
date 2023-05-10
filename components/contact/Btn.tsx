interface Props {
  btnRef: React.ForwardedRef<HTMLButtonElement>;
}

// create Component
export default function Btn({ btnRef }: Props) {
  // return Component
  return (
    <div className="contact__container_btn">
      <button type="submit" className="contact__btn btn" ref={btnRef}>
        <span className="contact__btn_bar contact__btn_bar--first"></span>
        <span className="contact__btn_bar contact__btn_bar--second"></span>
        <span className="contact__btn_bar contact__btn_bar--third"></span>
        Wyślij!
      </button>
    </div>
  );
}
