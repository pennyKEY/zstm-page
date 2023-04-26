// imported libraries
import { useEffect, useState, useRef } from "react";

// create own hook
export default function useVideoPlayer() {
  // useState
  const [isPlay, setIsPlay] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [durationMovie, setDurationMovie] = useState(0);
  const [actualTimeMovie, setActualTimeMovie] = useState(0);

  // useRef
  const videoRef = useRef<HTMLVideoElement>(null);

  // change actual time
  function changeActualTimeMovie() {
    // check why videoRef exist
    if (!videoRef || !videoRef.current) return;

    if (
      Math.floor(videoRef.current.currentTime) >=
      Math.floor(videoRef.current.duration)
    ) {
      setIsPlay(false);
      setActualTimeMovie(0);

      return;
    }

    setActualTimeMovie(Math.round(videoRef.current.currentTime));
  }

  // play video or pause
  function playOrPause() {
    // check why videoRef exist
    if (!videoRef || !videoRef.current) return;

    // change state to display icon
    setIsPlay(!isPlay);

    // play or pause video
    isPlay ? videoRef.current.pause() : videoRef.current.play();

    let interval;

    if (!isPlay) {
      interval = setInterval(changeActualTimeMovie, 1000);
    } else {
      clearInterval(interval);
    }
  }

  // change full screen
  function clickHandlerFullScreen() {
    // check why videoRef exist
    if (!videoRef || !videoRef.current) return;

    !isFullScreen && videoRef.current.requestFullscreen();

    setIsFullScreen(!isFullScreen);
  }

  // function key handler
  function keyHandler(e: any) {
    if (e.keyCode === 32) playOrPause();
  }

  // mount
  useEffect(() => {
    // get listener on keydown
    window.addEventListener("keydown", keyHandler);

    if (!videoRef || !videoRef.current) return;

    // get time all movie
    const time = Math.floor(videoRef.current.duration);
    setDurationMovie(time);

    // unmount
    return () => {
      window.removeEventListener("keydown", keyHandler);
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
  };
}
