import React from 'react'
import NavBar from '../components/NavBar';
class NavBarContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isModal: false
        }
    }
    render(){
    return (
        <NavBar isModal={this.state.isModal}/>
    )
}

}

export default NavBarContainer;