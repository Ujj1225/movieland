import React, { useEffect } from "react";
import "./app.css";
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

  return <h1>App</h1>;
};

export default App;
