import React, { Component } from 'react'
import axios from 'axios'
import '../stylesheets/user.scss'
import $ from 'jquery'
import profile from '../stylesheets/images/profile.png'
// import { DirectUpload } from 'activestorage';
// import { DirectUpload } from 'activestorage'

import { faCoffee, faChevronCircleDown, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default class User extends Component {

    state = {
        id: "",
        name: "",
        email: "",
        created_at: "",
        picture: '',
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
            const data = res.data
            console.log(data)
            this.setState({
                id: data.current_user.id,
                name: data.current_user.name,
                email: data.current_user.email,
                created_at: data.current_user.created_at,
                picture: data.picture
                // projects: userData.projects,
                // contributed_projects: userData.contributed_projects
            })
        })
    }

    toggleProjects = () => {
        $(".user-projects").toggle()
    }

    render() {

        const handleChange = (e) => {
            const auth_token = localStorage.getItem("auth_token")
            const formData = new FormData()
            const picture = e.target.files[0]
            formData.append('picture', picture, picture.name)

            axios.put(`/upload/${5}`, formData, {
                headers: {Authorization: auth_token}
            })
            .then(res => {
                const data = res.data
                this.setState({
                    picture: data.picture
                })
            })
            .catch( err => {
                console.log(err)
            })
        }

        const triggerInput = () => {
           const inputButton = document.getElementById('input-button')
            inputButton.click()
        }

        return (
            <div className="user">
                <div className="profile">
                  <img src={`http://localhost:3000/${this.state.picture}`} alt="Profile Picture"/>
                  <span onClick={triggerInput} > <FontAwesomeIcon icon={faEdit} /> </span>
                </div>

                <input type="file" name="picture" onChange={handleChange} id="input-button" hidden  />

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

                </div>
            </div>
        )
    }
}

// 