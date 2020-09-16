import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation/>
      <Route path='/' exact = {true} component={Home} />
        
    </div>
    </BrowserRouter>
  );
}

export default App;
