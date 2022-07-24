import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { options, youtubeOptions } from '../fetchData'
import { fetchData } from '../fetchData'

const MovieDetails = () => {
  const { title } = useParams()
  const [video, setvideo] = useState('')
  const [movieInfo, setmovieInfo] = useState('')
  useEffect(() => {
    const fetchMovieTrailer = async () => {
      const movieTrailer = await fetch(`https://1mdb-data-searching.p.rapidapi.com/om?t=${title}`, options)
        .then(response => response.json())
        .then(response => {
          setmovieInfo(response)

        }
        )
        .catch(err => console.error(err));

      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${title}trailer`, youtubeOptions)
      setvideo(exerciseVideosData.contents[0].video.videoId)
    }

    fetchMovieTrailer()
    console.log(movieInfo);
  }, [title])

  return (
    <div className=' flex w-full sm:h-auto  md:h-[80vh] justify-center items-center'>
      <div className='flex w-[90%] h-96 sm:items-center sm:flex-col md:flex-row'>
        <div className='md:w-[50%] md:h-full sm:h-96 sm:w-[95%]'>
          <iframe className='w-full md:h-full sm:h-52'
            src={`https://www.youtube.com/embed/${video}`}
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className='flex flex-col p-3 text-white md:w-[50%] sm:w-[95%]  md:h-full justify-between'>
          <div className='flex justify-between'>
            <h2 className='inline'>{movieInfo.Title}</h2>
            <p>{`Released: ${movieInfo.Released}`}</p>
          </div>
          <div className='flex justify-between'>
            <h2 className='inline'>{`Awards ${movieInfo.Awards}`}</h2>
            <p>{`BoxOffice ${movieInfo.BoxOffice}`}</p>
          </div>
          <div className='flex justify-between'>
            <h2 className='inline'>{`Locations: ${movieInfo.Country}`}</h2>
            <p>{movieInfo.Language}</p>
          </div>
          <div className='flex justify-between'>
            <p>{`Actors: ${movieInfo.Actors}`}</p>
            <p>{`Writer: ${movieInfo.Writer}`}</p>
          </div>
          <div className='flex justify-between'>
            <p>{`Genre: ${movieInfo.Genre}`}</p>
            <p>{`Runtime: ${movieInfo.Runtime}`}</p>
          </div>
          <div className='flex justify-between'>
            <p>{`Type: ${movieInfo.Type}`}</p>
            <p>{`Director: ${movieInfo.Director}`}</p>
          </div>
          <div className='flex justify-between'>
            <p>{`imdbRating: ${movieInfo.imdbRating}(${movieInfo.imdbVotes})`}</p>
            <p>{`imdbId: ${movieInfo.imdbID}`}</p>
          </div>
          <div className='flex justify-between'>
            <p>
            {movieInfo.Plot}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails