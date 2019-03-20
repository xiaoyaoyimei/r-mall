import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {Full} from '../components/Full';
import Home from '../pages/home/index'
import Login from '../pages/login/index';


export class Routers extends React.Component {
  render() {
    return (
             <Router>
					    <div className="router">
					      <Route exact path="/" component={Home}></Route>
					      <Route path="/login" component={Login}></Route>
					    </div>
					  </Router>
    );
  }
}
