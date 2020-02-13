import React, { useReducer, useContext } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Context } from '../context'
import '../stylesheets/navbar.scss'

export default function Navbar() {

    const [state, setState] = useContext(Context)
 
    return (
        <div className="navbar">
            <div className="brand">SoftBuilders</div>
            <div className="links">
                     <Link className="my-projects" to="/myprojects"> My Projects </Link>
                     <Link className="signin" to="/" > SIGN IN </Link>
                     <Link className="signup" to="/signup"> SIGN UP </Link>
            </div>
        </div>
    )
}

// TODO: Color scheme.
// User profile
// Navbar