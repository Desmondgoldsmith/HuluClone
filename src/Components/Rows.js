import React from 'react'
import GetVideos from './GetVideos'




function Rows({movie}) {
  return (
    <div className={'row'}>
      <GetVideos /> 
    </div>
  )
}

export default Rows