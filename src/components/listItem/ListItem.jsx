import {
  AddRounded,
  PlayArrowRounded,
  ThumbDownAltRounded,
  ThumbUpAltRounded,
} from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://youtu.be/8QnMmpfKWvo";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.squarespace-cdn.com/content/5bb814c411f78452f016d3c1/1547020883388-R0V1PZJJIE4JK0A7YPGH/BirdBox_Verical_Main_PRE_UK.0.jpg?content-type=image%2Fjpeg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowRounded className="icon" />
              <AddRounded className="icon" />
              <ThumbUpAltRounded className="icon" />
              <ThumbDownAltRounded className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>2015</span>
            </div>
            <div className="desc">
              In a post-apocalyptic world, Malorie Hayes advises two young,
              unnamed children that they will be going down a river in a
              rowboat.
            </div>
            <div className="genre">Thriller/Sci-fi Drama</div>
          </div>
        </>
      )}
    </div>
  );
}
