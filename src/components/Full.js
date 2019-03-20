import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {Tab1} from './tab/tab1'
import Login from '../pages/login/index';


export class Full extends React.Component {
  render() {
    return (
             <Router>
					    <div className="router">
					      <Route exact path="/" component={Tab1}></Route>
					      <Route path="/detail" component={Tab1}></Route>
					      <Route path="/login" component={Login}></Route>
					    </div>
					  </Router>
    );
  }
}
