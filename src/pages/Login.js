import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'

// redux stuff
import { setAuthenticated } from '../redux/actions/actions'
import { connect } from 'react-redux'
import { SET_AUTHENTICATED } from '../redux/actions/action-types'

const Login = ({setAuth, history}) => {

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
	console.log({setAuth})
	axios.post('/sessions',{
		"sessions":{
			"email": email,
			"password": password
		}
	})
	.then(res => {
		const auth_token = res.data.auth_token
		localStorage.setItem('auth_token', auth_token)
		setAuth()
		history.push('/home')
	})
	.catch(error => {
		if (error){
			// 
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

			<button> Submit </button>
			</form>
    )
}

function mapDispatchToProps(dispatch) {
	return {
	  setAuth: () => dispatch(setAuthenticated())
	};
  }

export default connect(null, mapDispatchToProps)(Login)