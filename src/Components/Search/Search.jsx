import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import Moviegrid from "../Moviegrid/Moviegrid";
import "./Search.css";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getMovies = async () => {
    const URL = `http://www.omdbapi.com/?apikey=9027a6a0&s=${search}`;
    const res = await fetch(URL);
    const data = await res.json();
    if (data.Search) {
      setMovies(data.Search);
    }
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
        <Moviegrid movies={movies} button1={"Favourite"} button2={"Watched"}/>
      </div>
    </div>
  );
};

export default Search;
