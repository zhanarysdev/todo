import React from 'react'
import {connect} from 'react-redux'
import validator from 'validator'
import {fetchData} from '../store/actions'
import TaskEditor from '../components/TaskEditor';
import {md5Generator} from '../helpers/helpers'
class TaskEditorContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user_name: this.props.location.state.data.username,
            user_email: this.props.location.state.data.email,
            task_text: this.props.location.state.data.text,
            status: this.props.location.state.data.id,
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
    sendHundler(e){
        // if(!this.state.user_name_valid && this.state.user_email_valid && this.state.task_valid){
        //     return console.log("somthing wroong")
        // }

        const data = new FormData();
        data.append("status", this.state.status)
        data.append("text", this.state.task_text)
        data.append("token", "beejee")
        data.append("signature", md5Generator(`status=${this.state.status}&text=${this.state.task_text}&token=beejee`))

        
                fetch(`https://uxcandy.com/~shapoval/test-task-backend/edit/${this.props.location.state.data.id}?developer=Zhanarys`,{
                        method: 'POST',
                        body: data,
                        })
                        .then(response => alert("saved"))
                        .then(json => {
                            return console.log(json);
                        })
                        .catch(e => {
                            return console.log(e)
                        });
            
          
        
    }
    render(){
        return(
            <TaskEditor data={this.state} hundlers={
                {
                    nameHundler:this.nameHundler.bind(this), 
                    emailHundler:this.emailHundler.bind(this), 
                    taskHundler:this.taskHundler.bind(this),
                    sendHundler: this.sendHundler.bind(this)
                }
            }/>
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