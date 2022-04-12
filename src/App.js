import logo from './logo.svg';
import './App.css';
import {AppCount} from './comps/counter/counter';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from 'react-router-dom';
import { Appheader } from './comps/header/header'

function App() {
  return (
    
      <div className="App">
        <Appheader></Appheader>
        {/* <AppCount></AppCount> */}
      </div>
    
  );
}

export default App;
