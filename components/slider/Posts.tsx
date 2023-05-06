// imported libraries
import dynamic from "next/dynamic";
import { ForwardedRef } from "react";

// imported components
const MapPost = dynamic(() => import("./MapPost"));

// imported assets
import post1 from "../../public/post1.jpg";
import post2 from "../../public/post2.jpg";
import post3 from "../../public/post3.jpg";

// define props
interface Props {
  // useRef with HTMLDivElement
  postsDivRef: ForwardedRef<HTMLDivElement>;
  // activeIndexPost with type number
  activeIndexPost: number;
}

// create component
export default function Posts({ postsDivRef, activeIndexPost }: Props) {
  // for begin random posts for create sass views
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
    {
      title: "Uroczyste Rozpoczęcie Roku Szkolnego 2022/2023",
      img: post1.src,
    },
    {
      title: "PRZETARG NIEOGRANICZONY NA DZIERŻAWĘ SKLEPIKU SZKOLNEGO",
      img: post2.src,
    },
    {
      title: "ROZPOCZĘCIE ROKU SZKOLNEGO",
      img: post3.src,
    },
  ];

  // count posts length
  const numberPosts = posts.length;

  // function which must return translateX value
  function translateFunction() {
    // return if activeIndexPost is equal 0
    if (activeIndexPost === 0) {
      return `translateX(0%)`;
    }
    // return if activeIndexPost is greater than 0
    else if (activeIndexPost > 0) {
      return `translateX(-${activeIndexPost * (100 / numberPosts)}%)`;
    }
  }

  // return component
  return (
    // create .posts div with ref to component, to animation
    <div className="posts" ref={postsDivRef}>
      <div className="posts__container">
        {/* create .posts__wrapper div to translateX slider post */}
        <div
          className="posts__wrapper"
          style={{
            transform: translateFunction(),
          }}
        >
          {/* show all posts to slider */}
          <MapPost posts={posts} />
        </div>
      </div>
    </div>
  );
}
