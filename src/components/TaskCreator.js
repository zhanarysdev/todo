import React from 'react';


const TaskCreator = () => {
    return (
        <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                    <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                    <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                    <label htmlFor="first_name">First Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                    <label htmlFor="textarea1">Textarea</label>
                </div>
            </div>
        </form>
    )
}


export default TaskCreator