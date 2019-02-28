import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Modal from './modal/Modal';
import {isModal,logOutAct} from '../store/actions'
const NavBar = (props) => {
    return (
        <React.Fragment>
            <nav>
                <div className="nav-wrapper grey darken-4">
                    <Link to="/" className="brand-logo">Task manager</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {props.login.login
                        ?
                        <li><a href="#"
                            onClick={(e)=>{
                                e.preventDefault()
                                props.logOut()
                            }}
                        >Log out</a></li>
                        :
                        <li><a href="#"
                            onClick={(e)=>{
                                e.preventDefault()
                                props.some(props.isModal.isModal)
                            }}
                        >Log in</a></li>
                        }
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
       some: isModal,
       logOut: logOutAct
}

export default connect(stateToProps, dispatchToProps)(NavBar);