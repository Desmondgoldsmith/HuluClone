import './App.css';
import Rows from './Components/Rows';
import request from './Request';

function App({fetchUrl}) {
  return (
    <div className="app">
     <Rows fetchUrl = {request.fetchTrending} />  
    </div>
  );
}

export default App;
