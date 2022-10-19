import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import './Header.css';
function Header() {
  return (
    <div className='header'>
      <div className='header_icons'>
        <div className='header_icon main--active'>
        <HomeIcon />
        <p>Home</p>
    </div>
        <div className='header_icon'>
        <FlashOnIcon />
        <p>trending</p>
    </div>
        <div className='header_icon'>
        <LiveTvIcon />
        <p>Verified</p>
    </div>
        <div className='header_icon'>
        <VideoLibraryIcon />
        <p>Playlists</p>
    </div>
        <div className='header_icon'>
        <SearchIcon />
        <p>Search</p>
    </div>
        <div className='header_icon'>
        <PersonIcon />
        <p>User</p>
    </div>
      </div>
          <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="Hulu"></img>
    </div>
  )
}

export default  Header