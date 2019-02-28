import React from 'react';
import validator from 'validator'
import TaskCreator from '../components/TaskCreator';


class TaskCreatorContainer extends React.Component {
    constructor(props){
        super(props) 
           this.state = {
                user_name: '',
                user_name_valid: false,
                user_email: '',
                user_email_valid: false,
                task_text: '',
                task_valid: ''
        }
    }
    nameHundler(e) {
        !validator.isEmpty(e.target.value, {ignore_whitespace:true}) 
        ? 
        this.setState({user_name: e.target.value, user_name_valid: true}) 
        :
        console.log("wrong name")
    }
    emailHundler(e) {
        validator.isEmail(e.target.value) 
        ? 
        this.setState({user_email: e.target.value, user_email_valid: true}) 
        :
        console.log("wrong email")
    }
    

    taskHundler(e) {
        !validator.isEmpty(e.target.value, {ignore_whitespace:true}) 
        ? 
        this.setState({task_text: e.target.value, task_valid: true}) 
        :
        console.log("wrong text")
    }
    // sendHundler(e){

    // }
    render(){
    return (
        <TaskCreator context={this} />
    )
}
}

export default TaskCreatorContainer