// imported libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faExpand } from "@fortawesome/free-solid-svg-icons";

// import own hooks
import useVideoPlayer from "@/hooks/useVideoPlayer";

// create Component
export default function Movie() {
  const {
    isPlay,
    videoRef,
    playOrPause,
    clickHandlerFullScreen,
    durationMovie,
    actualTimeMovie,
  } = useVideoPlayer();

  // get time from number of seconds
  const getMinutesMovie = Math.floor(durationMovie / 60);
  const getSecondsMovie = durationMovie - getMinutesMovie * 60;

  // get time from actul time move
  const getMinutesActual = Math.floor(actualTimeMovie / 60);
  const getSecondsActual = actualTimeMovie - getMinutesActual * 60;

  const allTimeMovie = `${getMinutesActual}:${
    getSecondsActual <= 9 ? "0" : ""
  }${getSecondsActual}/${getMinutesMovie}:${getSecondsMovie}`;

  // return Component
  return (
    <section className="movie">
      <h4 className="movie__title">Film o szkole</h4>
      <div className="movie__container">
        <video className="movie__video" ref={videoRef} onClick={playOrPause}>
          <source src={require("../../../public/movie.mp4")} type="video/mp4" />
        </video>
        {isPlay ? (
          <div className="movie__controls">
            <div className="movie__progress"></div>
            <FontAwesomeIcon
              className="movie__pause movie__control"
              icon={faPause}
              onClick={playOrPause}
            />
            <FontAwesomeIcon
              className="movie__expand movie__control"
              icon={faExpand}
              onClick={clickHandlerFullScreen}
            />
            <p className="movie__time">{allTimeMovie}</p>
          </div>
        ) : (
          <>
            <div className="movie__cover" onClick={playOrPause}></div>
            <FontAwesomeIcon
              className="movie__play movie__control"
              icon={faPlay}
              onClick={playOrPause}
            />
          </>
        )}
      </div>
    </section>
  );
}
