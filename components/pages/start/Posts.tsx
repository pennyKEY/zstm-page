import { useState } from "react";

import post1 from "../../../public/post1.jpg";
import post2 from "../../../public/post2.jpg";
import post3 from "../../../public/post3.jpg";

interface Props {
  postsDivRef: any;
}

export default function Posts({ postsDivRef }: Props) {
  const [activeIndexPost, setActiveIndexPost] = useState();

  const posts = [
    {
      title: "Intercity SA funduje stypendia",
      img: post1.src,
    },
    {
      title: "Złaz pierwszoklasisty",
      img: post2.src,
    },
    {
      title: "Dni otwarte",
      img: post3.src,
    },
  ];

  return (
    <div className="posts" ref={postsDivRef}>
      <article className="post">
        <div
          className="post__bcg"
          style={{ backgroundImage: `url('${posts[0].img}')` }}
        >
          <h6 className="post__title">{posts[0].title}</h6>
        </div>
      </article>
      <article className="post">
        <div
          className="post__bcg"
          style={{ backgroundImage: `url('${posts[1].img}')` }}
        >
          <h6 className="post__title">{posts[1].title}</h6>
        </div>
      </article>
      <article className="post">
        <div
          className="post__bcg"
          style={{ backgroundImage: `url('${posts[2].img}')` }}
        >
          <h6 className="post__title">{posts[2].title}</h6>
        </div>
      </article>
    </div>
  );
}
