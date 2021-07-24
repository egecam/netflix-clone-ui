import { ArrowBackRounded } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackRounded />
        Home
      </div>
      <video
        src="https://download.blender.org/peach/trailer/trailer_1080p.ogg"
        className="video"
        autoPlay
        progress
        controls
      />
    </div>
  );
}

//1.28:22 'de kaldık
