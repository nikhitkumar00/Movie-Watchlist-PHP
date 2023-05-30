import "./Wanttowatch.css";
import Moviegrid from "../Moviegrid/Moviegrid";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Wanttowatch = () => {
  const [want, setWant] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        toast.dismiss();

        toast.promise(
          fetch("http://localhost/movietracker_backend/wanttowatch.php")
            .then((response) => response.json())
            .then((data) => {
              const urls = data.map(
                (imdbID) =>
                  `http://www.omdbapi.com/?apikey=9027a6a0&i=${imdbID}`
              );
              return Promise.all(urls.map((url) => fetch(url))).then(
                (responses) =>
                  Promise.all(responses.map((response) => response.json()))
              );
            })
            .then((movieData) => {
              setWant(movieData);
              return movieData;
            }),
          {
            pending: "Loading...",
            success: "Movies fetched successfully!",
            error: "Error fetching movies",
          }
        );
      } catch (error) {
        console.error("Error fetching movie data:", error);
        toast.error("Error fetching movie data");
      }
    };

    fetchMovies();
  }, []);

  const handleRemove = async (movieId) => {
    try {
      const response = await fetch(`http://localhost/movietracker_backend/removewanttowatch.php?movieId=${movieId}`);
      const data = await response.json();

      if (data.success) {
        toast.success('Movie removed successfully');

        const updatedMovies = want.filter(movie => movie.imdbID !== movieId);
        setWant(updatedMovies);
      } else {
        toast.error('Error removing movie');
      }
    } catch (error) {
      console.error('Error removing movie:', error);
      toast.error('Error removing movie');
    }
  };

  const handleWatched = async (imdbID) => {
    try {
      const response = await fetch(
        "http://localhost/movietracker_backend/addwatched.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ imdbID }),
        }
      );

      if (response.ok) {
        toast.success("Movie marked as watched!");
      } else {
        toast.error("Error marking movie as watched");
      }
    } catch (error) {
      console.error("Error marking movie as watched:", error);
      toast.error("Error marking movie as watched");
    }
  };

  return (
    <div className="favouriteWrapper">
      <Moviegrid
        movies={want}
        button1={"Remove"}
        button2={"Watched"}
        onButton1Click={handleRemove}
        onButton2Click={handleWatched}
      />
    </div>
  );
};

export default Wanttowatch;
