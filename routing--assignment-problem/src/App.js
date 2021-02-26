import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Course from './containers/Course/Course'
import {BrowserRouter, Route, Switch, NavLink, Redirect} from "react-router-dom";
import classes from './App.module.css'

class App extends Component {
  render () {
    return (
        <BrowserRouter>
          <div className={classes.App}>
            <header>
              <nav>
                <ul>
                  <li><NavLink to='/courses' exact>Courses</NavLink></li>
                  <li><NavLink to='/users' exact>Users</NavLink></li>
                  <li></li>
                </ul>
              </nav>
            </header>
            <Switch>
              <Redirect to='/courses' from='/all-courses'/>
              <Route path='/' exact component={Users}/>
              <Route path='/users' component={Users}/>
              <Route path='/courses' component={Courses}/>
              <Route render={() => <h1>Not found</h1>}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
