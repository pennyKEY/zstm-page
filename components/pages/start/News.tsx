import useAnimations from "@/hooks/useAnimations";

export default function News() {
  const { titleNewsRef, descriptionNewsRef } = useAnimations();

  return (
    <section className="news">
      <h3 className="news__title" ref={titleNewsRef}>
        Aktualności
      </h3>
      <p className="news__description" ref={descriptionNewsRef}>
        Tutaj znajdziesz wszystkie ostatnie wydarzenia, które miały miejsce w
        naszej szkole. U nas nie ma czasu na nudę!
      </p>
    </section>
  );
}
