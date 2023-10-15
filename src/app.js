import React, { useEffect, useState } from "react";
import "./app.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// API_KEY = 22e1362
const API_URL = "http://www.omdbapi.com?apikey=22e1362";

// For static check copying one object from console
// const movie1 = {
//   Poster: "N/A",
//   Title: "Spiderman",
//   Type: "movie",
//   Year: "1990",
//   imdbID: "tt0100669",
// };
// Main functional component
const App = () => {
  // Making a lot of moviecards or simply reusing moviecard component
  const [movies, setMovies] = useState([]);
  // Async means it takes some time to fetch these movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []); // Empty dependency array helps to call this function only at the reload or start

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Fuck Man"
          onChange={() => {}}
        />
        <img src={searchIcon} alt="Search" onClick={() => {}} />
      </div>
      {/* <MovieCard movie1={movies[0]} /> 
         Insted of showing just one moviecard we can use mapping 
         .map iterates over eth in array  */}
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
