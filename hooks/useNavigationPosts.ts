// imported libraries
import { useState } from "react";

// create hook
export default function useNavigationPosts() {
  // useState
  const [activeIndexPost, setActiveIndexPost] = useState(0);

  // function to change index actual post
  const changeActiveIndex = (grow: boolean) => {
    // fetch the window width
    const widthWindow = window.innerWidth;

    // set max index of post
    let stop: number = 5;

    // change index if window width is desktop
    if (widthWindow >= 1024) {
      stop = 3;
    }

    // check why index can be changed
    if (grow === false && activeIndexPost === 0) {
      return null;
    } else if (grow === true && activeIndexPost === stop) {
      return null;
    }

    // change active index post
    grow
      ? setActiveIndexPost(activeIndexPost + 1)
      : setActiveIndexPost(activeIndexPost - 1);
  };

  // return values
  return {
    activeIndexPost,
    changeActiveIndex,
  };
}
