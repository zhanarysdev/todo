import React from 'react';


const TaskCreator = (props) => {
    const {nameHundler, emailHundler, taskHundler} = props
    return (
        <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input  id="user_name" type="text" className="validate" style={props.context.state.user_name_valid ? {borderColor: "green"} : {borderColor: "red"}} onChange={(e)=>{
                        props.context.nameHundler(e)
                    }}/>
                    <label htmlFor="user_name">User Name</label>
                </div>
                <div className="input-field col s6">
                    <input  id="email" type="text" className="validate" style={props.context.state.user_email_valid ? {borderColor: "green"} : {borderColor: "red"}} onChange={(e)=>{
                        props.context.emailHundler(e)
                    }} />
                    <label htmlFor="email">User email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea id="task_text" className="materialize-textarea"  className="materialize-textarea validate" style={props.context.state.task_valid ? {borderBottomColor: "green"} : {borderColor: "red"}} onChange={(e)=>{
                        props.context.taskHundler(e)
                    }}></textarea>
                    <label htmlFor="task_text">Textarea</label>
                </div>
            </div>
            <div className="row">
                <button type="submit" 
                    className="waves-effect waves-light btn" 
                    disabled={
                        props.context.state.user_name_valid 
                        && props.context.state.user_email_valid 
                        && props.context.state.task_valid 
                        ? 
                        false 
                        : 
                        true 
                    } 
                    style={{width: "100%", focus: "none"}}>
                    create task 
                </button>
            </div>
        </form>
    )
}


export default TaskCreator