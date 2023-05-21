import { useEffect, useState } from 'react';
import "./Favourites.css";
import Moviegrid from "../Moviegrid/Moviegrid";

const Favourites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1/movietracker_backend/favourites.php')
      .then(response => response.json())
      .then(data => {
        const urls = data.map(imdbID => `http://www.omdbapi.com/?apikey=9027a6a0&i=${imdbID}`);
        Promise.all(urls.map(url => fetch(url)))
          .then(responses => Promise.all(responses.map(response => response.json())))
          .then(movieData => {
            setMovies(movieData);
          })
          .catch(error => {
            console.error('Error fetching movie data:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching IMDb IDs:', error);
      });
  }, []);

  return (
    <div className="favouriteWrapper">
      <Moviegrid movies={movies} button1={"Remove"} button2={"Watched"} />
    </div>
  );
};

export default Favourites;
