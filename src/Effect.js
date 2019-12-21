import React, { useState, useEffect } from 'react'
import axios from 'axios';
import decode from 'he'

const Effect = () => {
    const [joke, setJoke] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState('');

    const [count, setCount] = useState(0);
    const [lastJoke, setLastJoke] = useState('')

    useEffect( () => {
        const fetchJoke = () => {
            const url = new URL('https://api.icndb.com/jokes/random')
            axios.get(url)
                .then(res => {
                    const { value } = res.data;
                    const joke = value.joke.replace(/&quot;/g,'"')
                    setJoke(joke)
                })
                .catch(err =>{
                    setError(err.message)
                })
        }
        fetchJoke();
    }, [lastJoke])
     
    return(
         <div>
        <h4>{joke || error }</h4>
         <button onClick={ ()=> setLastJoke(joke) }>Joke</button>
        </div>
    )
}

export default Effect

