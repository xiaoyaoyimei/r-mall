
import React, {Component} from 'react';
import {Logo,OneWrap,Main,Span,NoLogin,Empty} from './style';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import bgPic from '../../static/cartempty.png';
class CartOne extends Component {
  render() {
   	const { loginStatus } = this.props;
        	return(
       <div>
    <OneWrap>
      <Main> <Link to="/"><Logo /></Link><Span>我的购物车</Span></Main>
      </OneWrap>
      {
        loginStatus ?
        <Empty>
        <div className="cartTablenull">  <img src={bgPic} alt="购物车为空"/><span>您的购物车还是空的！  <Link className="go" to='/'>马上去购物</Link></span></div></Empty> :
        <NoLogin><h1>您尚未登录</h1><button><Link to="/login">去登录</Link></button></NoLogin>
      }
      </div>
    )
  }
}
const mapState = (state) => ({
	loginStatus: cookie.load('login')
})
export default connect(mapState,null)(CartOne);
