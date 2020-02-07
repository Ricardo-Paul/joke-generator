import React, { useState, useEffect} from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { ContextController, Context } from './context';
import Logout from './components/Logout';

export default function App() {
  return (
    <ContextController>
      {/* <Context.Consumer> */}
      <Router>
        <Navbar />
        <div className="App">
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home}/>
          <Route path="/logout" component={Logout} />
        </div>
      </Router>
      {/* </Context.Consumer> */}
    </ContextController>
  )
}
