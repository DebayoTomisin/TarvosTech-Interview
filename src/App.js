import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home"
import SingleItem from "./pages/SingleItem"
import Cart from "./pages/Cart"

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/item/:slug" component={SingleItem}/>
        <Route exact path="/checkout" component={Cart}/>
      </Switch>     
    </>
  );
}

export default App;
