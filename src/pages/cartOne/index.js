
import React, {Component} from 'react';
import {Logo,OneWrap,Main,Span,NoLogin} from './style';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
class CartOne extends Component {
  render() {
		return(
    <div>  <OneWrap>
      <Main> <Link to="/"><Logo /></Link><Span>我的购物车</Span></Main>
      </OneWrap>
      <NoLogin><h1>您尚未登录</h1><button>去登录</button></NoLogin>
      </div>
    )
  }
}
export default connect(null,null)(CartOne);
