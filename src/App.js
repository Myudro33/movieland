import { React, useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import useKeypress from "react-use-keypress";
import { options } from './fetchData'
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
const API_URL = "https://www.omdbapi.com?apikey=b6003d8a";


const App = () => {
  const text = 'Home'
  return (
    <div>
      <div className="navbar">
        <a style={{textDecoration:'none'}} href="/">
        <h1>{text}</h1>
      </a>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies/:title" element={<MovieDetails />} />
      </Routes>
    </div>
  )
};
export default App;
