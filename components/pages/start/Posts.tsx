import { ForwardedRef } from "react";

import post1 from "../../../public/post1.jpg";
import post2 from "../../../public/post2.jpg";
import post3 from "../../../public/post3.jpg";

interface Props {
  postsDivRef: ForwardedRef<HTMLDivElement>;
  activeIndexPost: number;
}

export default function Posts({ postsDivRef, activeIndexPost }: Props) {
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

  function translateFunction() {
    if (activeIndexPost === 0) {
      return `translateX(0%)`;
    } else if (activeIndexPost > 0) {
      return `translateX(-${activeIndexPost * 33.33}%)`;
    }
  }

  return (
    <div
      className="posts"
      ref={postsDivRef}
      style={{
        transform: translateFunction(),
      }}
    >
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
