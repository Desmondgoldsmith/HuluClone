import React from 'react'

const base_url = "https://image.tmdb.org/t/p/original/";
function GetVideos({movie}) {
  return (
    <div className='GetVideos'>
        <img src={`${base_url}${movie.backdrop_path}`}
         alt = {movie.name}
         />
         <p>This movie is about killing 👹 </p>
         <h2>MOvie Title</h2>
         <p>no of likes</p>
    </div>
  )
}

export default GetVideos