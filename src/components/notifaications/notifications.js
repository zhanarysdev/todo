import React from 'react'
import ReactDOM from 'react-dom'

import styles from './index.css'
export const Warning = (props) => {
    console.log(props)
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
    !document.getElementById('warning') ?  window.document.body.appendChild(node) : "";
    setTimeout(() => {
        document.getElementById('warning') ? document.body.removeChild(document.getElementById('warning')) : '';
    }, 1000);
}