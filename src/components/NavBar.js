import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <React.Fragment>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Task manager</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Log in</a></li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}


export default NavBar;