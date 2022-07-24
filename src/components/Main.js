import { React, useEffect, useState} from "react";
import "../App.css";
import searchIcon from "../search.svg";
import MovieCard from "../MovieCard";
import useKeypress from "react-use-keypress";
import {options} from '../fetchData'
const API_URL = "https://www.omdbapi.com?apikey=b6003d8a";

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    

  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
    };
    useEffect(() => {
      searchMovies('spider')
    }, []);
  useKeypress('Enter',()=>{
    searchMovies(searchTerm)
  })
    return (
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={searchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
          
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((card) => (
              <MovieCard movie1={card} key={card.imdbID} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h1>No movies found</h1>
          </div>
        )}
      </div>
    );
}

export default Main