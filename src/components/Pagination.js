import React from 'react'
const Pagination = (props) => {
    const pageCount = props.taskCount ? props.taskCount : ''
    const currentPage = props.currentPage ? props.currentPage : ''
    const renderData = () => {
        var lim =  pageCount / 3 // 3 because we render only 3 tasks by page
        var mass = []
        for (var index = 0; index < lim; index++) {
            mass.push(
                <li
                    className={currentPage === index+1
                    ? "active"
                    : ""}
                    key={index}>
                    <a href="#!">{index+1}</a>
                </li>
            )
        }
        return (
            <ul className="pagination">

                <button className="btn waves-effect waves-light" disabled={currentPage === 1 ? 'disabled' : ''} 
                     onClick={()=>{
                        props.pageChanger(currentPage-1)
                    }}
                >
                    <a href="#!">
                        <i className="material-icons">chevron_left</i>
                    </a>
                </button>

                {mass}
                <button className="btn waves-effect waves-light" disabled={currentPage >= pageCount / 3 ? 'disabled' : ''}
                    onClick={()=>{
                        props.pageChanger(currentPage+1)
                    }}
                >
                    <a href="#!">
                        <i className="material-icons">chevron_right</i>
                    </a>
                </button>

            </ul>
        )
    }
    return renderData()
}


export default Pagination