import { useState } from "react";

export default function useNavigationPosts() {
  const [activeIndexPost, setActiveIndexPost] = useState(0);

  const changeActiveIndex = (grow: boolean) => {
    const widthWindow = window.innerWidth;

    let stop: number = 5;

    if (widthWindow >= 1024) {
      stop = 3;
    }

    if (grow === false && activeIndexPost === 0) {
      return null;
    } else if (grow === true && activeIndexPost === stop) {
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
