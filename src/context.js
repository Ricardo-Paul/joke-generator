import React, { Component, useState } from 'react'

export const Context = React.createContext()

export function ContextController({children}) {
   let initialState = {
        loading: false,
        authenticated: localStorage.auth_token ? true : false,
        loading: false,
        user: {},
        error: ""
    }

const [state, setState] = useState(initialState)
      return  <Context.Provider value={[state, setState]} >
                  {children} 
            </Context.Provider>
}
