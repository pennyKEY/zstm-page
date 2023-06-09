// imported libraries
import Link from "next/link";
import Image from "next/image";

// define Props
interface Props {
  title: string;
  img: string;
}

// return component
export default function Post({ title, img }: Props) {
  // set max length title
  const maxLengthTitle = 45;

  // return component
  return (
    // create main .post component
    <article className="post">
      {/* set imgPost to backgroundImage  */}
      <div className="post__bcg_container">
        {/* <Image
          className="post__bcg"
          src={img}
          alt={`image post ${title}`}
          width={200}
          height={160}
          sizes="
          (min-width: 1024px) 40vh
          (min-height: 1024px) 30vh
        "
          style={{
            width: "100%",
            height: "100%",
          }}
        /> */}
        <Image
          className="post__bcg"
          src={img}
          alt={`image post ${title}`}
          fill
        />
        <div className="post__bcg_cover"></div>
      </div>

      {/* down part of .post component */}
      <div className="post__down">
        {/* show titlePost but length can't be greater that maxLengthTitle */}
        <h3 className="post__title">
          {title.slice(0, maxLengthTitle)}
          {title.length > maxLengthTitle ? "..." : ""}
        </h3>

        {/* create button with link to display single post */}
        <button className="post__btn btn">
          <Link className="post__link" href="/">
            Zobacz post!
          </Link>
        </button>
      </div>
    </article>
  );
}
