import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Search from './components/Search';
import{actionCreators} from './store'
import {
	NavWrapper,
	Logo,
	MainWidth
} from './style';

class Nav extends Component {
	render() {
		return (
			<NavWrapper>
        <MainWidth> <Logo />
        <List />
				<Search /></MainWidth>
			</NavWrapper>
		);
	}
	componentDidMount(){
		this.props.getList();
	}
}
const mapDispatch=(dispatch)=>({
	getList(){
		dispatch(actionCreators.getList())
	}
})
export default connect(null,mapDispatch)(Nav);
