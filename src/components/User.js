import React, { Component } from 'react'
import axios from 'axios'
import '../stylesheets/user.scss'
import $ from 'jquery'
import profile from '../stylesheets/images/profile.png'

import { faCoffee, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default class User extends Component {

    state = {
        id: "",
        name: "",
        email: "",
        created_at: "",
        projects: [],
        contributed_projects: []
    }

    componentDidMount(){
        const auth_token = localStorage.getItem("auth_token")
        axios.get('/profile',{
            headers: {
                Authorization: auth_token
            }
        })
        .then(res => {
            console.log("data here",res.data)
            const userData = res.data
            this.setState({
                id: userData.id,
                name: userData.name,
                email: userData.email,
                created_at: userData.created_at,
                projects: userData.projects,
                contributed_projects: userData.contributed_projects
            })
        })
    }

    toggleProjects = () => {
        $(".user-projects").toggle()
    }

    render() {
        return (
            <div className="user">
                <div className="profile">
                  <img src={profile} alt=""/>
                </div>
                <div className="info">
                    <p className="name"> {this.state.name} </p>
                    <p className="email">{this.state.email}</p>
                </div>
                <div className="social">
                    <span> <FontAwesomeIcon icon={faFacebook} /> </span>
                    <span> <FontAwesomeIcon icon={faGithub} /></span>
                    <span> <FontAwesomeIcon icon={faTwitter} /> </span>
                </div>
                {/* <div className="project-header"> PROJECTS </div> */}
                <div className="user-projects">

                    <div className="my-projects">
                        <p className="p-owner"> Personal projects </p>
                        {this.state.projects.length > 0 ? (
                            <ul>
                            {this.state.projects.map( p =>  (
                                <li key={p.id} > <span>{p.title}</span></li>
                            ))}
                        </ul>
                        ) : (<p>No projects</p>)}
                    </div>

                    <div className="contribute-on">
                    <p className="p-owner"> Collaborating on </p>
                    {this.state.contributed_projects.length > 0 ? (
                            <ul>
                            {this.state.projects.map( p =>  (
                                <li key={p.id}> <span>{p.title}</span></li>
                            ))}
                        </ul>
                        ) : (<p>No projects</p>)}
                    </div>

                </div>
                <div className="profile-footer">
                    <p className="join">Join since <span className="date"> {this.state.created_at} </span> </p>
                    <span onClick={this.toggleProjects} className="show-projects" > <FontAwesomeIcon icon={faChevronCircleDown} size="lg" /> </span>
                </div>
            </div>
        )
    }
}
