import React from 'react'
import {connect} from 'react-redux'
import validator from 'validator'
import {fetchData} from '../store/actions'
import TaskEditor from '../components/TaskEditor';
class TaskEditorContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user_name: this.props.location.state.data.username,
            user_email: this.props.location.state.data.email,
            task_text: this.props.location.state.data.text,
                user_name_valid: false,
                user_email_valid: false,
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
    render(){
        return(
            <TaskEditor data={this.state} hundlers={{nameHundler:this.nameHundler.bind(this) , emailHundler:this.emailHundler.bind(this), taskHundler:this.taskHundler.bind(this)}}/>
        )
    }
}

const stateToProps = state => {
    return state
}
const dispatchToProps = {
    fetchData
}

export default connect(stateToProps,dispatchToProps)(TaskEditorContainer)