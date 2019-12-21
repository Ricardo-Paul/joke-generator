import React, { useState, useEffect} from 'react';
import { decode } from 'he'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async signal => {
    const url = new URL('https://api.icndb.com/jokes/random');
    const response = await fetch(url, { signal });
    // const { value } = await response.json();
    const { value } = await response.json();
    setJoke(decode(value.joke))
   }

   useEffect(()=>{
     if(!joke) {
       const controller = new AbortController();
       fetchJoke(controller.signal);

       return () => controller.abort();
     }
   }, [joke])


  return(
    <h2>Hello React</h2>
  )
}

export default App;
