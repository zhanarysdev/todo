import React from 'react';
import {Link} from 'react-router-dom'
const Task = (props) => {
    const renderData = () => {
        return props.data
            ? props
                .data
                .map((obj, key) => {
                    return (
                        <tr key={key}>
                            <td>  <label> <input type="checkbox" disabled={!props.isAdmin ? 'disabled' : ''}/> <span></span> </label></td>
                            <td>{obj.username}</td>
                            <td>{obj.email}</td>
                            <td>{obj.text}</td>
                            <td>
                                <Link to={`/edit/${obj.id}`} >
                                <button disabled={!props.isAdmin ? 'disabled' : ''}>
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