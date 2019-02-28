import React from 'react'
import {connect} from 'react-redux'
import {isModal} from '../store/actions'
class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user_name: '',
            user_password: ''
        }
    }
    render(){
    return (
        <div id="modal1" className="modal" style={this.props.isModal.isModal ? { display: "block", zIndex: 1003 } : { display: "none" }}>
            <div className="modal-content">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">Login</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Password</label>
                        </div>
                    </div>
                    </form>
            </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat"
                        onClick={(e)=>{
                            e.preventDefault()
                            this.props.some(this.props.isModal.isModal)
                        }}
                    >Cancel</a>
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Login</a>
                </div>
            </div>
            )
        }
        
    }
const stateToProps = state => {
    return state
}
const dispatchToProps = {
    some: isModal
}
export default connect(stateToProps, dispatchToProps)(Modal)