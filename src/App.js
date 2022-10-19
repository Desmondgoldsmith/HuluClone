import './App.css';
import Header from './Components/Header';
import Rows from './Components/Rows';
import request from './Request';

function App({fetchUrl}) {
  return (
    <div className="app">
    <Header />
     {/* <Rows fetchUrl = {request.fetchNetflixOriginals} />   */}
    </div>
  );
}

export default App;

// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material
