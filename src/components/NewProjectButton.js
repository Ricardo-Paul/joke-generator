import React from 'react'
import { faPlus, faChevronCircleDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import '../stylesheets/newproject.scss'

export default function NewProjectButton() {
    const openWindow = () => {
        document.querySelector(".new-project").style.transform = "scale(1)"
        document.querySelector("body").style.overflow = "hidden"
    }
    return (
        <div>
            <button className="new-project-button" onClick={openWindow}>
                NEW PROJECT
                <span> <FontAwesomeIcon icon={faPlus} /> </span> 
            </button>
        </div>
    )
}
