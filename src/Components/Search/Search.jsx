import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Moviegrid from "../Moviegrid/Moviegrid";
import "./Search.css";
import { Favorite } from "@mui/icons-material";
import Favorites from "../Favorites/Favourites";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMovies = async () => {
    const URL = `http://www.omdbapi.com/?apikey=9027a6a0&s=${search}`;
    const res = await fetch(URL);
    const data = await res.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  const addToFavourites = (movie) => {
    setFavourites((prevFavourites) => [...prevFavourites, movie]);
  };

  useEffect(() => {
    getMovies();
  }, [search]);

  return (
    <div className="searchWrapper">
      <TextField
        label="Search..."
        value={search}
        autoFocus
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <div className="searchContent">
        <Moviegrid movies={movies} button1={"Favourite"} button2={"Watched"} addToFavourites={addToFavourites} />
      </div>
    </div>
  );
};

export default Search;
