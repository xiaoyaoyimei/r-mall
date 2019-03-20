import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from '../../common/header/index';
import Nav from '../../common/nav/index';

export class Tab1 extends React.Component{
	render(){
		return(
			<div>
        <Header />
			<Nav></Nav>
			</div>
		)
	}
}
