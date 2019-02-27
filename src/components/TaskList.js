import  React  from 'react';
import Task from './Task';
import Pagination from './Pagination';



const TaskList = (props) => {
    return(
        <div>
            <Task />
            <Pagination />
        </div>
    )
}


export default TaskList