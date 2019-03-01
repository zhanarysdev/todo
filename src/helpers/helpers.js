/*
there is helpers
add helpers && aditional funcionts here
*/

import React from 'react'
import md5 from 'md5'
import styles from './index.css'
export const Warning = (props) => {
    var node = document.createElement("div");
    node.className = `modal ${styles.warning}`
    node.id = 'warning'
    const h3 = document.createElement("h3");
    const textnode = document.createTextNode("Warning");
    h3.appendChild(textnode)
    textnode.className = styles.warningTitle
    const warningText = document.createTextNode(props)
    node.appendChild(h3);
    node.appendChild(warningText)

    //check to is exist warning element if not add and delet after 1s 
    !document.getElementById('warning') ?  window.document.body.appendChild(node) : "";
    setTimeout(() => {
        document.getElementById('warning') ? document.body.removeChild(document.getElementById('warning')) : '';
    }, 1000);
}


export const md5Generator = (data) => {
    return md5(data)
}




export const Preloader = (data) => {
    return(
        <div className={`preloader-wrapper big ${data ? 'active' : ''} ${styles.preloader}`}>
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    )
}