import React from 'react'
import {connect} from 'react-redux'
import {fetchData} from '../store/actions'
const Pagination = (props) => {
    const pageCount = props.datafetch.data ? props.datafetch.data.total_task_count : ''
    const currentPage = props.datafetch ? props.datafetch.page : ''
    const renderData = () => {
        var lim =  pageCount / 3
        var mass = []
        for (var index = 0; index < lim; index++) {
            mass.push(
                <li
                    className={currentPage === index + 1
                    ? "active"
                    : ""}
                    key={index}>
                    <a href="#!">{index+1}</a>
                </li>
            )
        }
        return (
            <ul className="pagination">

                <li className={currentPage === 1 ? 'disabled' : ''}
                     onClick={()=>{
                        props.fetchData(currentPage-1)
                    }}
                >
                    <a href="#!">
                        <i className="material-icons">chevron_left</i>
                    </a>
                </li>

                {mass}
                <li className="waves-effect"
                    onClick={()=>{
                        props.fetchData(currentPage+1)
                    }}
                >
                    <a href="#!">
                        <i className="material-icons">chevron_right</i>
                    </a>
                </li>

            </ul>
        )
    }
    return renderData()
}

const stateToProps = state => {
    return state
}
const dispatchToProps = {
    fetchData
}
export default connect(stateToProps, dispatchToProps)(Pagination)