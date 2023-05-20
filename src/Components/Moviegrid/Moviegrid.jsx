import "./Moviegrid.css";

const Moviegrid = (props) => {
  return (
    <div className="movieWrapper">
      {props.movies.map((movie, index) => (
        <div className="movieboxes" key={index}>
          <div className="movieimage">
            <img src={movie.Poster}></img>
          </div>
          <h2 className="moviename">{movie.Title}</h2>
          <h5 className="movieyear">{movie.Year}</h5>
        </div>
      ))}
    </div>
  );
};

export default Moviegrid;
