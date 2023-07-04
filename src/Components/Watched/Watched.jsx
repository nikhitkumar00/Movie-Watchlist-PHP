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
							return Promise.all(
								urls.map((url) => fetch(url))
							).then((responses) =>
								Promise.all(
									responses.map((response) => response.json())
								)
							);
						})
						.then((movieData) => {
							setWatched(movieData);
							return movieData;
						}),
					{
						pending: "Loading...",
						success: "Movies fetched successfully!",
						error: "Database not connected",
					}
				);
			} catch (error) {
				console.error("Error fetching movie data:", error);
				toast.error("Database not connected");
			}
		};

		fetchMovies();
	}, []);

	const handleRemove = async (movieId) => {
		try {
			const response = await fetch(
				`http://localhost/movietracker_backend/removewatched.php?movieId=${movieId}`
			);
			const data = await response.json();

			if (data.success) {
				toast.success("Movie removed successfully");

				const updatedMovies = watched.filter(
					(movie) => movie.imdbID !== movieId
				);
				setWatched(updatedMovies);
			} else {
				toast.error("Error removing movie");
			}
		} catch (error) {
			console.error("Error removing movie:", error);
			toast.error("Database not connected");
		}
	};

	return (
		<div className="favouriteWrapper">
			<Moviegrid
				movies={watched}
				button1={"Remove"}
				button2={"idk"}
				onButton1Click={handleRemove}
			/>
		</div>
	);
};

export default Watched;
