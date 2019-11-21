import React, { useState } from 'react';

const LoginButton = () => {

    const [state, setState] = useState(
        {
            status: 'logged-out',
            label: 'Log In'
        }
    )

    const loginHandler = () => {
        if(state.status === 'logged-in') {
            setState({
                ...state, 
                status: 'logged-out',
                label: 'Log In'
            });
        } else {
            setState({
                ...state, 
                status: 'logged-in',
                label: 'Log Out'
            });
        }
        
    }

    return(
        <button onClick={loginHandler} className="btn btn-primary">
            { state.label }
        </button>
    )
}

export default LoginButton;