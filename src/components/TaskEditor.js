import React from 'react';


const TaskEditor = (props) => {
    const data=props.data
    const {nameHundler , emailHundler, taskHundler, sendHundler} = props.hundlers
    return (
        <form className="col s12" onEncrypted="multipart/form-data">
            <div className="row">
                <div className="input-field col s6">
                    <input  id="user_name" type="text" value={data.user_name} className="active"  
                    onChange={(e)=>{
                        nameHundler(e)
                    }}/>
                    <label htmlFor="user_name">User Name</label>
                </div>
                <div className="input-field col s6">
                    <input  id="email" type="text" className="active" value={data.user_email} 
                    onChange={(e)=>{
                        emailHundler(e)
                    }} />
                    <label htmlFor="email">User email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea id="task_text" className="materialize-textarea" value={data.task_text}  className="materialize-textarea active"  
                    onChange={(e)=>{
                        taskHundler(e)
                    }}></textarea>
                    <label htmlFor="task_text">Textarea</label>
                </div>
            </div>
            <div className="row">
                <button type="submit" 
                    className="waves-effect waves-light btn" 
                    // disabled={
                    //     props.context.state.user_name_valid 
                    //     && props.context.state.user_email_valid 
                    //     && props.context.state.task_valid 
                    //     ? 
                    //     false 
                    //     : 
                    //     true 
                    // } 
                    style={{width: "100%", focus: "none"}}
                    onClick={(e)=>{
                        e.preventDefault()
                        sendHundler()
                    }}
                    >
                    save task 
                </button>
            </div>
        </form>
    )
}


export default TaskEditor