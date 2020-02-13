import React, { Component } from 'react'
import axios from 'axios'
import avatar from '../stylesheets/images/avatar.jpg';
import '../stylesheets/projects.scss'
import $ from "jquery"
import ProjectOverview from './ProjectOverview';

import { faPlus, faChevronCircleDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Projects extends Component {
    state = {
        projects: [],
        projectId:'',
        singleProject: {},
        singleProjectPicture: '',
        picture:'',
        keyword: '',
        count: '',
        loading: false
    }

    componentDidMount(){
        axios.get(`/projects?keyword=${this.state.keyword}`)
        .then(res => {
            console.log("projects here", res.data)
            const data = res.data
            this.setState({
                projects: res.data
            })
            console.log("user id here", this.state.id)
        })

        const auth_token = localStorage.getItem("auth_token")
        axios.get('/profile',{
            headers: {
                Authorization: auth_token
            }
        })
        .then(res => {
            const data = res.data
            console.log('user p', res.data)
            this.setState({
                picture: data.picture
            })
        })
    }

    render() {
        const overview = (id) => {
                $(".project-overview").removeClass("hideWindow")
                $(".project-overview").addClass("showWindow")
                axios.get(`/projects/${id}`)
                .then(res => {
                    console.log( "myP", res.data)
                    this.setState({
                        singleProject: res.data,
                        singleProjectPicture: res.data.user.picture
                    })
                })
        }
        const closeOverview = () => {
            $(".project-overview").removeClass("showWindow")
            $(".project-overview").addClass("hideWindow")
        }

        const fetchSearchResult = (keyword) => {
            axios.get(`/projects?keyword=${keyword}`)
            .then(res => {
                this.setState({
                    projects: res.data,
                    count: this.state.projects.length,
                    loading: false
                })
            })
        }

        const handleChange = (e) => {
            this.setState({
                loading: true,
                keyword: e.target.value
            })
            fetchSearchResult(e.target.value)
        }

        return (
            <div className="project-wrapper">
                <ProjectOverview 
                 closeOverview={closeOverview}
                 title={this.state.singleProject.title}
                 src={`http://localhost:3000//${this.state.singleProjectPicture}`}
                 id={this.state.singleProject.id}
                />
                <div className="projects">
                     <input 
                        className="search-project"  
                        placeholder="Search project by title..." 
                        value={this.state.keyword}
                        onChange={(e) => handleChange(e)}
                        />
                { this.state.keyword && (<div className="result-text"> Search result for { ''}
                <span> {this.state.keyword}</span>
                <span> {this.state.count} results </span>
                 </div>) }
                 {this.state.loading? (<p> loading...</p>): (this.state.projects.map( p => (
                    <div className="project-card" key={p.id} >
                        <div className="dev-photo">
                            <img src={`http://localhost:3000/${p.user.picture}`} alt=""/>
                        </div>
                        <div className="card-body">
                            <div className="card-header">
                                <p> {p.user.name} </p>
                                <p> {p.created_at} </p>
                            </div>
                            <p className="project-title"> {p.title} </p>
                            <p className="project-description"> {p.description} </p>
                            <div className="card-buttons">
                                <span onClick={() => overview(p.id)} > <FontAwesomeIcon icon={faEllipsisH} /> </span>
                            </div>
                        </div>
                    </div>
                ))) }

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
//