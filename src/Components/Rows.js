import React, { useState } from 'react'

function Rows(){
    const [movies,setMovies] = useState([]);
  return (
    <div className='row'>     
       <div className='row_poster'>
       </div>
    </div>
  )
}

export default Rows