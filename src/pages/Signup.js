import React, {useState} from 'react'
import axios from 'axios'

export default function Signup(props) {

const[name, setName] = useState("")
const[email, setEmail] = useState("")
const[password, setPassword] = useState("")
const[password_confirmation, setPasswordConfirmation] = useState("")

const handleNameChange = (e) => {
    setName(e.target.value)
}

const handleEmailChange = (e) => {
    setEmail(e.target.value)
}

const handlePasswordChange = (e) => {
    setPassword(e.target.value)
}

const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/users',{
        "user":{
            "name": name,
            "email": email,
            "password":password,
            "password_confirmation": password_confirmation
        }
    })
    .then(res => {
        console.log(res.data)
        const auth_token = res.data.auth_token
        localStorage.setItem('auth_token', auth_token)
        props.history.push("/home")
    })
}

    return (
        <div>
            SIGN UP
            <form onSubmit={handleSubmit}>

                <input type="text"
                 placeholder="name"
                 value={name}
                 onChange={handleNameChange}
                /> <br/>

                <input type="text"
                 placeholder="Email"
                 value={email}
                 onChange={handleEmailChange}
                 /> <br/>

                <input type="password"
                 placeholder="password"
                 value={password}
                 onChange={handlePasswordChange}
                /> <br/>

                <input type="password"
                 placeholder="confirm password"
                 value={password_confirmation}
                 onChange={handlePasswordConfirmationChange}
                /> <br/>

                <button> Sign Up </button>
            </form>
            {name}
            {email}
            {password}
            {password_confirmation}
        </div>
    )
}