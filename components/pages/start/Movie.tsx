// import own hooks
import useVideoPlayer from "@/hooks/useVideoPlayer";
import IsPlayControl from "@/components/movie/IsPlayControl";
import NotPlayControl from "@/components/movie/NotPlayControl";
import Video from "@/components/movie/Video";

// create Component
export default function Movie() {
  const {
    isPlay,
    durationMovie,
    actualTimeMovie,
    containerMovie,
    changeMuteVideo,
    changeProgressHandler,
    clickHandlerFullScreen,
    mouseDownProgressHandler,
    mouseUpProgressHandler,
    muteVideo,
    playOrPause,
    progress,
    progressRef,
    videoRef,
    windowWidth,
  } = useVideoPlayer();

  // get time from number of seconds
  const getMinutesMovie = Math.floor(durationMovie / 60);
  const getSecondsMovie = durationMovie - getMinutesMovie * 60;

  // get time from actual time move
  const getMinutesActual = Math.floor(actualTimeMovie / 60);
  const getSecondsActual = Math.floor(actualTimeMovie - getMinutesActual * 60);

  // set title time
  const allTimeMovie = `${getMinutesActual}:${
    getSecondsActual <= 9 ? "0" : ""
  }${getSecondsActual}/${getMinutesMovie}:${getSecondsMovie}`;

  // return Component
  return (
    <section className="movie">
      <h4 className="movie__title">Film o szkole</h4>
      <div className="movie__container" ref={containerMovie}>
        <Video
          videoRef={videoRef}
          windowWidth={windowWidth}
          playOrPause={playOrPause}
        />

        {isPlay ? (
          <IsPlayControl
            allTimeMovie={allTimeMovie}
            progress={progress}
            progressRef={progressRef}
            changeProgressHandler={changeProgressHandler}
            mouseDownProgressHandler={mouseDownProgressHandler}
            mouseUpProgressHandler={mouseUpProgressHandler}
            playOrPause={playOrPause}
            muteVideo={muteVideo}
            clickHandlerFullScreen={clickHandlerFullScreen}
            changeMuteVideo={changeMuteVideo}
          />
        ) : (
          <NotPlayControl windowWidth={windowWidth} playOrPause={playOrPause} />
        )}
      </div>
    </section>
  );
}
