import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/myprojects.scss'
import { Link } from 'react-router-dom'
import { faTrash, faTasks, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class MyProjects extends Component {

    state = {
        myprojects:[],
// -----------------
        id: "",
        title: "",
        description: "",
        stacks: "",
        gitlink: "",
        company: "",
        companies: [],

        success: false
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

        const editProject = (id) => {
            axios.get(`/projects/${id}`)
            .then(res => {
                this.setState({
                    id: id,
                    title: res.data.title,
                    stacks: res.data.stacks,
                    gitlink: res.data.gitlink,
                    description: res.data.description
                })
            })
        }

        const handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
         }

        const handleSubmit=(e, id)=> {
            id = this.state.id
            e.preventDefault();
            const data = {
                "project":{
                    "title": this.state.title,
                    "stacks": this.state.stacks,
                    "description": this.state.description,
                    "gitlink": this.state.gitlink
                }
            }
            axios.put(`/projects/${id}`, data,{
                headers: { 'Authorization': localStorage.getItem("auth_token") }
            })
            .then( res =>{
                window.location.reload(false)
            })
            .catch(err => {
                console.log(err)
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
                            <button className="trash-button" onClick={() => deleteProject(p.id)} >                  <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <button onClick={() => editProject(p.id)}>
                                Edit
                            </button>
                        </li>
                    ))
                    }
                </ul>

                <h2> Update </h2>
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


                    <button type="submit"> Save </button>
                </form>
            </div>
        )
    }
}

