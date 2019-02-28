import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Modal from './Modal';
import {isModal} from '../store/actions'
const NavBar = (props) => {
    return (
        <React.Fragment>
            <nav>
                <div className="nav-wrapper grey darken-4">
                    <Link to="/" className="brand-logo">Task manager</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#"
                            onClick={(e)=>{
                                e.preventDefault()
                                props.some(props.isModal.isModal)
                            }}
                        >Log in</a></li>
                    </ul>
                </div>
            </nav>
            <Modal/>
        </React.Fragment>
    )
}

const stateToProps = state => {
    return state
}

const dispatchToProps = {
       some: isModal
}

export default connect(stateToProps, dispatchToProps)(NavBar);