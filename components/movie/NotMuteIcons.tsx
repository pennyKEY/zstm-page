// imported libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

// define Props
interface Props {
  changeMuteVideo: () => void;
}

// return Component
export default function NotMuteIcons({ changeMuteVideo }: Props) {
  // return Component
  return (
    // volumeUp icon with onClick to mute
    <FontAwesomeIcon
      className="movie__volume movie__control"
      icon={faVolumeUp}
      onClick={changeMuteVideo}
    />
  );
}
