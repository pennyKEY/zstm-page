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
    coverRef,
    descriptionRef,
    titleRef,
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
      <h4 className="movie__title" ref={titleRef}>
        Film o szkole
      </h4>
      <p className="movie__description" ref={descriptionRef}>
        Zespół Szkół Transportowo-Mechatronicznych w Skarżysku-Kamiennej to nowa
        placówka powstała z połączenia dwóch szkół: Technicznych Zakładów
        Naukowych oraz Zespołu Szkół Ponadgimnazjalnych nr. 4 Siedziba szkoły
        mieści się przy ul. Legionów 119 w budynku dawnego TZN.Choć placówka ta
        została powołana do życia w roku szkolnym 2009/2010 to i tak pozostaje
        szkołą z wieloma tradycjami przekazywanymi przez lata uczniom oraz
        absolwentom obydwu połączonych placówek.
      </p>
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
          <NotPlayControl
            windowWidth={windowWidth}
            playOrPause={playOrPause}
            coverRef={coverRef}
          />
        )}
      </div>
    </section>
  );
}
