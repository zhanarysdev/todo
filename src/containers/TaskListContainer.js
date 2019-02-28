import React from 'react'
import {connect} from 'react-redux'
import Task from '../components/Task';
import {fetchData} from '../store/actions'
import Pagination from '../components/Pagination'
import Sorter from '../components/sorter/Sorter';

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
        const pageChanger=(page=this.props.datafetch.page , sort, dir)=>{
            this.props.fetchData(page, sort, dir)
        }
        return(
            <div>
                <Sorter filter={pageChanger}/>
                <Task data={this.props.datafetch.data ? this.props.datafetch.data.tasks : ''} isAdmin={this.props.login.login}/>
                <Pagination 
                    data={this.props.datafetch.data ? this.props.datafetch.data.tasks : ''}    
                    taskCount={this.props.datafetch.data ? this.props.datafetch.data.total_task_count : ''}
                    currentPage={this.props.datafetch.data ? this.props.datafetch.page : ''}
                    pageChanger={pageChanger}/>
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