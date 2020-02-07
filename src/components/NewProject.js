import React, { Component } from 'react'
import '../stylesheets/newproject.scss'
import $ from 'jquery'
import axios from 'axios';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NewProject extends Component {

    state = {
        id: "",
        title: "",
        description: "",
        stacks: "",
        gitlink: "",
        company: "",
        companies: []
    }

    render() {
        const closeWindow = () => {
            $(".new-project").removeClass("showWindow")
            $(".new-project").addClass("hideWindow")
            window.location.reload(false)
        }
        
        const handleSubmit = (e) => {
            e.preventDefault();
            const data = {
                "project":{
                    "title": "Daily Deal",
                    "stacks": "Flutter",
                    "description": "Create an environment where we can...",
                    "gitlink": "https://github.com/Ricardo-Paul/softbuilders/branches",
                    "company_attributes": {
                        "name": "Noukod"
                    }
                }
            }
            
            axios.post('/projects', data,{
                headers: { 'Authorization': localStorage.getItem("auth_token") }
            })
            .then( res =>{
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }

        const handleChange = (e) => {
           this.setState({
               [e.target.name]:[e.target.value]
           })
        }


        return (
            <div className="new-project">
            <span className="close" onClick={closeWindow}> <FontAwesomeIcon icon={faTimesCircle} /> </span>
            <form onSubmit={handleSubmit}>
                    <input type="text"
                    placeholder="title"
                    name="title"
                    value={this.state.title}
                    onChange={handleChange}
                    /> <br/>

                    <input type="text"
                    placeholder="Description"
                    name="description"
                    value={this.state.description}
                    onChange={handleChange}
                    /> <br/>

                    <input type="text"
                    placeholder="stacks"
                    name="stacks"
                    value={this.state.stacks}
                    onChange={handleChange}
                    /> <br/>

                    <input type="text"
                    placeholder="Github link"
                    name="gitlink"
                    value={this.state.gitlink}
                    onChange={handleChange}
                    /> <br/>

                    <button> ADD & SHARE </button>
                    {this.state.title}
                    {this.state.description}
                    {this.state.stacks}
                    {this.state.gitlink}
                </form>

            </div>
        )
    }
}
