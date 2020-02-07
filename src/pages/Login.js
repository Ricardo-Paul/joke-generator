import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { Context } from '../context'

export default function Login(props) {
const [state, setState] = useContext(Context)

const[email, setEmail] = useState("")
const[password, setPassword] = useState("")

const handleEmailChange = (e) => {
	setEmail(e.target.value)
}
const handlePasswordChange = (e) => {
	setPassword(e.target.value)
}

const handleSubmit = (e) => {
	e.preventDefault()
	setState({loading: true})
	axios.post('/sessions',{
		"sessions":{
			"email": email,
			"password": password
		}
	})
	.then(res => {
		setState({authenticated: true})
		const auth_token = res.data.auth_token
		localStorage.setItem('auth_token', auth_token)
		
		console.log(state)
		props.history.push('/home');
	})
	.catch(error => {
		if (error){
			setState({error:"ERROR"})
			console.log(state)
		}
	})
}

    return (
			<form onSubmit={(e) => handleSubmit(e)}>
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
			{state.error}
			<button> Submit </button>
			{state.loading ? (<p>loading</p>) : ""}
			</form>
    )
}
