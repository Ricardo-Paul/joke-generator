import React, { Component } from 'react'
import '../stylesheets/newproject.scss'
import $ from 'jquery'
import axios from 'axios';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NewProject extends Component {

    componentDidMount(){
        axios.get('/companies')
        .then(res => {
            console.log("companies",res.data)
        })
    }

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

        const handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
         }

         const onTitleChange = (e) => {
            this.setState({
                title: e.target.value
            })
         }
         
         const closeWindow = () => {
             document.querySelector(".new-project").style.transform = "scale(0)" //
            window.location.reload(false)
        }

        const handleSubmit=(e)=>{
            e.preventDefault();
            const data = {
                "project":{
                    "title": this.state.title,
                    "stacks": this.state.stacks,
                    "description": this.state.description,
                    "gitlink": this.state.gitlink,
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

        return (
            <div className="new-project">
            <span className="close" onClick={closeWindow}> <FontAwesomeIcon icon={faTimesCircle} /> </span>
            <p className="p-text"> Add New Project </p>
            <form className="add-project-form" onSubmit={(e)=> handleSubmit(e)}>
                    <input type="text"
                    placeholder="title"
                    name="title"
                    value={this.state.title}
                    onChange={handleChange}
                    /> <br/>

                    <input type="text"
                    placeholder="E.g: JavaScript Python Flutter "
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

                    <textarea type="text"
                    placeholder="Description"
                    name="description"
                    value={this.state.description}
                    onChange={handleChange}
                    /> <br/>


                    <button type="submit"> ADD & SHARE </button>
                    {this.state.title}
                    {this.state.description}
                    {this.state.stacks}
                    {this.state.gitlink}
                </form>
                {/* <div className="published">
                    Project Added
                </div> */}
            </div>
        )
    }
}
