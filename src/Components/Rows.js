import React, { useEffect, useState } from 'react'
import axios from '../Axios';
import './StyleRow.css';


const base_url = "https://image.tmdb.org/t/p/original/";
function Rows({fetchUrl}) {
  const [movies,setMovies] = useState([]);
  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results)
      return request;
    }
    fetchData();
  },[fetchUrl])
  return (
    <div className={'row'}>
     <div className={'row_posters'}>
       {
        movies.map(movie=>(
          <img
           className={`image_poster`}
           src={`${base_url}${movie.poster_path}`}
           key={movie.id} 
           alt = {movie.name} 
           />
        ))
       }
       <h4>{movies.overview}</h4>
       <h2>{movies.original_name}</h2>
     </div>
    </div>
  )
}

export default Rows