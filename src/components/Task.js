import React from 'react';
const Task = (props) => {
    const renderData = () => {
        return props.data
            ? props
                .data
                .map((obj, key) => {
                    return (
                        <tr key={key}>
                            <td>{obj.username}</td>
                            <td>{obj.email}</td>
                            <td>{obj.text}</td>
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