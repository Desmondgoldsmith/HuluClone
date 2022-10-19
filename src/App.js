import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Rows from './Components/Rows';
import request from './Request';

function App({fetchUrl}) {
  return (
    <div className="app">
    <Header />
    <Navbar />
     <Rows />  
    </div>
  );
}

export default App;

// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material
