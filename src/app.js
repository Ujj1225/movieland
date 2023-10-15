import React, { useEffect } from "react";
import "./app.css";
import searchIcon from "./search.svg";
// API_KEY = 22e1362
const API_URL = "http://www.omdbapi.com?apikey=22e1362";

// For static check copying one object from console
const movie1 = {
  Poster: "N/A",
  Title: "Spiderman",
  Type: "movie",
  Year: "1990",
  imdbID: "tt0100669",
};
// Main functional component
const App = () => {
  // Async means it takes some time to fetch these movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []); // Empty dependency array helps to call this function only at the reload or start

  return (
    <div classname="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Fuck Man"
          onChange={() => {}}
        />
        <img src={searchIcon} alt="Search" onClick={() => {}} />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie1.Title}
            />
          </div>
          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
