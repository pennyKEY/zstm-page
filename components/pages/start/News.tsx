// imported libraries
import dynamic from "next/dynamic";

// imported own hooks
import useAnimations from "@/hooks/useAnimations";
import useNavigationPosts from "@/hooks/useNavigationPosts";

// imported Components
const Posts = dynamic(() => import("../../slider/Posts"));
const Navigation = dynamic(() => import("../../navigation/Navigation"));

// create component
export default function News() {
  // useAnimations hook
  const { titleNewsRef, descriptionNewsRef, postsDivRef } = useAnimations();

  // useNavigationPosts hook
  const { changeActiveIndex, activeIndexPost } = useNavigationPosts();

  // return component
  return (
    <section className="news">
      {/* create h2.news__title with titleNewsRef to animation */}
      <h2 className="news__title" ref={titleNewsRef}>
        Aktualności
      </h2>

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
