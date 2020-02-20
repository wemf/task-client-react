import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import ProjectsPage from './components/projects/ProjectsPage';
import ProjectState from './context/projects/ProjectState';

function App() {
  return (
    <ProjectState>
      <Router>
        <Switch> 
          <Route exact path="/" component={Login} />
          <Route exact path="/new-account" component={NewAccount} />
          <Route exact path="/projects" component={ProjectsPage} />
        </Switch>
      </Router>
    </ProjectState>
  );
}

export default App;
