// imported libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

// define Props
interface Props {
  changeMuteVideo: () => void;
}

// create own Component
export default function MuteIcons({ changeMuteVideo }: Props) {
  // return Component
  return (
    // volume xmark with onClick to unmute video
    <FontAwesomeIcon
      className="movie__volume_xmark movie__control"
      icon={faVolumeXmark}
      onClick={changeMuteVideo}
    />
  );
}
