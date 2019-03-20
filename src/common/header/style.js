import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
	z-index: 1;
	position: relative;
	height: 50px;
	line-height:50px;
	border-bottom: 1px solid #f0f0f0;
	background:#1b1b1b;
`;

export const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 265px;
	height: 42px;
	background: url(${logoPic});
	background-size: contain;
`;

export const Nav = styled.div`
	width: 1200px;
	height: 100%;
	box-sizing: border-box;
	margin: 0 auto;
   color:#ccc;
`;

export const NavItem = styled.div`
	line-height: 50px;
	padding: 0 15px;
	font-size: 16px;
	color: #fff;
	&.left {
		display:inline-block;
	}
	&.right {
		float: right;

	}
	&.active {
		color: #ea6f5a;
	}
`;

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;

export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-siz: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`;
