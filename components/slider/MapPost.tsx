interface Post {
  title: string;
  img: string;
}

interface Props {
  posts: Post[];
}

export default function MapPost({ posts }: Props) {
  const maxLengthTitle = 45;

  return (
    <>
      {posts.map(({ img, title }) => (
        <article className="post">
          <div
            className="post__bcg"
            style={{ backgroundImage: `url('${img}')` }}
          ></div>
          <div className="post__down">
            <h6 className="post__title">
              {title.slice(0, maxLengthTitle)}
              {title.length > maxLengthTitle ? "..." : ""}
            </h6>
            <button className="post__btn btn">Zobacz post!</button>
          </div>
        </article>
      ))}
    </>
  );
}
