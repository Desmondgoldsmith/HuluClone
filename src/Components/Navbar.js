import React from 'react'
import './Navbar.css';
import request from '../Request';

function Navbar({selectedOption}) {
  return (
    <div className='navbar'>
    <h3 onClick={()=>selectedOption(request.fetchTrending)} className='navbar_items'>Trending</h3>
    <h3 onClick={()=>selectedOption(request.fetchTopRated)} className='navbar_items'>Top Rated</h3>
    <h3 onClick={()=>selectedOption(request.fetchActionMovies)} className='navbar_items'>Action</h3>
    <h3 onClick={()=>selectedOption(request.fetchComedyMovies)} className='navbar_items'>Comedy</h3>
    <h3 className='navbar_items'>Horror</h3>
    <h3 className='navbar_items'>Romance</h3>
    <h3 className='navbar_items'>Mystry</h3>
    <h3 className='navbar_items'>Sci-fi</h3>
    <h3 className='navbar_items'>Western</h3>
    <h3 className='navbar_items'>Animation</h3>
    <h3 className='navbar_items'>Movie</h3>
    </div>
  )
}

export default Navbar