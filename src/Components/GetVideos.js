import React from 'react'

const base_url = "https://image.tmdb.org/t/p/original/";
function GetVideos({movies}) {
  return (
    <div className='GetVideos'>
        <img src={`${base_url}${movies.backdrop_path}`}
         alt = {movies.name}
         />
         <p>This movie is about killing 👹 </p>
         <h2>MOvie Title</h2>
         <p>no of likes</p>
    </div>
  )
}

export default GetVideos