// imported libraries
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faExpand } from "@fortawesome/free-solid-svg-icons";

// imported Components
const MuteIcons = dynamic(() => import("@/components/movie/MuteIcons"));
const NotMuteIcons = dynamic(() => import("@/components/movie/NotMuteIcons"));

// define Props
interface Props {
  allTimeMovie: string;
  progress: number;
  progressRef: React.ForwardedRef<HTMLInputElement>;
  changeProgressHandler: () => void;
  mouseUpProgressHandler: (e: React.MouseEvent<Element, MouseEvent>) => void;
  mouseDownProgressHandler: (e: React.MouseEvent<Element, MouseEvent>) => void;
  playOrPause: () => void;
  muteVideo: boolean;
  clickHandlerFullScreen: () => void;
  changeMuteVideo: () => void;
}

// return Component
export default function IsPlayControl({
  allTimeMovie,
  progressRef,
  progress,
  changeProgressHandler,
  mouseUpProgressHandler,
  mouseDownProgressHandler,
  playOrPause,
  muteVideo,
  clickHandlerFullScreen,
  changeMuteVideo,
}: Props) {
  // return Component
  return (
    <div className="movie__controls">
      <div className="movie__progress">
        {/* progress bar time video */}
        <input
          className="movie__progress_bar"
          type="range"
          min="0"
          max="100"
          defaultValue="0"
          value={progress}
          ref={progressRef}
          onChange={changeProgressHandler}
          onMouseUp={mouseUpProgressHandler}
          onMouseDown={mouseDownProgressHandler}
        />
      </div>

      {/* icon pause */}
      <FontAwesomeIcon
        className="movie__pause movie__control"
        icon={faPause}
        onClick={playOrPause}
      />

      {/* display correct icons */}
      {muteVideo ? (
        <MuteIcons changeMuteVideo={changeMuteVideo} />
      ) : (
        <NotMuteIcons changeMuteVideo={changeMuteVideo} />
      )}

      {/* icon fullScreen */}
      <FontAwesomeIcon
        className="movie__expand movie__control"
        icon={faExpand}
        onClick={clickHandlerFullScreen}
      />

      {/* counter time */}
      <p className="movie__time">{allTimeMovie}</p>
    </div>
  );
}
