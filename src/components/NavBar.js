import React from 'react'

const NavBar = () => {
    return (
        <React.Fragment>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Task manager</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Log in</a></li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}


export default NavBar;