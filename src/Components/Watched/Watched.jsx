import "./Watched.css";
import Moviegrid from "../Moviegrid/Moviegrid";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Watched = () => {
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        toast.dismiss();

        toast.promise(
          fetch("http://localhost/movietracker_backend/watched.php")
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
              setWatched(movieData);
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

  return (
    <div className="favouriteWrapper">
      <Moviegrid movies={watched} button1={"Remove"} button2={"idk"} />
    </div>
  );
};

export default Watched;