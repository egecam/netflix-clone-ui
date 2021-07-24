import { Info, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="dystopia">Dystopia</option>
            <option value="documentary">Documentary</option>
            <option value="animation">Animation</option>
          </select>
        </div>
      )}
      <img
        src="https://teknosafari.net/wp-content/uploads/2020/12/netflix-etkisi-satranc.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRfQ-a5EeQqF4mPsXfrIC-_r-tGyqHDmbwasInOgMSaQ-TAQYXP3mMXpYPK2xvEOi4Uyjji7zRnSREFURSkCUVFZ5VnKRVNQIqXDUTii9Fnro6ujuiGtsjxqr4x1RODx-rojymPV6FHzy0M7CPWdjjCUCrbcWUvblYcixCFqeNXaqQ.png?r=a7f"
          alt=""
        />
        <span className="desc">
          Beginning in the mid-1950s and proceeding into the 1960s, the story
          follows the life of Beth Harmon, an orphaned chess prodigy on her rise
          to the top of the chess world while struggling with drug and alcohol
          dependency.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <Info />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
