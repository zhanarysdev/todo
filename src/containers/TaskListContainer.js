import React from 'react'
import {connect} from 'react-redux'
import TaskList from '../components/TaskList';
import {fetchData} from '../store/actions'
class TaskListComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            some: 'saf'
        }
    }


    componentDidMount(){
        this.props.fetchData("asd")
    }
    render(){
        return(
            <div>
                <TaskList {...this.props} />
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