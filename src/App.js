import React, { useState, useEffect} from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { ContextController, Context } from './context';
import Logout from './components/Logout';
import Project from './pages/Project';
import MyProjects from './pages/MyProjects';


// Redux Stuff
import storeActionExport from './redux/storeActionExport';
import { Provider } from 'react-redux';
import store from './redux/store';


export default function App() {
  return (
    <Provider store={store} >
        <Router>
        <Navbar />
        <div className="App">
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home}/>
          <Route path="/logout" component={Logout} />
          <Route path="/project/:id" component={Project} />
          <Route path="/myprojects"  component={MyProjects} />
        </div>
      </Router>
    </Provider>
  )
}
