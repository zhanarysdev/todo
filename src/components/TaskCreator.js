import React from 'react';


const TaskCreator = (props) => {
    const {nameHundler, emailHundler, taskHundler, sendHundler} = props.hundlers
    const {user_name_valid, user_email_valid, task_valid} = props.states
    return (
        <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input  
                        id="user_name" type="text" 
                        className="validate" 
                        style={user_name_valid ? {borderColor: "green"} : {borderColor: "red"}} 
                        onChange={(e)=>{
                            nameHundler(e)
                    }}/>
                    <label htmlFor="user_name">User Name</label>
                </div>
                <div className="input-field col s6">
                    <input  
                        id="email" type="text" 
                        className="validate" 
                        style={user_email_valid ? {borderColor: "green"} : {borderColor: "red"}} 
                        onChange={(e)=>{
                            emailHundler(e)
                    }} />
                    <label htmlFor="email">User email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea 
                        id="task_text" 
                        className="materialize-textarea"  
                        className="materialize-textarea validate" 
                        style={task_valid ? {borderBottomColor: "green"} : {borderColor: "red"}} 
                        onChange={(e)=>{
                            taskHundler(e)
                    }}></textarea>
                    <label htmlFor="task_text">Textarea</label>
                </div>
            </div>
            <div className="row">
                <button type="submit" 
                    className="waves-effect waves-light btn" 
                    disabled={
                        user_name_valid 
                        &&user_email_valid 
                        && task_valid 
                        ? 
                        false 
                        : 
                        true 
                    } 
                    style={{width: "100%", focus: "none"}}
                    onClick={(e)=>{
                        e.preventDefault()
                        sendHundler()
                    }}
                    >
                    create task 
                </button>
            </div>
        </form>
    )
}


export default TaskCreator