import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Login(props) {

const[email, setEmail] = useState("")
const[password, setPassword] = useState("")
const[error, setError] = useState("")
const[loading, setLoading] = useState(false)

const handleEmailChange = (e) => {
	setEmail(e.target.value)
}
const handlePasswordChange = (e) => {
	setPassword(e.target.value)
}

const handleSubmit = (e) => {
	setLoading(true)
	e.preventDefault()
	axios.post('/sessions',{
		"sessions":{
			"email": email,
			"password": password
		}
	})
	.then(res => {
		console.log(res.data)
		setError("logged in")
		setLoading(false)
		const auth_token = res.data.auth_token
		localStorage.setItem('auth_token', auth_token)
		props.history.push('/home');
	})
	.catch(error => {
		if (error){
			setError("Invalid Credentials, Please try again")
		}
		setLoading(false)
	})
}

    return (
        <div>
            LOGIN <br/>
					<form onSubmit={handleSubmit}>
            <input
              placeholder="Enter email"
							type="text" 
							name="email"
							value={email}
							onChange={handleEmailChange}
							autoComplete="false"
            /> <br/>

            <input
							placeholder="Password" 
							type="password"
							name="password"
							value={password}
							onChange={handlePasswordChange}
							/> <br />
            <button> Submit </button>
						{error}
						{loading?(<p>loading</p>) : ""}
					</form>
        </div>
    )
}
