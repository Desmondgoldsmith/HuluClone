import React from 'react'
import './GetVideos.css';

const base_url = "https://image.tmdb.org/t/p/original/";
function GetVideos({movie}) {
  return (
    <div className='GetVideos'>
        <img src={`${base_url}${movie.backdrop_path}`}
         alt = {movie.name}
         />
         {/* movie.overview */}
         <p className='item'>Something here... </p>
         <h2 className='item'>Movie Name</h2>
         <p className='item'>no of likes</p>
    </div>
  )
}

export default GetVideos