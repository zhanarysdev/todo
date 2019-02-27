import React from 'react';
import validator from 'validator'
import TaskCreator from '../components/TaskCreator';


class TaskCreatorContainer extends React.Component {
    constructor(props){
        super(props) 
           this.state = {
                user_name: '',
                user_valid: false,
                user_email: '',
                email_valid: false,
                task_text: ''
        }
    }
    emailHundler(e) {
        validator.isEmail(e.target.value) 
        ? 
        this.setState({user_email: e.target.value, email_valid: true}) 
        :
        console.log("wrong data")
    }
    render(){
        const nameHundler = (e) =>  {
            this.setState({user_name: e.target.value})
        }
        
    
        const taskHundler = (e) => {
            this.setState({task_text: e.target.value})
        }
        // sendHundler(e){
    
        // }
    return (
        <TaskCreator context={this} />
    )
}
}

export default TaskCreatorContainer