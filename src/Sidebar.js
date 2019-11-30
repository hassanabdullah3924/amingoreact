import React, {useContext} from 'react';
import AppContext from './AppContext';

const Sidebar = () => {

    const [globalState, setGlobalState] = useContext(AppContext);

    const theClass = globalState.sidebarOpen ? 'sidebar open' : 'sidebar';
    

    return (
        <div className={theClass}>
            
            <button onClick={closeSideBar} className="btn btn-danger">Close</button>
        </div>
    )
}

export default Sidebar;