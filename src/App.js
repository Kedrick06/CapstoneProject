import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Signin from './Components/Signin';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import ProductPage from './Components/ProductPage';
import ShopProvider from './Components/shopContext'
import Cart from './Components/Cart'
import Loading from './Components/Loading'


const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

function App() {
  return (
    <ShopProvider>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>

    <BrowserRouter>
    <div className="App">
      <Navigation/>
      <Switch>
      <Route path='/' exact = {true} component={Home} />
      <Route path='/Signin' exact = {true} component={Signin} />
      <Route path='/ProductPage' exact = {true} component={ProductPage}/>
      <Route path='/Cart' exact= {true} component={Cart}/>
      <Cart/>
      <Loading/>
      </Switch>
      <Footer/>
      </div>
    </BrowserRouter>
    </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
