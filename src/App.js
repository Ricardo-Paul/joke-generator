import React, { useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './layout/Navbar';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
    <Navbar />
      <div className="App">
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home}/>
      </div>
    </Router>
  )
}
