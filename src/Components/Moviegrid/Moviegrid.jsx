import "./Moviegrid.css";
import Buttonlayout from "../Buttonlayout/Buttonlayout";

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
            <Buttonlayout button1={props.button1} button2={props.button2} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Moviegrid;
