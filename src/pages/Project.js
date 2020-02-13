import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/project.scss'

import {faChevronCircleDown, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Project extends Component {

    state = {
        singleProject: {},
        singleProjectPicture:'',
        contributors:[]
    }

    componentDidMount(){
        const {id} = this.props.match.params
        axios.get(`/projects/${id}`)
        .then(res => {
            console.log(res.data)
            this.setState({
                singleProject: res.data,
                singleProjectPicture: res.data.user.picture,
                singleProjectName: res.data.user.name,
                singleProjectEmail: res.data.user.email,
                contributors: res.data.project_contributors
            })
        })
    }

    render() {
        const showGit = () => {
            document.querySelector(".git").style.top = "1rem"
        }

        return (
            <div className="project" >

                <div className="left">
                    <div className="dev-info">
                        <div className="dev-picture">
                            <img src={`http://localhost:3000//${this.state.singleProjectPicture}`} />
                        </div>
                        <div className="dev-n">
                            Project by:
                            <p className="dev-name"> {this.state.singleProjectName} <br/>  {this.state.singleProjectEmail} </p>
                        </div>
                </div>

                <div className="project-info">
                        <p className="pro-title"> {this.state.singleProject.title} </p>
                        <p className="pro-description"> <span> Description </span> {this.state.singleProject.description} <br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor inventore perspiciatis doloremque cupiditate, tempora vero mollitia eaque aliquam aspernatur sint quod autem nihil quasi explicabo numquam odit repellat non dolore!</p>
                        <p className="pro-stacks">
                            <div className="stacks-text"> Stacks </div>
                            {this.state.singleProject.stacks}
                        </p>
                </div>

                <button className="con-button" onClick={showGit} > Help Build This Software </button>
                <div className="git-wrapper">
                    <span className="git"> <FontAwesomeIcon icon={faGithub} /> </span>
                </div>
                </div>

                <div className="right">
                    <span> Developpers </span>
                    <span> <FontAwesomeIcon icon={faUsers}/>  </span>
                    <div className="pro-contributors">
                        {
                        this.state.contributors.map( c => (
                            <div className="con-picture">
                                <img src={`http://localhost:3000//${c.picture}`} />
                                <p className="con-name"> {c.name} </p>
                            </div>
                        ))
                        }
                    </div>
                </div>

            </div>
        )
    }
}
