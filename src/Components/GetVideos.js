import React from 'react'
import './GetVideos.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const base_url = "https://image.tmdb.org/t/p/original/";
function GetVideos({movie}) {
     //truncate text
     function truncate(str, n){
        return str?.length > n ? str.substr(0,n-1) + "...":str;
     }
  return (
    <div className='GetVideos'>
       <div className = 'get'>
        <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
         alt = {movie.name}
         />
         </div>
         <p className='item'>{truncate(movie?.overview,50)} </p>
         <h2 className='item'>{movie.title||movie.original_name}</h2>
         <p className='item main--active'><ThumbUpIcon/>{movie.vote_count}</p>
    </div>
  )
}

export default GetVideos