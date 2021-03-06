import React from 'react';
import {Link} from 'react-router-dom'
const Task = (props) => {
    const renderData = () => {
        return props.data ? 
        props.data.map((obj, key) => {
            var status = obj.status
                    return (
                        <tr key={key}>
                            <td>  
                                <label>  
                                    <input type="checkbox" disabled={!props.isAdmin ? 'disabled' : ''} checked={obj.status == 10 ? true : false}
                                         onChange={(e)=>{
                                            props.statusEditHundler({id:obj.id, status: obj.status})
                                        }}
                                    />
                                     {/* don't tuch this spans, there're need for rendering checkboxses(materializecss require spans)  */}
                                    <span></span> 
                                </label>
                            </td>
                            <td>{obj.username}</td>
                            <td>{obj.email}</td>
                            <td>{obj.text}</td>
                            <td>
                                <Link to={{
                                    pathname:`/edit/${obj.id}`,
                                    state:{
                                        data:obj
                                        }
                                    }
                                    } >
                                        <button className="btn waves-effect waves-light" disabled={!props.isAdmin ? 'disabled' : ''}>
                                    edit
                                </button>
                                </Link>
                            </td>
                        </tr>
                    )
                })
            : ""
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>status</th>
                        <th>username</th>
                        <th>email</th>
                        <th>text</th>
                        <th>edit</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData()}
                </tbody>
            </table>

        </div>
    )
}

export default Task