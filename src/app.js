import React from "react";
import { useEffect } from "react";

// key: 22e1362
const API_URL = "http://www.omdbapi.com?apikey=22e1362"


// Main functional component
const App = () =>
{
    // Async means it takes some time to fetch these movies
    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL} & s=${title}`);
        const data = await response.json();

        console.log(data);
    } 
    useEffect(()=>{
        searchMovies('Spiderman');
    }, []); //Empty dependency array helps to call this function only at the reload or start
    return(
        <h1>
            App
        </h1>
    )
}

export default App;