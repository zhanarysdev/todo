import React from 'react';
import TaskCreator from '../components/TaskCreator';


class TaskCreatorContainer extends React.Component {
    constructor(props){
        super(props) 
           this.state = {
                user_name: '',
                user_email: '',
                task_text: ''
        }
    }
    render(){
        const nameHundler = (e) =>  {
            this.setState({user_name: e.target.value})
        }
        const emailHundler = (e) =>  {
            this.setState({user_email: e.target.value})
        }
        
    
        const taskHundler = (e) => {
            this.setState({task_text: e.target.value})
        }
        // sendHundler(e){
    
        // }
        console.log(this.props)
    return (
        <TaskCreator nameHundler={nameHundler} emailHundler={emailHundler} taskHundler={taskHundler} />
    )
}
}

export default TaskCreatorContainer