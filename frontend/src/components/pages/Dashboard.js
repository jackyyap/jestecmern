import React from 'react';
import '../stylesheets/Dashboard.css';
import Author from '../layouts/Author';
import Reviewer from '../layouts/Reviewer';
import ReviewerReader from '../layouts/ReviewerReader';
import Editor from '../layouts/Editor';

import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

function Dashboard(auth) {
  return (
  <Router>
  	<Switch>
      <Route path="/dashboard/author" component={Author} />
      <Route path="/dashboard/reviewer" component={Reviewer} />
      <Route path="/dashboard/reviewer-reader" component={ReviewerReader} />
      <Route path="/dashboard/editor" component={Editor} />
    </Switch>
  </Router>
  );  
}

export default Dashboard;