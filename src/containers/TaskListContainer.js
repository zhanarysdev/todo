import React from 'react'
import {connect} from 'react-redux'
import Task from '../components/Task';
import {fetchData} from '../store/actions'
import Pagination from '../components/Pagination'
import {Preloader} from '../helpers/helpers'
import Sorter from '../components/sorter/Sorter';


class TaskListComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sortByName: 'asc',
            sortById: 'asc',
            sortByEmail: 'asc',
            sortByStatus: 'asc'
        }
    }


    componentDidMount(){
        this.props.fetchData()
    }
    

    render(){
        // pageChanager method takes 3 params, page param not required(only if you want change page)
        // "from" param says were called method and execute switch statment
        // "dir" param is filter_direction
        const pageChanger=(page=this.props.datafetch.page, dir, from)=>{
            if(from) {
                switch (from) {
                    case "username":
                     console.log('from')
                        this.setState({sortByName: dir == "asc" ?  "desc" : "asc"})
                        this.props.fetchData(page, "username", this.state.sortByName)
                    break
                    case "id":
                        this.setState({sortById: dir == "asc" ?  "desc" : "asc"})
                        this.props.fetchData(page, "id", this.state.sortById)
                    break;
                    case "email":
                        this.setState({sortByEmail: dir == "asc" ?  "desc" : "asc"})
                        this.props.fetchData(page, "email", this.state.sortByEmail)
                    break;
                    case "status":
                        this.setState({sortByStatus: dir == "asc" ?  "desc" : "asc"})
                        this.props.fetchData(page, "status", this.state.sortByStatus)
                    break;
                
                    default:
                        return ""
                        break;
                }
            } else {
            this.props.fetchData(page)
        }
        }
        return(
            <div>
                <Sorter filter={pageChanger} currentState={this.state}/>
                <Task data={this.props.datafetch.data ? this.props.datafetch.data.tasks : ''} 
                isAdmin={this.props.login.login}/>
                <Pagination 
                    data={this.props.datafetch.data ? this.props.datafetch.data.tasks : ''}    
                    taskCount={this.props.datafetch.data ? this.props.datafetch.data.total_task_count : ''}
                    currentPage={this.props.datafetch.data ? this.props.datafetch.page : ''}
                    pageChanger={pageChanger}/>
                    
                    
                    {/* call preloader , give identifier(true or false)*/}
                {Preloader(this.props.datafetch.isFetching)}
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