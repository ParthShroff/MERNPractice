import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import List from './components/list.component';
import Edit from './components/edit.component';
import Create from './components/create.component';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link to="/" className="navbar-brand">Todo List</Link>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">List Tasks</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Task</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route path="/" exact component={List} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/create" component={Create} />
      </div>
    </Router>
  );
}

export default App;