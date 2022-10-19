import React from 'react'
import GetVideos from './GetVideos'




function Rows({movies}) {
  return (
    <div className={'row'}>
      <GetVideos movies = {movies}/> 
    </div>
  )
}

export default Rows