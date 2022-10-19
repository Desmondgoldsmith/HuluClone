import React from 'react'
import './GetVideos.css';

const base_url = "https://image.tmdb.org/t/p/original/";
function GetVideos({movie}) {
  return (
    <div className='GetVideos'>
        <img src={`${base_url}${movie.backdrop_path}`}
         alt = {movie.name}
         />
         <p>{movie.overview} </p>
         <h2>{movie.name}</h2>
         <p>no of likes</p>
    </div>
  )
}

export default GetVideos