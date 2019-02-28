import React from 'react'
import styles from './index.css'
const Sorter = (props) => {
    return(
        <div className={styles.sorter_row}>
            <a className={`waves-effect waves-light btn-small ${styles.btn_margins}`}
                onClick={(e)=>{
                    e.preventDefault()
                    props.filter(undefined, "username", "asc")
                }}
            ><i className="material-icons right">arrow_drop_up</i>sorting by username</a>
            <a className={`waves-effect waves-light btn-small ${styles.btn_margins}`}
                onClick={(e)=>{
                    e.preventDefault()
                    props.filter(undefined, "id", "asc")
                }}
            ><i className="material-icons right">arrow_drop_up</i>sorting by id</a>
            <a className={`waves-effect waves-light btn-small ${styles.btn_margins}`}
                onClick={(e)=>{
                    e.preventDefault()
                    props.filter(undefined, "email", "asc")
                }}
            ><i className="material-icons right">arrow_drop_up</i>sorting by email</a>
            <a className={`waves-effect waves-light btn-small ${styles.btn_margins}`}
                onClick={(e)=>{
                    e.preventDefault()
                    props.filter(undefined, "status", "asc")
                }}
            ><i className="material-icons right">arrow_drop_up</i>sorting by status</a>
        </div>
    )
}

export default Sorter