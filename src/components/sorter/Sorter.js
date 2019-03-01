/*
    filter method takes 3 params 
    props.filter(undefined, props.currentState.sortByName, "username")
    first param is page number, give undefined for not change page
    second param is sort_direction (asc || desc)
    third param is sort_field (username , id, email, text)
*/
import React from 'react'
import styles from './index.css'
const Sorter = (props) => {
    return(
        <div className={styles.sorter_row}>
            <a className={`waves-effect waves-light btn-small ${styles.btn_margins}`}
                onClick={(e)=>{
                    e.preventDefault()
                    props.filter(undefined, props.currentState.sortByName, "username")
                }}>   
                <i className="material-icons right">
                    {props.currentState.sortByName == "asc" ? "arrow_drop_up":"arrow_drop_down"}
                </i>
                sorting by username
            </a>
            <a className={`waves-effect waves-light btn-small ${styles.btn_margins}`}
                onClick={(e)=>{
                    e.preventDefault()
                    props.filter(undefined, props.currentState.sortById, "id")
                }}>
                <i className="material-icons right">
                    {props.currentState.sortById == "asc" ? "arrow_drop_up":"arrow_drop_down"}
                </i>
                sorting by id
            </a>
            <a className={`waves-effect waves-light btn-small ${styles.btn_margins}`}
                onClick={(e)=>{
                    e.preventDefault()
                    props.filter(undefined, props.currentState.sortByEmail, "email")
                }}>
                <i className="material-icons right">
                    {props.currentState.sortByEmail == "asc" ? "arrow_drop_up":"arrow_drop_down"}
                </i>
                sorting by email
            </a>
            <a className={`waves-effect waves-light btn-small ${styles.btn_margins}`}
                onClick={(e)=>{
                    e.preventDefault()
                    props.filter(undefined, props.currentState.sortByStatus, "status")
                }}>
                <i className="material-icons right">
                    {props.currentState.sortByStatus == "asc" ? "arrow_drop_up":"arrow_drop_down"}
                </i>
                sorting by status
            </a>
        </div>
    )
}

export default Sorter