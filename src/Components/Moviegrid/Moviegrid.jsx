import { Button } from "@mui/material";
import "./Moviegrid.css";

const Moviegrid = (props) => {
  return (
    <div className="movieWrapper">
      {props.movies.map((movie, index) => (
        <div>
          <div className="movieboxes" key={index}>
            <div className="movieimage">
              <img src={movie.Poster}></img>
            </div>
            <h2 className="moviename">{movie.Title}</h2>
            <h5 className="movieyear">{movie.Year}</h5>
            <div className="movieboxaction">
              <Button variant="contained" size="small">
                Favourite
              </Button>
              <Button variant="outlined" size="small">
                Watched
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Moviegrid;
