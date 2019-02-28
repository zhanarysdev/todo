import React from 'react'
const Pagination = (props) => {
    const pageCount = props.taskCount ? props.taskCount : ''
    const currentPage = props.currentPage ? props.currentPage : ''
    const renderData = () => {
        var lim =  pageCount / 3
        var mass = []
        for (var index = 0; index < lim; index++) {
            mass.push(
                <li
                    className={currentPage === index +1
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
                        props.pageChanger(currentPage-1)
                    }}
                >
                    <a href="#!">
                        <i className="material-icons">chevron_left</i>
                    </a>
                </li>

                {mass}
                <li className="waves-effect"
                    onClick={()=>{
                        props.pageChanger(currentPage+1)
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


export default Pagination