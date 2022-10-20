import React, { useEffect, useState } from 'react'
import GetVideos from './GetVideos'
import axios from '../Axios';
import './StyleRow.css'


function Rows({selectedOption}) {
  const [movies,setMovies] = useState([]);
  useEffect(()=>{
    async function getData(){
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      // console.log(request.data.results)
      return request;
    }
    getData();
  },[selectedOption])
  return (
    <div className={'row'}>
     {movies.map((movie) => (<GetVideos movie = {movie}/> ))}
    </div>
  )
}

export default Rows