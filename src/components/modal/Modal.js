import React from 'react'
import {connect} from 'react-redux'
import validator from 'validator'
import {isModal,logInAct} from '../../store/actions'
import {Warning} from '../notifaications/notifications'
import styles from'./index.css'
class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user_name: '',
            user_name_valid: false,
            user_password: ''
        }
    }
    nameHundler(e){
        !validator.isEmpty(e.target.value, {ignore_whitespace:true}) 
        ? 
        this.setState({user_name: e.target.value, user_name_valid: true}) 
        :
        console.log("wrong name")
    }
    passwordHundler(e){
        !validator.isEmpty(e.target.value, {ignore_whitespace:true}) 
        ? 
        this.setState({user_password: e.target.value, user_password_valid: true}) 
        :
        console.log("wrong password")
    }
    loginHundler(){
        if(this.state.user_name == "admin" && this.state.user_password === '123'){
            this.props.login()
            this.props.some(this.props.isModal.isModal)
        } else {
            return Warning("wrong user name or password")
        }
    }
    render(){
    return (
        <div id="modal" className={`modal ${styles.modal}`} style={this.props.isModal.isModal ? {display: "block"} : { display: "none" }}>
            <div className="modal-content">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="first_name" type="text" className="validate"
                                style={this.state.user_name_valid ? {borderColor: "green"} : {borderColor: "red"}} 
                                onChange={(e)=>{
                                    this.nameHundler(e)
                                }}
                            />
                            <label htmlFor="first_name">Login</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="last_name" type="text" className="validate" 
                                style={this.state.user_password_valid ? {borderColor: "green"} : {borderColor: "red"}}
                                onChange={(e)=>{
                                    this.passwordHundler(e)
                                }}
                            />
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
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat"
                        onClick={(e)=>{
                            e.preventDefault()
                            this.loginHundler()
                        }}
                    >Login</a>
                </div>
                
            </div>
            )
        }
        
    }
const stateToProps = state => {
    return state
}
const dispatchToProps = {
    some: isModal,
    login: logInAct
}
export default connect(stateToProps, dispatchToProps)(Modal)