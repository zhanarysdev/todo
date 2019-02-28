import React from 'react'
import {connect} from 'react-redux'
import Task from '../components/Task';
import {fetchData} from '../store/actions'
import * as tasks from '../fakeData.json'
import Pagination from '../components/Pagination'

class TaskListComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            some: 'saf'
        }
    }


    componentDidMount(){
        this.props.fetchData()
    }
    render(){
        return(
            <div>
                <Task data={this.props.datafetch.data ? this.props.datafetch.data.tasks : ''} />
                <Pagination count={tasks.default.message.total_task_count} page={this.props.datafetch}/>
            </div>
        )
    }
}

const stateToProps = state => {
    return state
}
const dispatchToProps = {
    fetchData
}

export default connect(stateToProps,dispatchToProps)(TaskListComponent)