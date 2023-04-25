// imported Components
import Posts from "../../slider/Posts";
import Navigation from "../../navigation/Navigation";

// imported own hooks
import useAnimations from "@/hooks/useAnimations";
import useNavigationPosts from "@/hooks/useNavigationPosts";

// create component
export default function News() {
  // useAnimations hook
  const { titleNewsRef, descriptionNewsRef, postsDivRef } = useAnimations();

  // useNavigationPosts hook
  const { changeActiveIndex, activeIndexPost } = useNavigationPosts();

  // return component
  return (
    <section className="news">
      {/* create h3.news__title with titleNewsRef to animation */}
      <h3 className="news__title" ref={titleNewsRef}>
        Aktualności
      </h3>

      {/* create p.news__description with descriptionNewsRef to animation  */}
      <p className="news__description" ref={descriptionNewsRef}>
        Tutaj znajdziesz wszystkie ostatnie wydarzenia, które miały miejsce w
        naszej szkole. U nas nie ma czasu na nudę!
      </p>

      {/* show Posts with postsDivRef and activeIndexPost to Props  */}
      <Posts postsDivRef={postsDivRef} activeIndexPost={activeIndexPost} />

      {/* show Navigation with function changeActiveIndex and navigationRef to animation */}
      <Navigation changeActiveIndex={changeActiveIndex} />
    </section>
  );
}
