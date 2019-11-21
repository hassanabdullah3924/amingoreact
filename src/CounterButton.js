import React,  { useState } from 'react' 

const CounterButton = () => {

    const [state, setState] = useState(0); // BEcause of the 0 that means that state = 0;
                              // The array is coming from useState
    const changeNumber = () =>{
        let newState = state + 1;
        setState(newState)
    }

  return (
    <button onClick={changeNumber}>{state}</button>
  )
}

export default CounterButton;