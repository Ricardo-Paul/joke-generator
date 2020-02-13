import React from 'react'
import '../stylesheets/projectOverview.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

export default function ProjectOverview({closeOverview, title, src, id}) {
    const showGit = () =>{
        document.querySelector(".p-gitlink").style.left = "5rem";
    }

    const hideGit = () => {
        document.querySelector(".p-gitlink").style.left = "-5rem";
    }

    return (
        <div>
            <div className="project-overview">
                <span className="cross" onClick={closeOverview} > X </span>
                <img className="dev-avatar" src={src} />
                <p className="p-title"> {title} </p>
                <p className="p-description">
                <div className="p-description-label"> Full description </div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ad veritatis vero consequatur? Impedit reprehenderit dignissimos ducimus animi.
                </p>
                <Link to={`/project/${id}`}>
                    <div className="p-button" > Go to project </div>
                </Link>
                {/* <div className="p-gitlink" onClick={hideGit} >
                    <span>
                        <FontAwesomeIcon className="git" icon={faGithub} />
                    </span>
                </div> */}
                {/* <button onClick={showGit} className="p-button"> I want to contribute </button> */}
                {/* company - more project from this company */}
            </div>
        </div>
    )
}
