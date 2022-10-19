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
    <div className='Header'>
      <div className='header_details'>
        <div className='header_icon'>
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
    <img src="https://www.kindpng.com/picc/m/151-1513487_hulu-logo-white-transparent-hd-png-download.png" alt="Hulu"></img>
      </div>
    </div>
  )
}

export default  Header