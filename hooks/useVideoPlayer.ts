// imported libraries
import { useEffect, useState, useRef } from "react";

// imported functions
import animateScrollElement from "../functions/animateScrollElement";

// create own hook
export default function useVideoPlayer() {
  // useState
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [muteVideo, setMuteVideo] = useState<boolean>(false);
  const [durationMovie, setDurationMovie] = useState<number>(0);
  const [actualTimeMovie, setActualTimeMovie] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  // useRef
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);
  const containerMovie = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);

  // interval
  let interval: any;

  // change actual time
  function changeActualTimeMovie() {
    // check why videoRef exist
    if (!videoRef || !videoRef.current) return;
    if (!progressRef || !progressRef.current) return;

    // check why video is ended
    if (videoRef.current.currentTime >= videoRef.current.duration) {
      // reset values
      setIsPlay(false);
      setActualTimeMovie(0);
      setProgress(0);

      // ended function
      return;
    }

    // get actual values
    const actualTime = videoRef.current.currentTime;
    const actualProgress = (actualTime / durationMovie) * 100;

    // change progress bar value
    progressRef.current.value = actualProgress.toString();

    // and set new values to states
    setActualTimeMovie(actualTime);
    setProgress(actualProgress);
  }

  // play video or pause
  function playOrPause() {
    // check why videoRef exist
    if (!videoRef || !videoRef.current) return;

    // change state to display icon
    setIsPlay(!isPlay);

    // play or pause video
    isPlay ? videoRef.current.pause() : videoRef.current.play();

    // check why video is pause
    if (!isPlay) {
      interval = setInterval(changeActualTimeMovie, 1000);
    }
    // check why video is play
    else {
      clearInterval(interval);
    }
  }

  // change full screen
  function clickHandlerFullScreen() {
    // check why full screen is open or close
    isFullScreen
      ? document.exitFullscreen()
      : containerMovie.current?.requestFullscreen();

    // change class if fullscreen is show or not
    containerMovie.current?.classList.toggle("fullscreen");

    // change value isFullScreen
    setIsFullScreen(!isFullScreen);
  }

  // change volume video
  function changeMuteVideo() {
    // check why videoRef exist
    if (!videoRef || !videoRef.current) return;

    // change mute video property
    videoRef.current.muted = !muteVideo;

    // change state muteVideo
    setMuteVideo(!muteVideo);
  }

  // change progress bar
  function changeProgressHandler() {
    // check why progressRef exist
    if (!progressRef || !progressRef.current) return;
    if (!videoRef || !videoRef.current) return;

    // get new values
    const val: number = parseFloat(progressRef.current.value);
    const newActualTime = (val / 100) * durationMovie;

    // set new values
    setActualTimeMovie(newActualTime);
    setProgress(val);

    // change actual time video
    videoRef.current.currentTime = newActualTime;
  }

  // mouseDown handler on progress bar
  function mouseDownProgressHandler(e: React.MouseEvent<Element, MouseEvent>) {
    // clear interval
    clearInterval(interval);

    // pause video
    videoRef.current?.pause();
  }

  // mouseUp handler on progress bar
  function mouseUpProgressHandler(e: React.MouseEvent<Element, MouseEvent>) {
    // set interval again
    interval = setInterval(changeActualTimeMovie, 1000);

    // play video
    videoRef.current?.play();
  }

  // scroll handler
  function scrollHandler() {
    animateScrollElement(videoRef);
    animateScrollElement(titleRef);
    animateScrollElement(descriptionRef);
    animateScrollElement(coverRef);
  }

  // mount
  useEffect(() => {
    // set window width on mount
    setWindowWidth(window.innerWidth);

    // check why videoRef exist
    if (!videoRef || !videoRef.current) return;

    // get time all movie
    const time = Math.floor(videoRef.current.duration);
    // set time
    setDurationMovie(time);

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  // return values
  return {
    isPlay,
    playOrPause,
    videoRef,
    clickHandlerFullScreen,
    durationMovie,
    actualTimeMovie,
    muteVideo,
    changeMuteVideo,
    windowWidth,
    changeProgressHandler,
    progressRef,
    progress,
    mouseDownProgressHandler,
    containerMovie,
    mouseUpProgressHandler,
    titleRef,
    descriptionRef,
    coverRef,
  };
}
