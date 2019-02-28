import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'



import TaskListComponent from './containers/TaskListContainer';
import ControlButton from './components/ControlButton';
import TaskCreatorContainer from './containers/TaskCreatorContainer';
import NavBarContainer from './containers/NavBarContainer';
import NavBar from './components/NavBar';
import './index.css'


const App = (props) => {
    return (
        <Router>
            <React.Fragment>
                <NavBarContainer/>
                <div className="container" style={{ paddingTop: '30px' }}>
                <ControlButton />
                    <Switch>
                        <Route exact path="/" component={TaskListComponent} />
                        <Route path="/create" component={TaskCreatorContainer} />
                    </Switch>
                </div>
            </React.Fragment>
        </Router>
    )
}

export default App 