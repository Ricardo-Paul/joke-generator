import React, { useState } from 'react'
import $ from "jquery"

export default function Modal() {

    const [name, setName] = useState("")

    const closeModal = () => {
        $(".modal").hide()
        $(".modal-button").fadeToggle()
    }

    const openModal = () => {
        setName("Ricardo")
        $(".modal").show()
        $(".modal-button").hide()
        $(".modal-body").addClass("red")
    }

    return (
        <>
        <div className="modal-container">
        <div className="modal disappear">
            <div className="modal-header">
               {name} IDEAS <span onClick={closeModal}>x</span>
            </div>
            <div className="modal-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio animi vel quae quas cupiditate quidem veniam, iusto blanditiis libero minima cumque harum porro laboriosam recusandae nulla architecto. Doloremque, dolorum ullam.
            </div>
        </div>
        <button onClick={openModal} className="modal-button"> IDEAS </button>
        </div>
        </>
    )
}