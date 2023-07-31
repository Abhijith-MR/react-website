import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import { BrowserRouter ,Router, Route } from 'react-router-dom';
import DP1 from './ProductsInfo/DP1';
import { Switch } from 'react-router-dom';
import Dedicated from './Components/Dedicated';

function App() {
  

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
  
      <Content /> 
      {/* <DP1/>  */}
    </div>
  );
}

export default App;