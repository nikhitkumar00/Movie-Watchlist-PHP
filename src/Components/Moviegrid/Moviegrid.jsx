import { Button } from "@mui/material";
import { useState } from "react";
import "./Moviegrid.css";

const Moviegrid = (props) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

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
              <Button
                variant="contained"
                size="small"
                onClick={() => addToFavorites(movie)}
              >
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
