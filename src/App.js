import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Signin from './Components/Signin';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import ThreadPage from './Components/ThreadPage';
import ShopProvider from './Components/shopContext';





const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

function App() {
  return (
    <ShopProvider>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <Router>
    <div className="App">

      <Navigation/>
      <div class="container">

        <div class="jumbotron">
            <h1>FIRETHREADS</h1>
            <p>PROVIDING ALL THE LATEST IN MEN'S FASHION EST. 2020</p>

        </div>
      </div>
      
      <Switch>
      <Route path='/' exact = {true} component={Home} />
      <Route path='/Signin' exact = {true} component={Signin} />
      <Route path="/product/:id" exact = {true} component={ThreadPage}/>
      </Switch>
      <Footer/>
      </div>
    </Router>
    </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
