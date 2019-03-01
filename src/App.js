import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



import TaskListComponent from './containers/TaskListContainer';
import ControlButton from './components/ControlButton';
import TaskCreatorContainer from './containers/TaskCreatorContainer';
import NavBarContainer from './containers/NavBarContainer';
import TaskEditorContainer from './containers/TaskEditorContainer';
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
                        <Route path="/edit/:id" component={TaskEditorContainer} />
                    </Switch>
                </div>
            </React.Fragment>
        </Router>
    )
}

export default App 