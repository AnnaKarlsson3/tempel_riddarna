import React, { useState, createContext, useEffect } from "react";
import './App.css';
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import './sass/style.scss'
import Topbar from './components/TopBar'
import StickyFooter from './components/Sticky_Footer'

function App() {



  return (
   
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <StickyFooter/>
    </Router>

  );
}

export default App;
