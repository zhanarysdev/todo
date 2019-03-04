import React from 'react'
const Pagination = (props) => {
    const pageCount = props.taskCount ? props.taskCount : ''
    const currentPage = props.currentPage ? props.currentPage : ''
    const renderData = () => {
        var lim =  pageCount / 3 // 3 because we render only 3 tasks by page
        let mass = []
        for (var index = 0; index < lim; index++) {
            mass.push(index);
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
                {mass.map( obj => {
                 return(  <li className={currentPage === obj+1
                        ? "active"
                        : ""}
                        style={{verticalAlign: "middle", margin:"5px"}}
                        key={obj}>
                            <a href="#!"
                                onClick={(e)=>{
                                    e.preventDefault()
                                    props.pageChanger(obj+1)
                                }}    
                            >{obj+1}</a>
                        </li>
                )})
                }
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