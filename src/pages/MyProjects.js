import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/myprojects.scss'
import { Link } from 'react-router-dom'

import { faTrash, faTasks, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class MyProjects extends Component {

    state = {
        myprojects:[]
    }

    componentDidMount(){
        const auth_token = localStorage.getItem("auth_token")
        axios.get('/myprojects',{
            headers: {
                Authorization: auth_token
            }
        })
        .then(res => {
            const data = res.data
            this.setState({
                myprojects: res.data
            })            
        })
    }

    render() {
        const deleteProject = (id) => {
            const auth_token = localStorage.getItem("auth_token")
            axios.delete(`/projects/${id}`, {
                headers: {
                    Authorization: auth_token
                }
            })
            let tempProjects = this.state.myprojects.filter( p => p.id !== id )
            this.setState({
                myprojects: tempProjects
            })
        }

        return (
            <div className="myprojects">
                <p className="pro-text">
                   MANAGE PROJECTS
                   <span> <FontAwesomeIcon icon={faTasks} />  </span>
                   <span> <Link to="/home" ><FontAwesomeIcon icon={faHome} /></Link> </span>
                </p>
                <ul className="project-list" >
                    <input placeholder="find..." />
                    {this.state.myprojects.map ( p =>(
                        <li key={p.id} className="project-list-item" > {p.title} 
                            <button className="trash-button" onClick={() => deleteProject(p.id)} > <FontAwesomeIcon icon={faTrash} /> </button>
                        </li>
                    ))
                    }
                </ul>
            </div>
        )
    }
}
