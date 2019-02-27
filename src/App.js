import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'




import NavBar from './components/NavBar';
import TaskCreator from './components/TaskCreator';
import TaskList from './components/TaskList';
import TaskListComponent from './containers/TaskListContainer';




const App = () => {
    return (
        <Router>
            <React.Fragment>
                <NavBar />
                <div className="container" style={{ paddingTop: '30px' }}>
                    <Switch>
                        <Route exact path="/" component={TaskListComponent} />
                        <Route path="/create" component={TaskCreator} />
                    </Switch>
                </div>
            </React.Fragment>
        </Router>
    )
}

export default App 