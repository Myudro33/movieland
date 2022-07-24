import React from 'react'
import {Link} from 'react-router-dom'

const MovieCard = ({ movie1 }) => {
  return (
    <Link className="movie" to={`/movies/${movie1.Title}`}>
      <div>
        <p>{movie1.Year}</p>
      </div>
      <div>
        <img alt={movie1.Title} src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} />
      </div>
      <div>
        <span>{movie1.Type}</span>
        <h3>{movie1.Title}</h3>
      </div>
    </Link>
  )
}

export default MovieCard