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

function App() {



  return (
   
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>

  );
}

export default App;
