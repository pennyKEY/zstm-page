import { useState } from "react";

export default function useNavigationPosts() {
  const [activeIndexPost, setActiveIndexPost] = useState(0);

  const changeActiveIndex = (grow: boolean) => {
    if (grow === false && activeIndexPost === 0) {
      return null;
    } else if (grow === true && activeIndexPost === 2) {
      return null;
    }

    grow
      ? setActiveIndexPost(activeIndexPost + 1)
      : setActiveIndexPost(activeIndexPost - 1);
  };

  return {
    activeIndexPost,
    changeActiveIndex,
  };
}
