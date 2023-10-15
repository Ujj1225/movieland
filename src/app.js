import React, { useEffect } from "react";
import "./app.css";
import searchIcon from "./search.svg";
// API_KEY = 22e1362
const API_URL = "http://www.omdbapi.com?apikey=22e1362";

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
        <img
        src = {searchIcon}
        alt="Search"
        onClick={()=>{}}
        />
      </div>
    </div>
  );
};

export default App;
