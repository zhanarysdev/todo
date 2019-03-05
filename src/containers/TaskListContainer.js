import React from 'react'
import {connect} from 'react-redux'
import Task from '../components/Task';
import {fetchData} from '../store/actions'
import Pagination from '../components/Pagination'
import {Preloader, md5Generator} from '../helpers/helpers'
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
    

    // pageChanager method takes 3 params, page param not required(only if you want change page)
    // "from" param says were called method and execute switch statment
    // "dir" param is filter_direction
    pageChanger(page=this.props.datafetch.page, dir, from){
        if(from) {
            switch (from) {
                case "username":
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
    statusEditHundler(some){
        let status; 
        if (some.status == 10) {
            status = 0
        } else {
            status = 10
        }
        console.log(status)
        const data = new FormData();
        data.append("status", status)
        data.append("token", "beejee")
        data.append("signature", md5Generator(`status=${status}&token=beejee`))
        
        fetch(`https://uxcandy.com/~shapoval/test-task-backend/edit/${some.id}?developer=Zhanarys`,{
                method: 'POST',
                body: data,
                })
                .then(response => {
                    console.log(response.json()) 
                    this.props.fetchData(this.props.datafetch.page)
                    })
                .then(json => {
                    console.log(json);
                    })
                .catch(e => {
                    return console.log(e)
                });
    }
    render(){
        return(
            <div>
                <Sorter filter={this.pageChanger.bind(this)} currentState={this.state}/>
                <Task data={this.props.datafetch.data ? this.props.datafetch.data.tasks : ''} 
                      isAdmin={this.props.login.login}
                      statusEditHundler={this.statusEditHundler.bind(this)}/>
                <Pagination 
                    data={this.props.datafetch.data ? this.props.datafetch.data.tasks : ''}    
                    taskCount={this.props.datafetch.data ? this.props.datafetch.data.total_task_count : ''}
                    currentPage={this.props.datafetch.data ? this.props.datafetch.page : ''}
                    pageChanger={this.pageChanger.bind(this)}/>
                    
                    
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