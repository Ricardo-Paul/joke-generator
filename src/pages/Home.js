import React, { useEffect, useContext } from 'react'
import { Context } from '../context'

import User from '../components/User'
import Projects from '../components/Projects'
import NewProject from '../components/NewProject'
import NewProjectButton from '../components/NewProjectButton'


import '../stylesheets/home.scss'

export default function Home() {
    const [state, setState] = useContext(Context)
    console.log(state)

    return (
       
        <div >
            <div className="home">
                <NewProjectButton />
                <User />
                <Projects />
                <NewProject />
                {/* <div className="ideas"> App Ideas </div> */}
            </div>
        </div>
    )
}