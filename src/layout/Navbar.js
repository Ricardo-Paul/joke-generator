import React, { useReducer, useContext } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../stylesheets/navbar.scss'
// redux stuff
import { connect } from 'react-redux'
import store from '../redux/store'

 function Navbar({authenticated}) {
     console.log("props", authenticated)
    return (
        <div className="navbar">
            <div className="brand">SoftBuilders</div>
            <div className="links">
                {authenticated && <Link className="my-projects" to="/myprojects"> My Projects </Link> }
                     <Link className="signin" to="/" > SIGN IN </Link>
                     <Link className="signup" to="/signup"> SIGN UP </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { authenticated: state.authenticated };
  };

export default connect(mapStateToProps)(Navbar)