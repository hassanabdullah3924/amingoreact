import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Feed from './Feed';
import RegistrationForm from './RegistrationForm'; // The App does show it that's why
import "./App.css";

import AppContext from './AppContext'

const App = () => {

   const [state, setState] = useState(
        {
            posts: [],
            postsLoaded: false,
            loadMore: false
        }
   )

   const [globalState, setGlobalState] = useState(
       {
           user: {},
           loggedIn: 'false'
       }
   )
  
   useEffect(()=>{
        if(!state.postsLoaded) {
            // Make fetch request to backend
            fetch('http://localhost:3001/feed/all')
            // Run .json() to convert the backend response
            .then(response => response.json())
            // Change the state for posts array
            .then(json=>{
                setState({ 
                    ...state, 
                    posts: json,
                    postsLoaded: true
                })
            })
            .catch(e=>console.log('error', e))
        }
   });

  return (
        <AppContext.Provider value={[globalState, setGlobalState]}>
            <div className="App">
            <NavBar logo={logo} />
            <Jumbotron 
                title="The Newsletter"
                lead="Welcome to ABC.com, the biggest platform for the alphabet."
                moreInfo="Click here to learn more about learning ABC"
                buttonLabel="Signup"
            />

            <h1>{globalState.loggedIn}</h1>
            <RegistrationForm />
            </div>
        </AppContext.Provider>
  );
};

export default App;
