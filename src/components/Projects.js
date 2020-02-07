import React, { Component } from 'react'
import axios from 'axios'
import avatar from '../stylesheets/images/avatar.jpg';
import '../stylesheets/projects.scss'
import $ from "jquery"

import { faPlus, faChevronCircleDown, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Projects extends Component {
    state = {
        projects: []
    }

    componentDidMount(){
        axios.get('/projects')
        .then(res => {
            console.log("projects here", res.data)
            const data = res.data
            this.setState({
                projects: res.data
            })
        })
    }

    render() {

        const openWindow = () => {
            $(".new-project").removeClass("hideWindow")
            $(".new-project").addClass("showWindow")
        }

        return (
            <div className="">
                <div className="projects">
                <div className="input-control">
                     <input className="search-project" placeholder="Search..." />
                </div>
                <button className="new-project-button" onClick={openWindow}> NEW PROJECT <span> <FontAwesomeIcon icon={faPlus} /> </span> </button>

                { this.state.projects.map( p => (
                    <div className="project-card" key={p.id} >
                    <div className="dev-photo">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="card-body">
                        <div className="card-header">
                            <p> {p.user.name} </p>
                            <p> {p.created_at} </p>
                        </div>
                        <p className="project-title"> {p.title} </p>
                        <p className="project-description"> {p.description} </p>
                        <div className="card-buttons">
                            <span> <FontAwesomeIcon icon={faCheck} /> </span>
                            <span id={p.id} > <FontAwesomeIcon icon={faPlus} /> </span>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        )
    }
}

// title
// created_at
// description
// stacks
// gitlink

// contribute
// open
