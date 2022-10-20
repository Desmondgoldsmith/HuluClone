import React from 'react'
import './GetVideos.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

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
         <h2 className='item'>{truncate(movie?.title||movie?.original_name,30)}</h2>
         <p className='item main----active'><AccessTimeFilledIcon/>{movie.release_date||movie.first_air_date} <FiberManualRecordIcon/>
          <ThumbUpIcon/>{movie.vote_count}</p>
    </div>
  )
}

export default GetVideos