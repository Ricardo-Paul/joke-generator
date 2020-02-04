import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            NAVBAR
            <Link to="/" > SIGN IN </Link>
            <Link to="/signup"> SIGN UP </Link>
        </div>
    )
}
