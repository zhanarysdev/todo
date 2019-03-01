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
                task_valid: false
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
    sendHundler(e){
        if(!this.state.user_name_valid && this.state.user_email_valid && this.state.task_valid){
            return console.log("somthing wroong")
        }

        const data = new FormData();
        data.append("username", this.state.user_name)  
        data.append("email", this.state.user_email)
        data.append("text", this.state.task_text)
       
        fetch('https://uxcandy.com/~shapoval/test-task-backend/create?developer=Zhanarys',{
                method: 'POST',
                body: data,
                })
                .then(response => console.log(response.json()))
                .then(json => {
                    return console.log(json);
                })
                .catch(e => {
                    return console.log(e)
                });

            
        
        
    }
    render(){
    return (
        <TaskCreator hundlers={
            {
                nameHundler: this.nameHundler.bind(this),
                emailHundler: this.emailHundler.bind(this),
                taskHundler: this.taskHundler.bind(this),
                sendHundler: this.sendHundler.bind(this)
            }
        } 
        states={
            {
                user_name_valid: this.state.user_email_valid,
                user_email_valid: this.state.user_email_valid,
                task_valid: this.state.task_valid
            }
        }
        />
    )
}
}

export default TaskCreatorContainer