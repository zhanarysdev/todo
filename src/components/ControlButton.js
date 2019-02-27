import React from 'react'
import {Link} from 'react-router-dom'
const ControlButton = (props) => {
    const some = () => {
        if(window.location.pathname === '/') {
            return <Link to="/create" className="waves-effect waves-light btn" style={{width: "100%"}}>create task</Link>
        } else {
            return <Link to="/" className="waves-effect waves-light btn" style={{width: "100%"}}>task list</Link>
        }
    }
    return some()        
}
export default ControlButton