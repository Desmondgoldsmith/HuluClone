import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Rows from './Components/Rows';
import request from './Request';

function App({fetchUrl,selecteOptions}) {
  const [selectedOption,setSelectedOption] = useState(request.fetchHorrorMovies);
  return (
    <div className="app">
    <Header />
    <Navbar setSelectedOption = {setSelectedOption}/>
     <Rows selectedOption = {selectedOption}/>  
    </div>
  );
}

export default App;

// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material
//npm i react-flip-move
