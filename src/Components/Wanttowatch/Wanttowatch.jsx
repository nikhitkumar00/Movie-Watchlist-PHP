import "./Wanttowatch.css";
import Moviegrid from "../Moviegrid/Moviegrid";

const Wanttowatch = () => {
    const wants = [
        {
          "Title": "The Flash",
          "Year": "2014–2023",
          "imdbID": "tt3107288",
          "Type": "series",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZjlkM2RjODgtNjRlYS00MDNjLTkxMzYtOWM4NjAwZTY2MjZiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg"
        },
        {
          "Title": "Flash Gordon",
          "Year": "1980",
          "imdbID": "tt0080745",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BN2Y4ZDBjMjEtZWQ0OS00NzYyLTg0M2ItMmUzYTEwN2RmMGVlXkEyXkFqcGdeQXVyMjgyOTI1ODY@._V1_SX300.jpg"
        },
        {
          "Title": "Ricki and the Flash",
          "Year": "2015",
          "imdbID": "tt3623726",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTY1NzIxNzkzM15BMl5BanBnXkFtZTgwMzAzNjIzNjE@._V1_SX300.jpg"
        },
        {
          "Title": "Jumpin' Jack Flash",
          "Year": "1986",
          "imdbID": "tt0091306",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMDJmYjMxODgtZjgwMi00N2E0LWE0N2UtMzhjMmJkNGZiNDNhXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
        },
        {
          "Title": "Flash of Genius",
          "Year": "2008",
          "imdbID": "tt1054588",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTI5MDI0NDAxOV5BMl5BanBnXkFtZTcwNzk4ODk3MQ@@._V1_SX300.jpg"
        },
        {
          "Title": "Flash Point",
          "Year": "2007",
          "imdbID": "tt0992911",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMDVhZDNkOWUtN2FhZC00NjM4LWJiY2QtZmJmNzNiZmNiNDk3XkEyXkFqcGdeQXVyMjg0MTI5NzQ@._V1_SX300.jpg"
        },
        {
          "Title": "The Flash",
          "Year": "1990–1991",
          "imdbID": "tt0098798",
          "Type": "series",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2MTc0MTAtN2VlYi00N2ZkLTlhNmUtMjcyZDg0YzNiYjEyXkEyXkFqcGdeQXVyMzU3MTc5OTE@._V1_SX300.jpg"
        },
        {
          "Title": "Flash Gordon: A Modern Space Opera",
          "Year": "2007–2008",
          "imdbID": "tt0959086",
          "Type": "series",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTY2Njc1MTgyNV5BMl5BanBnXkFtZTcwODYwNTI1MQ@@._V1_SX300.jpg"
        },
        {
          "Title": "Flash Gordon",
          "Year": "1936",
          "imdbID": "tt0027623",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BODUxMjQzZjMtNjJiMC00OTc2LTlmNWMtNGVkYTFjOTU3YjljXkEyXkFqcGdeQXVyMTE2NzA0Ng@@._V1_SX300.jpg"
        },
        {
          "Title": "Royal Flash",
          "Year": "1975",
          "imdbID": "tt0073639",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BOWMzMjBmYTItZTZkMC00NGM5LWE5ZjktMGI1OWQ4NmNiYjBkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
        }
      ]
    return (
      <div className="favouriteWrapper">
          <Moviegrid movies={wants} button1={"Favourites"} button2={"Watched"}/>
      </div>
  );
};

export default Wanttowatch;