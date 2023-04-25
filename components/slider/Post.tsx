// imported libraries
import Link from "next/link";

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
      <div
        className="post__bcg"
        style={{ backgroundImage: `url('${img}')` }}
      ></div>

      {/* down part of .post component */}
      <div className="post__down">
        {/* show titlePost but length can't be greater that maxLengthTitle */}
        <h6 className="post__title">
          {title.slice(0, maxLengthTitle)}
          {title.length > maxLengthTitle ? "..." : ""}
        </h6>

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
