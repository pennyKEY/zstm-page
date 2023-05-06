// imported libraries
import dynamic from "next/dynamic";

// imported components
const Post = dynamic(() => import("./Post"));

// define Post structure to Props
interface Post {
  title: string;
  img: string;
}

// define Props
interface Props {
  posts: Post[];
}

// create Component
export default function MapPost({ posts }: Props) {
  // return component
  return (
    <>
      {/* map all posts and show post structure  */}
      {posts.map(({ img, title }) => (
        <Post title={title} img={img} key={title} />
      ))}
    </>
  );
}
