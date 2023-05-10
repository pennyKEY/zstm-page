// define Props
interface Props {
  videoRef: React.ForwardedRef<HTMLVideoElement>;
  windowWidth: number;
  playOrPause: () => void;
}

// create Component
export default function Video({ videoRef, windowWidth, playOrPause }: Props) {
  // return Component
  return (
    // display video
    <video
      className="movie__video"
      ref={videoRef}
      onClick={windowWidth >= 1024 ? playOrPause : () => {}}
    >
      <source src={require("@/public/start-page/movie.mp4")} type="video/mp4" />
    </video>
  );
}
