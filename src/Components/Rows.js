import React, { useEffect, useState } from 'react'
import GetVideos from './GetVideos'
import axios from '../Axios';
import Request from '../Request';
import './StyleRow.css'


function Rows() {
  const [movies,setMovies] = useState([]);
  useEffect(()=>{
    async function getData(){
      const request = await axios.get(Request.fetchHorrorMovies);
      setMovies(request.data.results);
      console.log(request.data.results)
      return request;
    }
    getData();
  },[])
  return (
    <div className={'row'}>
     {movies.map((movie) => (<GetVideos movie = {movie}/> ))}
    </div>
  )
}

export default Rows