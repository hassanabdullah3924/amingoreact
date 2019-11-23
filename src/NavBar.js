import React from 'react';
import LoginButton from './LoginButton'
import AppContext from './AppContext'
const NavBar = (prop) => {

  const [globalState, setGlobalState] = useContext (AppContext);

    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
            <img src={prop.logo} width="64" height="64"/>
        </a>
        <div className="form-inline">
          <LoginButton />
          <input 
            className="form-control mr-sm-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" />
          <button 
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit">Search
          </button>
        </div>
      </nav>
    )
  }

export default NavBar;