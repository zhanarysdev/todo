import React from 'react';


const TaskCreator = (props) => {
    const {nameHundler, emailHundler, taskHundler} = props
    return (
        <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input  id="user_name" type="text" className="validate" onChange={(e)=>{
                        nameHundler(e)
                    }}/>
                    <label htmlFor="user_name">User Name</label>
                </div>
                <div className="input-field col s6">
                    <input  id="email" type="text" className="validate" onChange={(e)=>{
                        emailHundler(e)
                    }} />
                    <label htmlFor="email">User email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea id="task_text" className="materialize-textarea" onChange={(e)=>{
                        taskHundler(e)
                    }}></textarea>
                    <label htmlFor="task_text">Textarea</label>
                </div>
            </div>
            <div className="row">
                <button type="submit" className="waves-effect waves-light btn" style={{width: "100%"}}>
                    create task 
                </button>
            </div>
        </form>
    )
}


export default TaskCreator