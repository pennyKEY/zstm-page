// imported libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

// define Props
interface Props {
  windowWidth: number;
  playOrPause: () => void;
}

// create Component
export default function NotPlayControl({ windowWidth, playOrPause }: Props) {
  // return Component
  return (
    <>
      {/* display black transparent cover on video, and this cover have feature to close onClick but only for laptop */}
      <div
        className="movie__cover"
        onClick={windowWidth >= 1024 ? playOrPause : () => {}}
      ></div>

      {/* icon play with onClick to play video */}
      <FontAwesomeIcon
        className="movie__play movie__control"
        icon={faPlay}
        onClick={playOrPause}
      />
    </>
  );
}
