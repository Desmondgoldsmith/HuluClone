import React, { useEffect, useState } from 'react';
import axios from '../Axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function Rows({fetchUrl}){
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
      async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      }
      fetchData();
    },[fetchUrl])
  return (
    <div className='row'>     
       <div className='row_poster'>
        {movies.map(movie=>(
          <img 
          className = 'poster_image'
           src = {`${base_url}${movie.poster_path}`}
           alt = {movie.name} />
        ))}
       </div>
    </div>
  )
}

export default Rows