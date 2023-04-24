import Posts from "../../slider/Posts";
import Navigation from "../../navigation/Navigation";

import useAnimations from "@/hooks/useAnimations";
import useNavigationPosts from "@/hooks/useNavigationPosts";

export default function News() {
  const { titleNewsRef, descriptionNewsRef, postsDivRef, navigationRef } =
    useAnimations();
  const { changeActiveIndex, activeIndexPost } = useNavigationPosts();

  return (
    <section className="news">
      <h3 className="news__title" ref={titleNewsRef}>
        Aktualności
      </h3>

      <p className="news__description" ref={descriptionNewsRef}>
        Tutaj znajdziesz wszystkie ostatnie wydarzenia, które miały miejsce w
        naszej szkole. U nas nie ma czasu na nudę!
      </p>

      <Posts postsDivRef={postsDivRef} activeIndexPost={activeIndexPost} />
      <Navigation
        changeActiveIndex={changeActiveIndex}
        navigationRef={navigationRef}
      />
    </section>
  );
}
