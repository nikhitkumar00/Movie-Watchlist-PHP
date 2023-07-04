import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Moviegrid from "../Moviegrid/Moviegrid";
import "./Search.css";

const Search = () => {
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState("");

	const getMovies = async () => {
		const URL = `https://www.omdbapi.com/?apikey=9027a6a0&s=${search}`;
		const res = await fetch(URL);
		const data = await res.json();
		if (data.Search) {
			setMovies(data.Search);
		}
	};

	useEffect(() => {
		getMovies();
	}, [search]);

	const handleFavourite = async (movieId) => {
		try {
			const response = await fetch(
				`http://localhost/movietracker_backend/addfavourite.php?movieId=${movieId}`
			);
			const data = await response.json();

			if (data.success) {
				console.log("Movie added to favourites");
			} else {
				console.error("Error adding movie to favourites");
			}
		} catch (error) {
			console.error("Error adding movie to favourites:", error);
			toast.notify("Database not connected");
		}
	};

	const handleWantowatch = async (movieId) => {
		try {
			const response = await fetch(
				`http://localhost/movietracker_backend/addwanttowatch.php?movieId=${movieId}`
			);
			const data = await response.json();

			if (data.success) {
				console.log("Movie marked as want to watch");
			} else {
				console.error("Error marking movie as want to watch");
			}
		} catch (error) {
			console.error("Error marking movie as want to watch:", error);
			toast.notify("Database not connected");
		}
	};

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
				<Moviegrid
					movies={movies}
					button1={"Favourite"}
					button2={"Wishlist"}
					onButton1Click={(movieId) => handleFavourite(movieId)}
					onButton2Click={(movieId) => handleWantowatch(movieId)}
				/>
			</div>
		</div>
	);
};

export default Search;
