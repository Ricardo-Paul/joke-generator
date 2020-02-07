import React from 'react'
import axios from 'axios'

export default function Logout(props) {
    const handleLogOut = () => {
        axios.delete('/sessions',{
            headers:{
                Authorization: localStorage.getItem('auth_token')
            }
        })
        localStorage.removeItem('auth_token')
        props.history.push("/")
    }
    return (
        <div>
            <button onClick={handleLogOut}>Log out</button>
        </div>
    )
}
