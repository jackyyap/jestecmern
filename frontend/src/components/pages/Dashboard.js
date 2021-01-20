import React from 'react';
import '../stylesheets/Dashboard.css';
import Author from '../layouts/Author';
import Reviewer from '../layouts/Reviewer';
import Editor from '../layouts/Editor';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Dashboard(auth) {
  return (
  <Router>
  	<Switch>
      <Route path="/dashboard/author" component={Author} />
      <Route path="/dashboard/reviewer" component={Reviewer} />
      <Route path="/dashboard/editor" component={Editor} />
    </Switch>
  </Router>
  );  
}

export default Dashboard;