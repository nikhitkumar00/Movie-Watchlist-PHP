import { Button } from "@mui/material";
import "./Moviegrid.css";

const Moviegrid = (props) => {
  return (
    <div className="movieWrapper">
      {props.movies.map((movie, index) => (
        <div key={index}>
          <div className="movieboxes">
            <div className="movieimage">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <h2 className="moviename">{movie.Title}</h2>
            <h5 className="movieyear">{movie.Year}</h5>
            <div className="movieboxaction">
              <Button variant="contained" size="small">
                {props.button1}
              </Button>
              <Button variant="outlined" size="small">
                {props.button2}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Moviegrid;
